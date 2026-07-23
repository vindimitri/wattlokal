import Link from "next/link";
import { getSupabaseAdmin } from "@/lib/supabase";
import { hashToken } from "@/lib/tokens";

type SearchParams = Promise<{ token?: string }>;

async function confirmToken(token: string | undefined): Promise<
  | { ok: true }
  | { ok: false; reason: "missing" | "invalid" | "expired" | "error" }
> {
  if (!token || token.length < 20) {
    return { ok: false, reason: "missing" };
  }

  try {
    const supabase = getSupabaseAdmin();
    const tokenHash = hashToken(token);

    const { data, error } = await supabase
      .from("registrations")
      .select("id, status, confirm_token_expires_at")
      .eq("confirm_token_hash", tokenHash)
      .maybeSingle();

    if (error || !data) {
      return { ok: false, reason: "invalid" };
    }

    if (data.status === "confirmed") {
      return { ok: true };
    }

    const expires = data.confirm_token_expires_at
      ? new Date(data.confirm_token_expires_at)
      : null;
    if (!expires || expires.getTime() < Date.now()) {
      return { ok: false, reason: "expired" };
    }

    const { error: updateError } = await supabase
      .from("registrations")
      .update({
        status: "confirmed",
        confirmed_at: new Date().toISOString(),
        confirm_token_hash: null,
        confirm_token_expires_at: null,
      })
      .eq("id", data.id);

    if (updateError) {
      console.error(updateError);
      return { ok: false, reason: "error" };
    }

    return { ok: true };
  } catch (err) {
    console.error(err);
    return { ok: false, reason: "error" };
  }
}

export default async function BestaetigenPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { token } = await searchParams;
  const result = await confirmToken(token);

  if (result.ok) {
    return (
      <div className="site-shell py-16 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand">
          Bestätigt
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-semibold text-brand-deep">
          Danke – du bist dabei
        </h1>
        <p className="mt-4 text-lg text-ink-muted leading-relaxed">
          Deine E-Mail ist bestätigt. Deine Angaben zählen jetzt für die
          Machbarkeitsstudie. Wir melden uns, sobald genug Nachbarn
          mitmachen.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn">
            Zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  const messages = {
    missing: "Es fehlt ein gültiger Bestätigungslink.",
    invalid: "Dieser Bestätigungslink ist ungültig oder wurde bereits verwendet.",
    expired:
      "Dieser Bestätigungslink ist abgelaufen. Bitte melde dich erneut an.",
    error: "Bestätigung fehlgeschlagen. Bitte später erneut versuchen.",
  } as const;

  return (
    <div className="site-shell py-16 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-danger">
        Nicht bestätigt
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-semibold text-brand-deep">
        Link ungültig
      </h1>
      <p className="mt-4 text-lg text-ink-muted leading-relaxed">
        {messages[result.reason]}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/anmelden" className="btn">
          Erneut anmelden
        </Link>
        <Link href="/" className="btn btn-secondary">
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
