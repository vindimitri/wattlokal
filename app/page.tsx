import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden">
        <Image
          src="/hero.png"
          alt="Wohnsiedlung mit Solaranlagen und lokalem Energieaustausch"
          fill
          priority
          sizes="100vw"
          className="object-cover hero-image"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(30, 167, 231, 0.05)" }}
        />

        <div className="site-shell relative z-[1] py-20 text-center text-ink">
          <h1 className="rise font-[family-name:var(--font-display)] text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.05] font-semibold tracking-tight">
            Watt.Wir.Teilen
          </h1>
          <p className="rise rise-delay mt-4 text-[clamp(1.15rem,3.5vw,1.85rem)] font-medium tracking-wide text-ink/85">
            Wir teilen Watt
          </p>
          <p className="rise rise-delay-2 mx-auto mt-6 max-w-md text-base sm:text-lg text-ink-muted leading-relaxed">
            Erneuerbare Stromüberschüsse sinnvoll in der Nachbarschaft nutzen –
            für Erzeuger und Verbraucher.
          </p>
          <div className="rise rise-delay-2 mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/anmelden" className="btn">
              Interesse bekunden
            </Link>
            <a href="#konzept" className="btn btn-secondary">
              Konzept ansehen
            </a>
          </div>
        </div>
      </section>

      <section id="konzept" className="site-shell py-16 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Das Konzept
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink leading-tight max-w-2xl">
          Was ist eine Stromcommunity?
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink-muted leading-relaxed">
          In einer Stromcommunity teilen Menschen erneuerbare Energie direkt
          untereinander – transparent, flexibel und wirtschaftlich. Dadurch wird
          der Strom dort genutzt, wo er gerade gebraucht wird: in der Gemeinde,
          zwischen Nachbarn, Familie und Haushalten vor Ort.
        </p>
        <p className="mt-4 max-w-2xl text-ink-muted leading-relaxed">
          Wattlokal will genau das lokal prüfen: Mit genug Interessierten aus
          Erzeugung und Verbrauch starten wir eine Machbarkeitsstudie – noch
          ohne Verträge und ohne Abrechnung über diese Website.
        </p>
      </section>

      <section id="rollen" className="border-y border-line bg-[color:var(--surface)]">
        <div className="site-shell py-16 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Für wen?
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink">
            Erzeuger und Verbraucher
          </h2>
          <p className="mt-4 max-w-2xl text-ink-muted leading-relaxed">
            Haushalte können unterschiedliche Rollen einnehmen – reine
            Strombezieher, Stromerzeuger oder eine Kombination aus beidem.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
                Für Erzeuger
              </h3>
              <p className="mt-3 text-ink-muted leading-relaxed">
                Du hast eine PV-Anlage und speist oft mehr ein, als du selbst
                brauchst. Statt den Überschuss nur anonym ins Netz zu geben,
                soll er in der Community an Nachbarn oder andere Haushalte vor
                Ort gehen – zu fairen, nachvollziehbaren Konditionen.
              </p>
              <ul className="mt-4 space-y-2 text-ink-muted leading-relaxed list-disc pl-5">
                <li>Überschüssigen Sonnenstrom lokal vermarkten</li>
                <li>Höhere Erlöse als bei reiner Netzeinspeisung möglich</li>
                <li>Auch möglich, nur als Verbraucher teilzunehmen</li>
              </ul>
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
                Für Verbraucher
              </h3>
              <p className="mt-3 text-ink-muted leading-relaxed">
                Du erzeugst keinen eigenen Strom – oder nicht genug. Über die
                Community kannst du günstigen Ökostrom von Erzeugern in der
                Nachbarschaft beziehen, solange er verfügbar ist.
              </p>
              <ul className="mt-4 space-y-2 text-ink-muted leading-relaxed list-disc pl-5">
                <li>Zugang zu lokalem erneuerbarem Strom ohne eigene Anlage</li>
                <li>Transparente Herkunft statt anonymer Börsenstrom</li>
                <li>
                  Reicht Community-Strom nicht, bleibt die Versorgung über
                  ergänzenden Ökostrom gesichert
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-16 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Vielseitige Benefits
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink max-w-2xl">
          Warum eine Stromcommunity überzeugt
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-semibold text-ink text-lg">Finanzieller Vorteil</h3>
            <p className="mt-2 text-ink-muted leading-relaxed">
              Erneuerbare Energie wirtschaftlich optimal nutzen – höhere Erlöse
              für Erzeuger, günstigerer Bezug für Verbraucher.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink text-lg">Flexibilität</h3>
            <p className="mt-2 text-ink-muted leading-relaxed">
              Mehr Möglichkeiten für Strombezug und Vermarktung – statt starrer
              Einheits-Tarife.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-ink text-lg">Transparenz</h3>
            <p className="mt-2 text-ink-muted leading-relaxed">
              Nachvollziehbare Stromflüsse: woher der Strom stammt, was du
              verbrauchst oder verkaufst.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-[color:var(--bg-deep)]">
        <div className="site-shell py-16 sm:py-20 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
            So funktioniert&apos;s
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink">
            Energy Sharing in der Praxis
          </h2>
          <ol className="mt-8 space-y-6">
            <li className="flex gap-4">
              <span className="shrink-0 font-[family-name:var(--font-display)] text-2xl font-semibold text-[#0b4f9c]">
                1
              </span>
              <div>
                <h3 className="font-semibold text-ink">Erzeugung vor Ort</h3>
                <p className="mt-1 text-ink-muted leading-relaxed">
                  PV-Anlagen und andere erneuerbare Erzeuger speisen Überschüsse
                  in die Community ein.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 font-[family-name:var(--font-display)] text-2xl font-semibold text-[#0b4f9c]">
                2
              </span>
              <div>
                <h3 className="font-semibold text-ink">Zuordnung über das Netz</h3>
                <p className="mt-1 text-ink-muted leading-relaxed">
                  Der Strom fließt physisch wie gewohnt über das öffentliche
                  Netz – bilanziell wird er den Community-Mitgliedern
                  zugeordnet.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="shrink-0 font-[family-name:var(--font-display)] text-2xl font-semibold text-[#0b4f9c]">
                3
              </span>
              <div>
                <h3 className="font-semibold text-ink">Verbrauch in der Nachbarschaft</h3>
                <p className="mt-1 text-ink-muted leading-relaxed">
                  Verbraucher beziehen bevorzugt lokalen Ökostrom. Fehlt Menge,
                  wird ergänzend versorgt.
                </p>
              </div>
            </li>
          </ol>
          <p className="mt-8 text-ink-muted leading-relaxed">
            Den gesetzlichen Rahmen dafür bildet unter anderem{" "}
            <Link
              href="/42c-enwg"
              className="text-ok underline underline-offset-2"
            >
              § 42c EnWG
            </Link>
            . Dort erklären wir, was die Regelung ermöglicht und wo ihre Grenzen
            liegen.
          </p>
        </div>
      </section>

      <section className="site-shell py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Nächster Schritt
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink leading-tight">
            Zuerst die Studie – noch keine Verträge
          </h2>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed">
            Noch geht es nicht um Lieferverträge. Zuerst sammeln wir Interesse
            und Daten von Erzeugern und Verbrauchern. Mit genug Nachbarn prüfen
            wir, ob ein lokaler Stromkreis tragfähig ist.
          </p>
          <p className="mt-4 text-ink-muted leading-relaxed">
            Deine Anmeldung zählt erst nach der E-Mail-Bestätigung.
          </p>
          <p className="mt-8 flex flex-wrap gap-3">
            <Link href="/anmelden" className="btn">
              Zum Formular
            </Link>
            <Link href="/42c-enwg" className="btn btn-secondary">
              § 42c EnWG lesen
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
