import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2400&q=80";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
        <Image
          src={HERO_IMAGE}
          alt="Solarpaneele auf Wohnhausdächern in einer Wohnsiedlung"
          fill
          priority
          sizes="100vw"
          className="object-cover hero-image"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/88 via-[color:var(--ink)]/45 to-[color:var(--ink)]/25"
        />

        <div className="site-shell relative z-[1] pb-14 pt-16 sm:pb-20 sm:pt-20 text-[color:var(--bg)]">
          <p className="rise font-[family-name:var(--font-display)] text-[clamp(3.25rem,12vw,7.5rem)] leading-[0.92] font-semibold tracking-tight">
            Wattlokal
          </p>
          <h1 className="rise rise-delay mt-5 sm:mt-6 max-w-xl text-xl sm:text-2xl font-medium leading-snug">
            Wir teilen unseren Strom in unserer Gemeinde.
          </h1>
          <p className="rise rise-delay-2 mt-3 max-w-md text-base sm:text-lg text-[color:var(--bg)]/80 leading-relaxed">
            Erzeuger und Verbraucher finden sich vor Ort – für eine
            Machbarkeitsstudie in der Nachbarschaft.
          </p>
          <div className="rise rise-delay-2 mt-8">
            <Link href="/anmelden" className="btn">
              Interesse bekunden
            </Link>
          </div>
        </div>
      </section>

      <section className="site-shell py-16 sm:py-24">
        <div className="max-w-2xl study-block">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink leading-tight">
            Zuerst die Studie – noch keine Verträge
          </h2>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed">
            Wer eine PV-Anlage hat, speist oft mehr ein, als er selbst braucht.
            Wer keinen Strom erzeugt, kauft ihn weit weg am Markt. Wattlokal will
            beides zusammenbringen: überschüssigen Sonnenstrom lokal nutzen.
          </p>
          <p className="mt-4 text-ink-muted leading-relaxed">
            Deshalb sammeln wir zuerst Interesse und Daten. Mit genug Nachbarn
            prüfen wir, ob ein lokaler Stromkreis tragfähig ist. Deine Anmeldung
            zählt erst nach der E-Mail-Bestätigung.
          </p>
          <p className="mt-8">
            <Link href="/anmelden" className="btn btn-secondary">
              Zum Formular
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
