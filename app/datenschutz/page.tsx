export default function DatenschutzPage() {
  return (
    <div className="site-shell py-12 max-w-3xl">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-brand-deep">
        Datenschutzerklärung
      </h1>
      <p className="mt-3 text-ink-muted">
        Platzhalter – bitte vor dem öffentlichen Go-Live rechtlich prüfen und
        anpassen.
      </p>

      <div className="mt-8 space-y-6 text-ink leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold">1. Verantwortliche Stelle</h2>
          <p className="mt-2 text-ink-muted">
            [Name / Anschrift / E-Mail der verantwortlichen Person oder
            Organisation eintragen]
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Welche Daten wir erheben</h2>
          <p className="mt-2 text-ink-muted">
            Bei der Anmeldung: Name, E-Mail, PLZ, Ort, Rolle
            (Erzeuger/Verbraucher), ggf. PV-Anlagengröße, geschätzter
            Jahresverbrauch, Smart-Meter-Status sowie die erteilten
            Einwilligungen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Zweck der Verarbeitung</h2>
          <ul className="mt-2 list-disc pl-5 text-ink-muted space-y-1">
            <li>Organisation einer lokalen Energiegemeinschaft</li>
            <li>
              Anonymisierte Auswertung im Rahmen einer Machbarkeitsstudie
              (nur mit Einwilligung)
            </li>
            <li>Kontaktaufnahme zur Projektkoordination</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Rechtsgrundlage</h2>
          <p className="mt-2 text-ink-muted">
            Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung kann
            jederzeit widerrufen werden.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Speicherung & Hosting</h2>
          <p className="mt-2 text-ink-muted">
            Die Website wird über Vercel bereitgestellt. Formulardaten werden in
            einer Datenbank bei Supabase in der EU (Frankfurt) gespeichert.
            Anmeldungen werden erst nach Double-Opt-in (E-Mail-Bestätigung) als
            bestätigt geführt.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Speicherdauer</h2>
          <p className="mt-2 text-ink-muted">
            Unbestätigte Anmeldungen werden nach Ablauf des Bestätigungslinks
            (48 Stunden) bzw. spätestens nach [X] Tagen gelöscht. Bestätigte
            Anmeldungen speichern wir bis zum Abschluss der Machbarkeitsstudie
            bzw. bis zum Widerruf, längstens [Zeitraum eintragen].
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Ihre Rechte</h2>
          <p className="mt-2 text-ink-muted">
            Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit
            und Widerspruch. Kontakt: [E-Mail eintragen].
          </p>
        </section>
      </div>
    </div>
  );
}
