import Link from "next/link";
import { HeroVideo } from "@/components/HeroVideo";
import { PriceGapGraphic } from "@/components/PriceGapGraphic";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-[#87b8e8]" aria-label="Hero">
        <HeroVideo />
      </section>

      <div className="enwg-page">
        {/* 1 */}
        <section
          id="was-ist-wattlokal"
          className="site-shell py-10 sm:py-14 scroll-mt-24"
        >
          <p className="enwg-kicker">Über uns</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)]">
            Was ist Wattlokal?
          </h2>
          <article className="mt-8 enwg-card max-w-3xl">
            <span className="enwg-icon enwg-icon-yellow" aria-hidden>
              🏠
            </span>
            <p className="text-lg text-[color:var(--enwg-muted)] leading-relaxed">
              <strong className="font-semibold text-[color:var(--enwg-navy)]">
                Wattlokal
              </strong>{" "}
              ist eine{" "}
              <strong className="font-semibold text-[color:var(--enwg-navy)]">
                Gemeinschaft
              </strong>
              , die{" "}
              <strong className="font-semibold text-[color:var(--enwg-navy)]">
                Watt
              </strong>{" "}
              teilt. Seit dem{" "}
              <strong className="font-semibold text-[color:var(--enwg-navy)]">
                01.06.2026
              </strong>{" "}
              dürfen{" "}
              <strong className="font-semibold text-[color:var(--enwg-navy)]">
                Haushalte
              </strong>{" "}
              und{" "}
              <strong className="font-semibold text-[color:var(--enwg-navy)]">
                Privatpersonen
              </strong>{" "}
              ihren{" "}
              <strong className="font-semibold text-[color:var(--enwg-navy)]">
                Strom
              </strong>{" "}
              untereinander{" "}
              <strong className="font-semibold text-[color:var(--enwg-navy)]">
                aufteilen
              </strong>
              ,{" "}
              <strong className="font-semibold text-[color:var(--enwg-navy)]">
                kaufen
              </strong>{" "}
              und{" "}
              <strong className="font-semibold text-[color:var(--enwg-navy)]">
                verkaufen
              </strong>
              . Und genau das haben wir vor.
            </p>
          </article>
        </section>

        {/* 2 */}
        <section id="das-problem" className="py-10 sm:py-14 bg-[#eef2f5] scroll-mt-24">
          <div className="site-shell">
            <p className="enwg-kicker">Das Problem</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)] max-w-3xl">
              Warum zahlen die einen zu viel – und die anderen bekommen zu wenig?
            </h2>
            <p className="mt-4 max-w-3xl text-[color:var(--enwg-muted)] leading-relaxed">
              Aktuell liegt der Durchschnittspreis für{" "}
              <strong className="font-semibold text-[color:var(--enwg-navy)]">
                Strom
              </strong>{" "}
              weit auseinander vom Preis, den Haushalte mit Solaranlage für ihren
              Überschuss bekommen.
            </p>

            <PriceGapGraphic />

            <article className="mt-4 enwg-card max-w-3xl">
              <span className="enwg-icon enwg-icon-blue" aria-hidden>
                ❓
              </span>
              <p className="text-lg text-[color:var(--enwg-muted)] leading-relaxed">
                Warum also solltest du als{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Verbraucher
                </strong>{" "}
                mehr Geld zahlen und du als{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Erzeuger
                </strong>{" "}
                weniger Geld bekommen? Das haben wir uns auch gefragt.
              </p>
            </article>
          </div>
        </section>

        {/* 3 */}
        <section className="site-shell py-10 sm:py-14">
          <p className="enwg-kicker">Unsere Antwort</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)]">
            Unser Ziel
          </h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <article className="enwg-card lg:col-span-2">
              <span className="enwg-icon enwg-icon-green" aria-hidden>
                🤝
              </span>
              <p className="text-lg text-[color:var(--enwg-muted)] leading-relaxed">
                Deshalb wollen wir die Menschen miteinander verbinden, die ihr{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Watt
                </strong>{" "}
                teilen wollen. Unser Ziel ist es, eine{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  App
                </strong>{" "}
                zu bauen, die unserer Gemeinschaft als{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Marktplatz
                </strong>{" "}
                dient – das{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Wattlokal
                </strong>
                .
              </p>
            </article>
            <article className="enwg-card">
              <span className="enwg-icon enwg-icon-purple" aria-hidden>
                📱
              </span>
              <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--enwg-muted)]">
                Was wir bauen
              </p>
              <h3 className="mt-3 font-semibold text-xl text-[color:var(--enwg-navy)] leading-snug">
                App als Marktplatz
              </h3>
              <p className="mt-2 text-[color:var(--enwg-muted)] leading-relaxed">
                Für die lokale{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Gemeinschaft
                </strong>
                , die Watt teilt.
              </p>
            </article>
          </div>
        </section>

        {/* 4 */}
        <section className="py-10 sm:py-14 bg-[#eef2f5]">
          <div className="site-shell">
            <p className="enwg-kicker">Herausforderung</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)] max-w-3xl">
              Was uns noch fehlt
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <article className="enwg-card">
                <span className="enwg-icon enwg-icon-teal" aria-hidden>
                  🔌
                </span>
                <h3 className="font-semibold text-lg text-[color:var(--enwg-navy)]">
                  Das Stromnetz
                </h3>
                <p className="mt-2 text-[color:var(--enwg-muted)] leading-relaxed">
                  Das einzige Problem ist die Nutzung des{" "}
                  <strong className="font-semibold text-[color:var(--enwg-navy)]">
                    Stromnetzes
                  </strong>
                  , denn dafür haben wir noch keine{" "}
                  <strong className="font-semibold text-[color:var(--enwg-navy)]">
                    Freigabe
                  </strong>
                  .
                </p>
              </article>
              <article className="enwg-card">
                <span className="enwg-icon enwg-icon-green" aria-hidden>
                  🌱
                </span>
                <h3 className="font-semibold text-lg text-[color:var(--enwg-navy)]">
                  Zusammen schaffen wir das
                </h3>
                <p className="mt-2 text-[color:var(--enwg-muted)] leading-relaxed">
                  Wenn wir wissen, wie viel{" "}
                  <strong className="font-semibold text-[color:var(--enwg-navy)]">
                    Strom
                  </strong>{" "}
                  wir machen und wie viel Strom wir brauchen, ist es nur eine
                  Frage der Zeit, bis uns der{" "}
                  <strong className="font-semibold text-[color:var(--enwg-navy)]">
                    Versorger
                  </strong>{" "}
                  <strong className="font-semibold text-[color:var(--enwg-navy)]">
                    grünes Licht
                  </strong>{" "}
                  gibt.
                </p>
              </article>
            </div>
            <p className="mt-6 max-w-3xl text-[color:var(--enwg-muted)] leading-relaxed">
              Den gesetzlichen Rahmen seit dem{" "}
              <strong className="font-semibold text-[color:var(--enwg-navy)]">
                01.06.2026
              </strong>{" "}
              erklären wir unter{" "}
              <Link
                href="/42c-enwg"
                className="font-semibold text-[#0b4f9c] underline-offset-2 hover:underline"
              >
                §&nbsp;42c&nbsp;EnWG
              </Link>
              .
            </p>
          </div>
        </section>

        {/* 5 */}
        <section id="rollen" className="site-shell py-10 sm:py-14 scroll-mt-24">
          <p className="enwg-kicker">Für wen?</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)]">
            Erzeuger und Verbraucher
          </h2>
          <p className="mt-4 max-w-3xl text-[color:var(--enwg-muted)] leading-relaxed">
            Wattlokal verbindet beide Seiten – damit lokaler Strom fairer geteilt
            werden kann.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="enwg-card">
              <span className="enwg-icon enwg-icon-yellow" aria-hidden>
                ☀️
              </span>
              <h3 className="font-semibold text-xl text-[color:var(--enwg-navy)]">
                Als Erzeuger
              </h3>
              <p className="mt-2 text-[color:var(--enwg-muted)] leading-relaxed">
                Du hast eine{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Solaranlage
                </strong>{" "}
                und verkaufst heute oft nur für rund{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  7&nbsp;ct
                </strong>{" "}
                – obwohl Nachbarn deutlich mehr für Strom zahlen. Wattlokal will
                dich mit lokalen{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Verbrauchern
                </strong>{" "}
                verbinden.
              </p>
            </article>
            <article className="enwg-card">
              <span className="enwg-icon enwg-icon-blue" aria-hidden>
                🏠
              </span>
              <h3 className="font-semibold text-xl text-[color:var(--enwg-navy)]">
                Als Verbraucher
              </h3>
              <p className="mt-2 text-[color:var(--enwg-muted)] leading-relaxed">
                Du zahlst im Schnitt etwa{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  35&nbsp;ct
                </strong>
                , während lokal erzeugter Strom für deutlich weniger abgegeben
                wird. Wattlokal will dich mit{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Erzeugern
                </strong>{" "}
                in der Nachbarschaft zusammenbringen.
              </p>
            </article>
          </div>
        </section>

        {/* 6 */}
        <section className="py-10 sm:py-14 bg-[#eef2f5]">
          <div className="site-shell">
            <p className="enwg-kicker">Mitmachen</p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)] max-w-3xl">
              Dafür brauchen wir deine Hilfe
            </h2>
            <article className="mt-8 enwg-card max-w-3xl">
              <span className="enwg-icon enwg-icon-teal" aria-hidden>
                ✋
              </span>
              <p className="text-lg text-[color:var(--enwg-muted)] leading-relaxed">
                Trag dich ein – als{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Erzeuger
                </strong>
                ,{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Verbraucher
                </strong>{" "}
                oder beides. Je besser wir wissen, wie viel{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Strom
                </strong>{" "}
                wir machen und brauchen, desto eher bekommen wir die{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Freigabe
                </strong>{" "}
                fürs{" "}
                <strong className="font-semibold text-[color:var(--enwg-navy)]">
                  Stromnetz
                </strong>
                .
              </p>
              <p className="mt-4 text-[color:var(--enwg-muted)] leading-relaxed">
                Deine Anmeldung zählt erst nach der E-Mail-Bestätigung.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/anmelden" className="btn">
                  Jetzt mitmachen
                </Link>
                <Link href="/42c-enwg" className="btn btn-secondary bg-white">
                  § 42c EnWG lesen
                </Link>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
}
