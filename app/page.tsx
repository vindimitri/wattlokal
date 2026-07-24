import Link from "next/link";
import { EnergyCarousel } from "./EnergyCarousel";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 85% 15%, rgba(255,234,0,0.22), transparent 55%), radial-gradient(ellipse 55% 45% at 10% 80%, rgba(11,95,255,0.28), transparent 50%), linear-gradient(155deg, #0B132B 0%, #121a33 45%, #1E293B 100%)",
          }}
        />
        <div className="site-shell min-h-[78vh] flex flex-col justify-end pb-16 pt-24 text-[color:var(--bg)]">
          <p className="rise font-[family-name:var(--font-display)] text-5xl sm:text-7xl font-semibold tracking-tight max-w-3xl">
            Wattlokal
          </p>
          <h1 className="rise rise-delay mt-4 text-2xl sm:text-3xl font-medium max-w-2xl leading-snug text-[color:var(--bg)]">
            Wir teilen unseren Strom in unserer Gemeinde.
          </h1>
          <p className="rise rise-delay-2 mt-4 max-w-xl text-base sm:text-lg text-slate-300">
            Erzeuger und Verbraucher finden sich vor Ort. Trag dich ein – wir
            prüfen gemeinsam, ob ein lokaler Stromkreis machbar ist.
          </p>
          <div className="rise rise-delay-2 mt-8">
            <Link href="/anmelden" className="btn">
              Formular ausfüllen
            </Link>
          </div>
        </div>
      </section>

      <section className="site-shell py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Das Motiv
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-brand-deep leading-tight">
            Strom bleibt in der Nachbarschaft
          </h2>
          <p className="mt-4 text-lg text-ink-muted leading-relaxed">
            Wer eine PV-Anlage hat, speist oft mehr ein, als er selbst braucht.
            Wer keinen Strom erzeugt, kauft ihn weit weg am Markt. Wattlokal
            will beides zusammenbringen: überschüssigen Sonnenstrom lokal
            nutzen – fair, nachvollziehbar und gemeinschaftlich.
          </p>
          <p className="mt-4 text-ink-muted leading-relaxed">
            Noch geht es nicht um Verträge. Zuerst sammeln wir Interesse und
            Daten für eine Machbarkeitsstudie. Mit genug Nachbarn prüfen wir,
            ob ein echter lokaler Stromkreis tragfähig ist.
          </p>
        </div>

        <div className="mt-10 max-w-4xl">
          <EnergyCarousel />
          <p className="mt-3 text-sm text-ink-muted">
            Mit den Pfeilen links und rechts durch die Motive blättern.
          </p>
        </div>
      </section>

      <section className="border-t border-line bg-brand-deep text-[color:var(--bg)]">
        <div className="site-shell py-14 sm:py-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold">
              Mitmachen
            </h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Ein kurzes Formular reicht. Danach bestätigst du deine E-Mail –
              erst dann zählt deine Anmeldung.
            </p>
          </div>
          <Link href="/anmelden" className="btn shrink-0">
            Jetzt Interesse bekunden
          </Link>
        </div>
      </section>
    </>
  );
}
