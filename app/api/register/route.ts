import { NextResponse } from "next/server";
import { sendConfirmationEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { getSupabaseAdmin } from "@/lib/supabase";
import { createConfirmToken } from "@/lib/tokens";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { validateRegistration } from "@/lib/validation";

export const runtime = "nodejs";

function clientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function appBaseUrl(request: Request): string {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, "");
  }
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const proto = request.headers.get("x-forwarded-proto") ?? "http";
  return host ? `${proto}://${host}` : "http://localhost:3000";
}

export async function POST(request: Request) {
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

    if (existing?.status === "confirmed") {
      return NextResponse.json(
        {
          error:
            "Diese E-Mail ist bereits bestätigt. Eine erneute Anmeldung ist nicht nötig.",
        },
        { status: 409 },
      );
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

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    if (err instanceof Error) {
      if (err.message.includes("Supabase")) {
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
      if (err.message.includes("E-Mail-Versand")) {
        const detail = err.message.replace(/^E-Mail-Versand fehlgeschlagen:\s*/i, "");
        return NextResponse.json(
          {
            error: `E-Mail konnte nicht gesendet werden: ${detail}`,
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
