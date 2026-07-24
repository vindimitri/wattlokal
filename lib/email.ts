import { isProductionRuntime } from "@/lib/env";

type SendArgs = {
  to: string;
  confirmUrl: string;
  name: string;
};

export async function sendConfirmationEmail({
  to,
  confirmUrl,
  name,
}: SendArgs): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = (process.env.EMAIL_FROM ?? "Wattlokal <onboarding@resend.dev>")
    .trim()
    .replace(/^["']|["']$/g, "");

  const subject = "Bitte E-Mail bestätigen – Wattlokal";
  const text = [
    `Hallo ${name},`,
    "",
    "danke für deine Anmeldung bei Wattlokal.",
    "Bitte bestätige deine E-Mail-Adresse, damit wir deine Daten für die Machbarkeitsstudie speichern dürfen:",
    "",
    confirmUrl,
    "",
    "Der Link ist 48 Stunden gültig.",
    "Falls du dich nicht angemeldet hast, ignoriere diese Mail.",
    "",
    "Viele Grüße",
    "Wattlokal",
  ].join("\n");

  if (!apiKey) {
    if (isProductionRuntime()) {
      throw new Error(
        "E-Mail-Versand fehlgeschlagen: RESEND_API_KEY fehlt in Production.",
      );
    }
    console.info("[wattlokal] Kein RESEND_API_KEY – Bestätigungslink (Dev):");
    console.info(confirmUrl);
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("[wattlokal] Resend error:", detail, "from:", from);
    let hint = "Versand abgelehnt";
    try {
      const parsed = JSON.parse(detail) as { message?: string };
      if (parsed.message) hint = parsed.message;
    } catch {
      // keep generic hint for client; full detail only in logs
    }
    throw new Error(`E-Mail-Versand fehlgeschlagen: ${hint}`);
  }
}
