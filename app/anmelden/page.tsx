import { RegistrationForm } from "./RegistrationForm";

export const dynamic = "force-dynamic";

export default function AnmeldenPage() {
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? "";

  return (
    <div className="site-shell py-10 sm:py-14">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[color:var(--ink)]">
          Mitmachen
        </p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-semibold text-brand-deep">
          Interesse bekunden
        </h1>
        <p className="mt-3 text-ink-muted text-lg leading-relaxed">
          Füll das Formular aus. Danach schicken wir dir eine Bestätigungsmail.
          Erst wenn du den Link anklickst, wird dein Eintrag in unserer Studie
          gezählt — so verhindern wir Fake-Anmeldungen.
        </p>
      </div>

      <div className="mt-8 max-w-2xl panel-card p-5 sm:p-8">
        <RegistrationForm turnstileSiteKey={turnstileSiteKey} />
      </div>
    </div>
  );
}
