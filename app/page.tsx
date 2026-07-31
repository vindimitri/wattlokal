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
            Eine <strong className="font-semibold text-ink">Gemeinschaft</strong>,
            die <strong className="font-semibold text-ink">Watt</strong> teilt –
            für <strong className="font-semibold text-ink">Erzeuger</strong> und{" "}
            <strong className="font-semibold text-ink">Verbraucher</strong>.
          </p>
          <div className="rise rise-delay-2 mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/anmelden" className="btn">
              Interesse bekunden
            </Link>
            <a href="#was-ist-wattlokal" className="btn btn-secondary">
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      {/* 1 */}
      <section
        id="was-ist-wattlokal"
        className="site-shell py-16 sm:py-20 scroll-mt-24"
      >
        <p className="section-kicker">Über uns</p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink">
          Was ist Wattlokal?
        </h2>
        <div className="mt-8 content-box max-w-3xl">
          <p className="text-lg text-ink-muted leading-relaxed">
            <strong className="font-semibold text-ink">Wattlokal</strong> ist eine{" "}
            <strong className="font-semibold text-ink">Gemeinschaft</strong>, die{" "}
            <strong className="font-semibold text-ink">Watt</strong> teilt. Seit dem{" "}
            <strong className="font-semibold text-ink">01.06.2026</strong> dürfen{" "}
            <strong className="font-semibold text-ink">Haushalte</strong> und{" "}
            <strong className="font-semibold text-ink">Privatpersonen</strong> ihren{" "}
            <strong className="font-semibold text-ink">Strom</strong> untereinander{" "}
            <strong className="font-semibold text-ink">aufteilen</strong>,{" "}
            <strong className="font-semibold text-ink">kaufen</strong> und{" "}
            <strong className="font-semibold text-ink">verkaufen</strong>. Und genau
            das haben wir vor.
          </p>
        </div>
      </section>

      {/* 2 */}
      <section className="border-y border-line bg-[color:var(--bg-deep)]">
        <div className="site-shell py-16 sm:py-20">
          <p className="section-kicker">Das Problem</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink max-w-2xl">
            Warum zahlen die einen zu viel – und die anderen bekommen zu wenig?
          </h2>
          <p className="mt-4 max-w-2xl text-ink-muted leading-relaxed">
            Aktuell liegt der Durchschnittspreis für{" "}
            <strong className="font-semibold text-ink">Strom</strong> weit auseinander
            vom Preis, den Haushalte mit Solaranlage für ihren Überschuss
            bekommen.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="stat-pillar">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                Verbraucher zahlen
              </p>
              <p className="stat-value mt-3">
                35&nbsp;ct
              </p>
              <p className="mt-2 text-ink-muted">
                pro <strong className="font-semibold text-ink">Kilowattstunde</strong>{" "}
                – Durchschnittspreis für Strom
              </p>
            </div>
            <div className="stat-pillar">
              <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
                Erzeuger bekommen
              </p>
              <p className="stat-value mt-3">
                7&nbsp;ct
              </p>
              <p className="mt-2 text-ink-muted">
                pro <strong className="font-semibold text-ink">Kilowattstunde</strong>{" "}
                – typischer Verkaufspreis mit{" "}
                <strong className="font-semibold text-ink">Solaranlage</strong>
              </p>
            </div>
          </div>

          <div className="mt-6 content-box max-w-3xl">
            <p className="text-ink-muted leading-relaxed text-lg">
              Warum also solltest du als{" "}
              <strong className="font-semibold text-ink">Verbraucher</strong> mehr
              Geld zahlen und du als{" "}
              <strong className="font-semibold text-ink">Erzeuger</strong> weniger
              Geld bekommen? Das haben wir uns auch gefragt.
            </p>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="site-shell py-16 sm:py-20">
        <p className="section-kicker">Unsere Antwort</p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink">
          Unser Ziel
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="content-box lg:col-span-2">
            <p className="text-lg text-ink-muted leading-relaxed">
              Deshalb wollen wir die Menschen miteinander verbinden, die ihr{" "}
              <strong className="font-semibold text-ink">Watt</strong> teilen
              wollen. Unser Ziel ist es, eine{" "}
              <strong className="font-semibold text-ink">App</strong> zu bauen, die
              unserer Gemeinschaft als{" "}
              <strong className="font-semibold text-ink">Marktplatz</strong> dient –
              das <strong className="font-semibold text-ink">Wattlokal</strong>.
            </p>
          </div>
          <div className="stat-pillar">
            <p className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
              Was wir bauen
            </p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-ink leading-snug">
              App als Marktplatz
            </p>
            <p className="mt-2 text-ink-muted leading-relaxed">
              Für die lokale <strong className="font-semibold text-ink">Gemeinschaft</strong>,
              die Watt teilt.
            </p>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="border-y border-line bg-[color:var(--surface)]">
        <div className="site-shell py-16 sm:py-20">
          <p className="section-kicker">Herausforderung</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink max-w-2xl">
            Was uns noch fehlt
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="content-box">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                Das Stromnetz
              </h3>
              <p className="mt-3 text-ink-muted leading-relaxed">
                Das einzige Problem ist die Nutzung des{" "}
                <strong className="font-semibold text-ink">Stromnetzes</strong>, denn
                dafür haben wir noch keine{" "}
                <strong className="font-semibold text-ink">Freigabe</strong>.
              </p>
            </div>
            <div className="content-box">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-ink">
                Zusammen schaffen wir das
              </h3>
              <p className="mt-3 text-ink-muted leading-relaxed">
                Wenn wir wissen, wie viel{" "}
                <strong className="font-semibold text-ink">Strom</strong> wir machen
                und wie viel Strom wir brauchen, ist es nur eine Frage der Zeit,
                bis uns der{" "}
                <strong className="font-semibold text-ink">Versorger</strong>{" "}
                <strong className="font-semibold text-ink">grünes Licht</strong> gibt.
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-ink-muted leading-relaxed">
            Den gesetzlichen Rahmen seit dem{" "}
            <strong className="font-semibold text-ink">01.06.2026</strong> erklären
            wir unter{" "}
            <Link
              href="/42c-enwg"
              className="text-ok underline underline-offset-2 font-semibold"
            >
              §&nbsp;42c&nbsp;EnWG
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 5 */}
      <section id="rollen" className="site-shell py-16 sm:py-20 scroll-mt-24">
        <p className="section-kicker">Für wen?</p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink">
          Erzeuger und Verbraucher
        </h2>
        <p className="mt-4 max-w-2xl text-ink-muted leading-relaxed">
          Wattlokal verbindet beide Seiten – damit lokaler Strom fairer geteilt
          werden kann.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="stat-pillar">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
              Als Erzeuger
            </h3>
            <p className="mt-3 text-ink-muted leading-relaxed">
              Du hast eine{" "}
              <strong className="font-semibold text-ink">Solaranlage</strong> und
              verkaufst heute oft nur für rund{" "}
              <strong className="font-semibold text-ink">7&nbsp;ct</strong> – obwohl
              Nachbarn deutlich mehr für Strom zahlen. Wattlokal will dich mit
              lokalen{" "}
              <strong className="font-semibold text-ink">Verbrauchern</strong>{" "}
              verbinden.
            </p>
          </div>
          <div className="stat-pillar">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-ink">
              Als Verbraucher
            </h3>
            <p className="mt-3 text-ink-muted leading-relaxed">
              Du zahlst im Schnitt etwa{" "}
              <strong className="font-semibold text-ink">35&nbsp;ct</strong>, während
              lokal erzeugter Strom für deutlich weniger abgegeben wird.
              Wattlokal will dich mit{" "}
              <strong className="font-semibold text-ink">Erzeugern</strong> in der
              Nachbarschaft zusammenbringen.
            </p>
          </div>
        </div>
      </section>

      {/* 6 */}
      <section className="border-t border-line bg-[color:var(--bg-deep)]">
        <div className="site-shell py-16 sm:py-20">
          <p className="section-kicker">Mitmachen</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink max-w-2xl">
            Dafür brauchen wir deine Hilfe
          </h2>
          <div className="mt-8 content-box max-w-3xl">
            <p className="text-lg text-ink-muted leading-relaxed">
              Trag dich ein – als{" "}
              <strong className="font-semibold text-ink">Erzeuger</strong>,{" "}
              <strong className="font-semibold text-ink">Verbraucher</strong> oder
              beides. Je besser wir wissen, wie viel{" "}
              <strong className="font-semibold text-ink">Strom</strong> wir machen
              und brauchen, desto eher bekommen wir die{" "}
              <strong className="font-semibold text-ink">Freigabe</strong> fürs{" "}
              <strong className="font-semibold text-ink">Stromnetz</strong>.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              Deine Anmeldung zählt erst nach der E-Mail-Bestätigung.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/anmelden" className="btn">
                Jetzt mitmachen
              </Link>
              <Link href="/42c-enwg" className="btn btn-secondary">
                § 42c EnWG lesen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
