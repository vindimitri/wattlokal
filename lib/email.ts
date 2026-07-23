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
  // Strip optional quotes from .env values like "Name <mail@domain>"
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
    throw new Error(`E-Mail-Versand fehlgeschlagen: ${detail}`);
  }
}
