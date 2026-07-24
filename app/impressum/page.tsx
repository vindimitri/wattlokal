export default function ImpressumPage() {
  return (
    <div className="site-shell py-12 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
        Rechtliches
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-semibold text-brand-deep">
        Impressum
      </h1>
      <p className="mt-4 text-ink-muted text-lg leading-relaxed">
        Angaben gemäß § 5 TMG / § 18 MStV. Platzhalter — vor dem öffentlichen
        Launch durch die finalen Daten ersetzen.
      </p>

      <div className="mt-10 space-y-8 text-ink leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            Diensteanbieter
          </h2>
          <div className="mt-3 rounded-2xl panel-card p-5 text-[#F8FAFC]">
            <p className="font-semibold">[Name der Person / Organisation]</p>
            <p className="mt-2 text-card-muted">
              [Straße Hausnummer]
              <br />
              [PLZ Ort]
              <br />
              Deutschland
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">Kontakt</h2>
          <ul className="mt-3 text-ink-muted space-y-1">
            <li>
              E-Mail:{" "}
              <a
                href="mailto:[kontakt@wattlokal.de]"
                className="text-brand-deep underline"
              >
                [kontakt@wattlokal.de]
              </a>
            </li>
            <li>Telefon: [optional – Telefonnummer]</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            Vertretungsberechtigt
          </h2>
          <p className="mt-3 text-ink-muted">
            [Falls Verein/Firma: Name der vertretungsberechtigten Person(en)]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            Registereintrag
          </h2>
          <p className="mt-3 text-ink-muted">
            [Falls vorhanden: Registergericht, Registernummer — sonst Abschnitt
            entfernen]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            Umsatzsteuer-ID
          </h2>
          <p className="mt-3 text-ink-muted">
            [Falls vorhanden: DE… — sonst Abschnitt entfernen]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            Verantwortlich für den Inhalt
          </h2>
          <p className="mt-3 text-ink-muted">
            [Name], Anschrift wie oben.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            Haftung für Inhalte und Links
          </h2>
          <p className="mt-3 text-ink-muted">
            Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich. Für Inhalte verlinkter
            externer Websites übernehmen wir keine Gewähr. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">Urheberrecht</h2>
          <p className="mt-3 text-ink-muted">
            Die auf dieser Website veröffentlichten Inhalte und Werke unterliegen
            dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und
            Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen der
            schriftlichen Zustimmung des jeweiligen Rechteinhabers.
          </p>
        </section>

        <section className="rounded-2xl border border-line bg-bg-deep/80 p-5">
          <h2 className="text-lg font-semibold text-brand-deep">Hinweis</h2>
          <p className="mt-2 text-sm text-ink-muted">
            Alle Angaben in eckigen Klammern <code>[…]</code> sind Platzhalter.
            Sobald die finalen Daten vorliegen, werden sie hier eingetragen.
          </p>
        </section>
      </div>
    </div>
  );
}
