/** True on Vercel production or NODE_ENV=production. */
export function isProductionRuntime(): boolean {
  return (
    process.env.NODE_ENV === "production" ||
    process.env.VERCEL_ENV === "production"
  );
}

export type ProductionConfigResult =
  | { ok: true }
  | { ok: false; error: string };

/**
 * In production, required secrets must be present (fail-closed).
 * Local/dev may omit Turnstile/Resend for easier testing.
 */
export function assertProductionRegisterConfig(): ProductionConfigResult {
  if (!isProductionRuntime()) {
    return { ok: true };
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()) {
    return { ok: false, error: "Server-Konfiguration unvollständig (Supabase URL)." };
  }
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()) {
    return { ok: false, error: "Server-Konfiguration unvollständig (Supabase Key)." };
  }
  if (!process.env.TURNSTILE_SECRET_KEY?.trim()) {
    return { ok: false, error: "Server-Konfiguration unvollständig (Captcha)." };
  }
  if (!process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim()) {
    return { ok: false, error: "Server-Konfiguration unvollständig (Captcha Site Key)." };
  }
  if (!process.env.RESEND_API_KEY?.trim()) {
    return { ok: false, error: "Server-Konfiguration unvollständig (E-Mail)." };
  }
  if (!process.env.NEXT_PUBLIC_APP_URL?.trim()) {
    return { ok: false, error: "Server-Konfiguration unvollständig (App URL)." };
  }

  return { ok: true };
}
