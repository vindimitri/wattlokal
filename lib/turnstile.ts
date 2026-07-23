type TurnstileVerifyResult =
  | { ok: true }
  | { ok: false; error: string };

type SiteverifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

/**
 * Verifies a Cloudflare Turnstile token.
 * If TURNSTILE_SECRET_KEY is not set, verification is skipped (local/dev).
 */
export async function verifyTurnstileToken(
  token: unknown,
  ip?: string,
): Promise<TurnstileVerifyResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();

  if (!secret) {
    console.warn(
      "[wattlokal] TURNSTILE_SECRET_KEY fehlt – Captcha-Prüfung übersprungen.",
    );
    return { ok: true };
  }

  if (typeof token !== "string" || token.length < 10) {
    return {
      ok: false,
      error: "Bitte Captcha abschließen und erneut absenden.",
    };
  }

  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (ip && ip !== "unknown") {
    body.set("remoteip", ip);
  }

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    },
  );

  if (!res.ok) {
    console.error("[wattlokal] Turnstile siteverify HTTP", res.status);
    return {
      ok: false,
      error: "Captcha-Prüfung fehlgeschlagen. Bitte erneut versuchen.",
    };
  }

  const data = (await res.json()) as SiteverifyResponse;
  if (!data.success) {
    console.error("[wattlokal] Turnstile errors:", data["error-codes"]);
    return {
      ok: false,
      error: "Captcha ungültig oder abgelaufen. Bitte erneut versuchen.",
    };
  }

  return { ok: true };
}
