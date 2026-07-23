import Link from "next/link";

export default function DankePage() {
  return (
    <div className="site-shell py-16 max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
        Fast geschafft
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-semibold text-brand-deep">
        Bitte E-Mail bestätigen
      </h1>
      <p className="mt-4 text-lg text-ink-muted leading-relaxed">
        Wir haben dir eine Mail mit einem Bestätigungslink geschickt. Klicke
        den Link in deinem Postfach — erst danach speichern wir deine Anmeldung
        als gültig.
      </p>
      <p className="mt-3 text-ink-muted">
        Keine Mail? Spam-Ordner prüfen. Der Link ist 48 Stunden gültig.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="btn-secondary btn">
          Zur Startseite
        </Link>
      </div>
    </div>
  );
}
