export default function DatenschutzPage() {
  return (
    <div className="site-shell py-12 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
        Rechtliches
      </p>
      <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-semibold text-brand-deep">
        Datenschutzerklärung
      </h1>
      <p className="mt-4 text-ink-muted text-lg leading-relaxed">
        Der Schutz personenbezogener Daten hat für Wattlokal hohe Priorität.
        Nachfolgend informieren wir Sie gemäß der Datenschutz-Grundverordnung
        (DSGVO) und dem Bundesdatenschutzgesetz (BDSG) über Art, Umfang und Zweck
        der Verarbeitung personenbezogener Daten auf dieser Website.
      </p>
      <p className="mt-3 text-sm text-ink-muted">
        Stand: Juli 2026
      </p>

      <div className="mt-10 space-y-10 text-ink leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            1. Verantwortliche Stelle
          </h2>
          <p className="mt-3 text-ink-muted">
            Verantwortlicher im Sinne der DSGVO ist:
          </p>
          <div className="mt-3 rounded-2xl panel-card p-5 text-[#F8FAFC]">
            <p className="font-semibold">[Name der verantwortlichen Person / Organisation]</p>
            <p className="mt-2 text-card-muted">
              [Straße Hausnummer]
              <br />
              [PLZ Ort]
              <br />
              Deutschland
            </p>
            <p className="mt-3 text-card-muted">
              E-Mail:{" "}
              <a href="mailto:[datenschutz@wattlokal.de]" className="text-accent underline">
                [datenschutz@wattlokal.de]
              </a>
            </p>
          </div>
          <p className="mt-3 text-ink-muted text-sm">
            Bitte ersetzen Sie die Platzhalter vor dem öffentlichen Go-Live durch
            die tatsächlichen Kontaktdaten.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            2. Überblick über die Verarbeitungen
          </h2>
          <p className="mt-3 text-ink-muted">
            Diese Website dient der Interessensbekundung für eine lokale
            Energiegemeinschaft sowie der Vorbereitung einer Machbarkeitsstudie.
            Es werden insbesondere folgende Datenkategorien verarbeitet:
          </p>
          <ul className="mt-3 list-disc pl-5 text-ink-muted space-y-1">
            <li>Stammdaten (Name)</li>
            <li>Kontaktdaten (E-Mail-Adresse)</li>
            <li>Ortsangaben (PLZ, Ort)</li>
            <li>
              Projektrelevante Angaben (Rolle Erzeuger/Verbraucher/Beides,
              ggf. PV-Anlagengröße in kWp, geschätzter Jahresverbrauch,
              Smart-Meter-Status)
            </li>
            <li>Einwilligungsnachweise und Bestätigungszeitpunkte</li>
            <li>
              Technische Nutzungsdaten in begrenztem Umfang (z.&nbsp;B. IP-Adresse
              bei Absicherung gegen Missbrauch)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            3. Zwecke der Verarbeitung
          </h2>
          <ul className="mt-3 list-disc pl-5 text-ink-muted space-y-2">
            <li>
              Entgegennahme und Verwaltung von Interessensbekundungen für eine
              lokale Energiegemeinschaft
            </li>
            <li>
              Kontaktaufnahme zur Projektkoordination und Information über den
              Projektfortschritt
            </li>
            <li>
              Durchführung und Auswertung einer Machbarkeitsstudie auf Basis
              anonymisierter bzw. aggregierter Daten (nur mit gesonderter
              Einwilligung)
            </li>
            <li>
              Gewährleistung von Sicherheit, Missbrauchsschutz und technischer
              Stabilität der Website (u.&nbsp;a. Double-Opt-in, Rate Limiting,
              Captcha)
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            4. Rechtsgrundlagen
          </h2>
          <p className="mt-3 text-ink-muted">
            Die Verarbeitung erfolgt insbesondere auf Grundlage von:
          </p>
          <ul className="mt-3 list-disc pl-5 text-ink-muted space-y-2">
            <li>
              <strong className="text-ink">Art. 6 Abs. 1 lit. a DSGVO</strong> –
              Einwilligung (Formularanmeldung, Double-Opt-in, Zustimmung zur
              anonymisierten Studienauswertung)
            </li>
            <li>
              <strong className="text-ink">Art. 6 Abs. 1 lit. f DSGVO</strong> –
              berechtigtes Interesse an sicherem Betrieb der Website und Schutz
              vor Spam, Missbrauch und automatisierten Angriffen
            </li>
          </ul>
          <p className="mt-3 text-ink-muted">
            Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die
            Zukunft widerrufen (siehe Abschnitt „Ihre Rechte“).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            5. Anmeldeprozess und Double-Opt-in
          </h2>
          <p className="mt-3 text-ink-muted">
            Nach dem Absenden des Formulars speichern wir Ihre Angaben zunächst
            mit dem Status <em>pending</em> (unbestätigt). Sie erhalten eine
            E-Mail mit einem Bestätigungslink. Erst nach Anklicken dieses Links
            wird Ihre Anmeldung als <em>confirmed</em> (bestätigt) geführt und
            für die Auswertung der Machbarkeitsstudie berücksichtigt.
          </p>
          <p className="mt-3 text-ink-muted">
            Der Bestätigungslink ist zeitlich begrenzt (in der Regel 48 Stunden)
            gültig. So stellen wir sicher, dass die angegebene E-Mail-Adresse
            Ihnen gehört und reduzieren Missbrauch.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            6. Speicherdauer
          </h2>
          <ul className="mt-3 list-disc pl-5 text-ink-muted space-y-2">
            <li>
              <strong className="text-ink">Unbestätigte Anmeldungen:</strong>{" "}
              werden nach Ablauf des Bestätigungslinks bzw. spätestens nach{" "}
              <strong className="text-ink">7 Tagen</strong> automatisch gelöscht.
            </li>
            <li>
              <strong className="text-ink">Bestätigte Anmeldungen:</strong>{" "}
              speichern wir bis zum Abschluss der Machbarkeitsstudie bzw. bis
              zum Widerruf Ihrer Einwilligung, längstens jedoch{" "}
              <strong className="text-ink">[24 Monate]</strong>.
            </li>
            <li>
              Technische Logs und Sicherheitsereignisse werden nur so lange
              aufbewahrt, wie es für Betrieb und Missbrauchsabwehr erforderlich
              ist.
            </li>
          </ul>
          <p className="mt-3 text-sm text-ink-muted">
            Die Angaben in eckigen Klammern bitte vor Go-Live final festlegen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            7. Empfänger und Auftragsverarbeitung
          </h2>
          <p className="mt-3 text-ink-muted">
            Zur Bereitstellung dieser Website und der zugehörigen Dienste setzen
            wir sorgfältig ausgewählte Dienstleister ein. Mit diesen bestehen –
            soweit erforderlich – Vereinbarungen zur Auftragsverarbeitung gemäß
            Art. 28 DSGVO.
          </p>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-bg-deep text-ink">
                <tr>
                  <th className="px-4 py-3 font-semibold">Dienstleister</th>
                  <th className="px-4 py-3 font-semibold">Zweck</th>
                  <th className="px-4 py-3 font-semibold">Region</th>
                </tr>
              </thead>
              <tbody className="text-ink-muted">
                <tr className="border-t border-line">
                  <td className="px-4 py-3 font-medium text-ink">Vercel Inc.</td>
                  <td className="px-4 py-3">Hosting der Website und API</td>
                  <td className="px-4 py-3">EU / global mit Schutzmaßnahmen</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-4 py-3 font-medium text-ink">Supabase</td>
                  <td className="px-4 py-3">Datenbank der Anmeldungen</td>
                  <td className="px-4 py-3">EU (Paris / West-EU)</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-4 py-3 font-medium text-ink">Resend</td>
                  <td className="px-4 py-3">Versand der Bestätigungsmails</td>
                  <td className="px-4 py-3">EU-fähig / je nach Routing</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-4 py-3 font-medium text-ink">Cloudflare</td>
                  <td className="px-4 py-3">Turnstile Captcha (Bot-Schutz)</td>
                  <td className="px-4 py-3">EU / global mit Schutzmaßnahmen</td>
                </tr>
                <tr className="border-t border-line">
                  <td className="px-4 py-3 font-medium text-ink">IONOS SE</td>
                  <td className="px-4 py-3">Domainregistrierung</td>
                  <td className="px-4 py-3">Deutschland / EU</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-ink-muted">
            Eine Übermittlung in Drittländer findet nur statt, soweit ein
            Dienstleister dies technisch bedingt und unter Einhaltung der
            gesetzlichen Vorgaben (z.&nbsp;B. Angemessenheitsbeschluss,
            Standardvertragsklauseln) erfolgt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            8. Cookies und vergleichbare Technologien
          </h2>
          <p className="mt-3 text-ink-muted">
            Diese Website setzt keine Tracking- oder Marketing-Cookies zu
            Analysezwecken ein. Im Zusammenhang mit dem Login-Bereich für die
            interne Administration kann ein technisch notwendiges Cookie gesetzt
            werden.
          </p>
          <p className="mt-3 text-ink-muted">
            Zur Absicherung des Anmeldeformulars nutzen wir{" "}
            <strong className="text-ink">Cloudflare Turnstile</strong>. Dabei
            können technische Informationen (u.&nbsp;a. Browser-/Geräteinformationen
            und ggf. IP-Adresse) an Cloudflare übermittelt werden, um
            automatisierte Zugriffe zu erkennen. Rechtsgrundlage ist Art. 6 Abs. 1
            lit. f DSGVO (berechtigtes Interesse an Missbrauchsschutz).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            9. Sicherheit
          </h2>
          <p className="mt-3 text-ink-muted">
            Wir treffen angemessene technische und organisatorische Maßnahmen,
            um Ihre Daten zu schützen. Dazu gehören insbesondere:
          </p>
          <ul className="mt-3 list-disc pl-5 text-ink-muted space-y-1">
            <li>Verschlüsselte Übertragung per HTTPS</li>
            <li>Serverseitige Validierung von Formulardaten</li>
            <li>Double-Opt-in für E-Mail-Bestätigung</li>
            <li>Zugriffsschutz für administrative Auswertungen</li>
            <li>Captcha und Rate Limiting gegen automatisierte Angriffe</li>
          </ul>
          <p className="mt-3 text-ink-muted">
            Absolute Sicherheit kann bei Internetübertragungen nicht
            gewährleistet werden. Bitte nutzen Sie für besonders sensible
            Kommunikation zusätzliche Schutzmaßnahmen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            10. Keine Pflicht zur Bereitstellung
          </h2>
          <p className="mt-3 text-ink-muted">
            Sie sind nicht verpflichtet, uns personenbezogene Daten
            bereitzustellen. Ohne die für die Anmeldung erforderlichen Angaben
            können wir Ihre Interessensbekundung jedoch nicht entgegennehmen und
            Sie nicht kontaktieren.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            11. Ihre Rechte
          </h2>
          <p className="mt-3 text-ink-muted">
            Sie haben gegenüber dem Verantwortlichen – soweit die gesetzlichen
            Voraussetzungen vorliegen – folgende Rechte:
          </p>
          <ul className="mt-3 list-disc pl-5 text-ink-muted space-y-1">
            <li>Auskunft (Art. 15 DSGVO)</li>
            <li>Berichtigung (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Widerspruch (Art. 21 DSGVO)</li>
            <li>Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
          </ul>
          <p className="mt-3 text-ink-muted">
            Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an:{" "}
            <a
              href="mailto:[datenschutz@wattlokal.de]"
              className="text-brand-deep underline"
            >
              [datenschutz@wattlokal.de]
            </a>
            .
          </p>
          <p className="mt-3 text-ink-muted">
            Ferner haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde
            zu beschweren. Zuständig ist in der Regel die Aufsichtsbehörde Ihres
            Wohnsitzes bzw. des Sitzes des Verantwortlichen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            12. Minderjährige
          </h2>
          <p className="mt-3 text-ink-muted">
            Dieses Angebot richtet sich nicht an Personen unter 16 Jahren. Wir
            fordern wissentlich keine personenbezogenen Daten von Minderjährigen
            an.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-brand-deep">
            13. Aktualität und Änderungen
          </h2>
          <p className="mt-3 text-ink-muted">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit
            sie stets den aktuellen rechtlichen Anforderungen entspricht oder
            Änderungen unserer Leistungen umsetzt. Für Ihren erneuten Besuch gilt
            jeweils die aktuelle Fassung.
          </p>
        </section>

        <section className="rounded-2xl border border-line bg-bg-deep/80 p-5">
          <h2 className="text-lg font-semibold text-brand-deep">Hinweis</h2>
          <p className="mt-2 text-sm text-ink-muted">
            Diese Datenschutzerklärung ist als professionelle Grundlage für das
            Wattlokal-MVP erstellt. Vor dem öffentlichen Launch sollten die
            Platzhalter (Verantwortlicher, Speicherdauer, Kontakt) final
            ausgefüllt und die Erklärung bei Bedarf rechtlich geprüft werden.
          </p>
        </section>
      </div>
    </div>
  );
}
