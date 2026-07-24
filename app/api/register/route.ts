import { NextResponse } from "next/server";
import { sendConfirmationEmail } from "@/lib/email";
import { assertProductionRegisterConfig } from "@/lib/env";
import { rateLimit } from "@/lib/rate-limit";
import { appBaseUrl, clientIp } from "@/lib/request";
import { getSupabaseAdmin } from "@/lib/supabase";
import { createConfirmToken } from "@/lib/tokens";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { validateRegistration } from "@/lib/validation";

export const runtime = "nodejs";

/** Same message for success path after mail — also used when email already confirmed (anti-enumeration). */
const SUCCESS_HINT =
  "Wenn die Adresse neu ist, erhältst du gleich eine Bestätigungsmail.";

export async function POST(request: Request) {
  const productionConfig = assertProductionRegisterConfig();
  if (!productionConfig.ok) {
    console.error("[wattlokal] Production config:", productionConfig.error);
    return NextResponse.json(
      { error: "Anmeldung derzeit nicht möglich. Bitte später erneut versuchen." },
      { status: 503 },
    );
  }

  const ip = clientIp(request);
  const limited = rateLimit(`register:${ip}`);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte warte kurz und versuche es erneut." },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSec) },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const turnstileToken =
    body && typeof body === "object" && "turnstileToken" in body
      ? (body as { turnstileToken?: unknown }).turnstileToken
      : undefined;

  const captcha = await verifyTurnstileToken(turnstileToken, ip);
  if (!captcha.ok) {
    return NextResponse.json({ error: captcha.error }, { status: 400 });
  }

  const validated = validateRegistration(body);
  if (!validated.ok) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const data = validated.data;
  const { token, tokenHash, expiresAt } = createConfirmToken();

  try {
    const supabase = getSupabaseAdmin();

    const { data: existing, error: lookupError } = await supabase
      .from("registrations")
      .select("id, status")
      .eq("email", data.email)
      .maybeSingle();

    if (lookupError) {
      console.error(lookupError);
      return NextResponse.json(
        { error: "Speichern fehlgeschlagen. Bitte später erneut versuchen." },
        { status: 500 },
      );
    }

    // Already confirmed: same UX as success (no email re-send, no enumeration)
    if (existing?.status === "confirmed") {
      return NextResponse.json({ ok: true, message: SUCCESS_HINT });
    }

    const payload = {
      ...data,
      status: "pending",
      confirm_token_hash: tokenHash,
      confirm_token_expires_at: expiresAt.toISOString(),
      confirmed_at: null,
    };

    if (existing) {
      const { error: updateError } = await supabase
        .from("registrations")
        .update(payload)
        .eq("id", existing.id);

      if (updateError) {
        console.error(updateError);
        return NextResponse.json(
          { error: "Speichern fehlgeschlagen. Bitte später erneut versuchen." },
          { status: 500 },
        );
      }
    } else {
      const { error: insertError } = await supabase
        .from("registrations")
        .insert(payload);

      if (insertError) {
        // Unique race: treat as retryable generic failure
        console.error(insertError);
        return NextResponse.json(
          { error: "Speichern fehlgeschlagen. Bitte später erneut versuchen." },
          { status: 500 },
        );
      }
    }

    const confirmUrl = `${appBaseUrl(request)}/bestaetigen?token=${token}`;
    await sendConfirmationEmail({
      to: data.email,
      name: data.name,
      confirmUrl,
    });

    return NextResponse.json({ ok: true, message: SUCCESS_HINT });
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      if (err.message.includes("Supabase")) {
        return NextResponse.json(
          { error: "Anmeldung fehlgeschlagen. Bitte später erneut versuchen." },
          { status: 500 },
        );
      }
      if (err.message.includes("E-Mail-Versand")) {
        return NextResponse.json(
          {
            error:
              "E-Mail konnte nicht gesendet werden. Bitte später erneut versuchen.",
          },
          { status: 502 },
        );
      }
    }
    return NextResponse.json(
      { error: "Unerwarteter Fehler. Bitte später erneut versuchen." },
      { status: 500 },
    );
  }
}
