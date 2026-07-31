import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "§ 42c EnWG – Energy Sharing einfach erklärt | Wattlokal",
  description:
    "Die neue Regelung für Energy Sharing – was sie ermöglicht, wo ihre Grenzen liegen und was heute schon möglich ist.",
};

const overview = [
  {
    title: "Was ist § 42c EnWG?",
    text: "Neue gesetzliche Regelung für Energy Sharing",
  },
  {
    title: "Worum geht es?",
    text: "Strom aus erneuerbaren Anlagen kann gemeinsam genutzt werden",
  },
  {
    title: "Wie wird verteilt?",
    text: "Über das öffentliche Stromnetz mit bilanzieller Zuordnung",
  },
  {
    title: "Wer kann teilnehmen?",
    text: "Haushalte, kleinere Unternehmen und öffentliche Einrichtungen",
  },
  {
    title: "Was braucht man?",
    text: "Stromzähler mit viertelstündlicher Messung sowie Verträge zwischen allen Beteiligten",
  },
  {
    title: "Ab wann gilt es?",
    text: "Seit 1. Juni 2026 in Kraft, schrittweise Erweiterungen geplant",
  },
];

const enables = [
  {
    title: "Energy Sharing wird erstmals möglich",
    text: "Die gemeinsame Nutzung von Strom aus erneuerbaren Anlagen ist erstmals gesetzlich geregelt.",
  },
  {
    title: "Nutzung über das öffentliche Stromnetz",
    text: "Teilnehmer müssen nicht direkt an die Anlage angeschlossen sein, sondern können über das bestehende Stromnetz eingebunden werden.",
  },
  {
    title: "Neue Form der Stromnutzung",
    text: "Strom wird nicht wie gewohnt geliefert, sondern innerhalb eines geregelten Modells gemeinsam genutzt.",
  },
];

const steps = [
  {
    title: "Strom wird erzeugt",
    text: "Eine Anlage (z. B. Photovoltaik) produziert erneuerbaren Strom.",
  },
  {
    title: "Verbrauch wird zeitgleich erfasst",
    text: "Gleichzeitig wird bei allen teilnehmenden Verbrauchern genau gemessen, wie viel Strom sie zu diesem Zeitpunkt nutzen.",
  },
  {
    title: "Strom wird bilanziell zugeordnet",
    text: "Der erzeugte Strom wird nicht physisch an einzelne Teilnehmer geliefert, sondern rechnerisch auf die Teilnehmer aufgeteilt.",
  },
  {
    title: "Verteilung erfolgt über das Stromnetz",
    text: "Physisch fließt der Strom weiterhin ganz normal über das öffentliche Stromnetz. Die Teilnehmer erhalten ihren Strom wie gewohnt.",
  },
  {
    title: "Reststrom wird zusätzlich bezogen",
    text: "Reicht der erzeugte Strom nicht aus, beziehen die Teilnehmer automatisch zusätzlichen Strom über einen selbst gewählten Anbieter.",
  },
  {
    title: "Abrechnung & Zuordnung im Hintergrund",
    text: "Die Zuordnung des Stroms sowie die Abrechnung erfolgen im Hintergrund über verschiedene Marktprozesse. Dabei müssen Erzeugung, Verbrauch und vertragliche Regelungen korrekt zusammengeführt werden.",
  },
];

const prerequisites = [
  {
    title: "Verträge",
    items: [
      "Je nach Umsetzungsmodell können mehrere Vertragsbeziehungen erforderlich sein",
      "Mit dem Dienstleistermodell lässt sich die vertragliche Komplexität reduzieren",
    ],
  },
  {
    title: "Technische Voraussetzungen",
    items: [
      "Viertelstündliche Messung (z. B. Smart Meter) von Erzeugung und Verbrauch notwendig",
      "Nur Strom aus erneuerbaren Energien zulässig",
    ],
  },
  {
    title: "Organisation & Abwicklung",
    items: [
      "Für die Umsetzung müssen energiewirtschaftliche Prozesse wie Bilanzierung, Marktkommunikation und Abrechnung organisiert werden",
      "Diese Aufgaben können von einem spezialisierten Dienstleister übernommen werden",
    ],
  },
  {
    title: "Rahmenbedingungen",
    items: ["Die Anlage darf nicht primär gewerblich betrieben werden"],
  },
];

const challenges = [
  {
    title: "Eingeschränkter Teilnehmerkreis",
    items: [
      "Nur Haushalte, KMUs und öffentliche Einrichtungen zugelassen",
      "Große Unternehmen ausgeschlossen",
    ],
    note: "Kein universelles Modell für alle Marktakteure",
  },
  {
    title: "Regionale Begrenzung",
    items: [
      "Teilnahme zunächst nur innerhalb eines Netzgebietes möglich",
      "Erweiterung erst ab 2028 vorgesehen",
    ],
    note: "Aktuell nur lokal umsetzbar",
  },
  {
    title: "Zusätzlicher Strombezug bleibt notwendig",
    items: [
      "Erzeugung deckt den Bedarf nicht jederzeit",
      "Reststrom muss weiterhin über klassische Anbieter bezogen werden",
    ],
    note: "Ergänzt den klassischen Strombezug, ersetzt ihn aber nicht vollständig",
  },
  {
    title: "Regulatorische Schwellen bei der Anlagengröße",
    items: [
      "Vereinfachungen gelten nur bis 30 kW / 100 kW (Mehrparteienhäuser)",
      "Darüber greifen umfassende regulatorische Anforderungen",
    ],
    note: "Größere Projekte werden deutlich komplexer",
  },
  {
    title: "Aufwendige Umsetzung",
    items: [
      "Je nach Umsetzungsmodell sind mehrere Vertragsbeziehungen erforderlich",
      "Energiewirtschaftliche Prozesse müssen aufeinander abgestimmt werden",
      "Bilanzierung, Marktkommunikation und Abrechnung erfordern eine sorgfältige Organisation",
    ],
    note: "Die Umsetzung kann einen hohen Aufwand erfordern",
  },
];

const comparison = [
  {
    label: "Messung",
    enwg: "15-Minuten-Messung (z. B. Smart Meter)",
    community:
      "15-Minuten-Messwerte per einfach installierbarem Lesekopf",
  },
  {
    label: "Teilnehmerkreis",
    enwg: "Beschränkt auf Haushalte, KMUs und öffentliche Einrichtungen",
    community: "Offen für alle Nutzergruppen",
  },
  {
    label: "Regionale Begrenzung",
    enwg: "Auf ein Netzgebiet beschränkt",
    community: "Bundesweit umsetzbar",
  },
  {
    label: "Anlagen & Betrieb",
    enwg: "Begrenzte Anlagengröße (30/100 kW), nicht primär gewerblicher Betrieb",
    community: "Keine Begrenzungen, auch gewerblich möglich",
  },
  {
    label: "Umsetzung",
    enwg: "Je nach Umsetzungsmodell mehrere Vertragsbeziehungen und Abstimmungen",
    community: "Ein Vertrag, zentrale Abwicklung",
  },
  {
    label: "Flexibilität",
    enwg: "Regulatorisch eingeschränkt",
    community: "Frei gestaltbar",
  },
  {
    label: "Transparenz",
    enwg: "Keine einheitliche Darstellung",
    community: "Zentrale Plattform",
  },
  {
    label: "Reststrom-Versorgung",
    enwg: "Zusätzlicher Stromliefervertrag erforderlich",
    community: "Automatische Lieferung fehlender Strommengen",
  },
  {
    label: "Umsetzungsstand",
    enwg: "Einführung ab 2026, Prozesse im Aufbau",
    community: "Bereits heute praxiserprobt im Einsatz",
  },
];

export default function Paragraph42cPage() {
  return (
    <div className="pb-20">
      <section className="border-b border-line bg-[color:var(--bg-deep)]">
        <div className="site-shell py-14 sm:py-20 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Rechtlicher Rahmen
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-semibold text-ink leading-tight">
            § 42c EnWG: Das steckt dahinter
          </h1>
          <p className="mt-5 text-lg text-ink-muted leading-relaxed">
            Die neue Regelung für Energy Sharing – was sie ermöglicht, wo ihre
            Grenzen liegen und was heute schon möglich ist.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#was-ist-wattlokal" className="btn btn-secondary">
              Mehr über Stromcommunitys erfahren →
            </Link>
            <a href="#vergleich" className="btn btn-secondary">
              Direkt zum Vergleich
            </a>
          </div>
        </div>
      </section>

      <section className="site-shell py-12 sm:py-16 max-w-3xl">
        <p className="text-ink leading-relaxed text-lg">
          Mit § 42c EnWG wird Energy Sharing erstmals gesetzlich geregelt und in
          die bestehenden Strukturen des Energiemarkts integriert. Strom aus
          erneuerbaren Anlagen kann damit gemeinschaftlich genutzt werden.
        </p>
        <p className="mt-4 text-ink-muted leading-relaxed">
          Der Paragraf definiert dafür konkrete Vorgaben zu Teilnehmern,
          technischen Voraussetzungen, Messkonzepten und vertraglichen
          Regelungen. Gleichzeitig zeigt sich: Die praktische Umsetzung bleibt
          komplex und ist weiterhin mit hohen Anforderungen für alle Beteiligten
          verbunden.
        </p>
        <p className="mt-4 text-ink-muted leading-relaxed">
          Gemeinschaftliche Energienutzung ist dennoch schon heute möglich –
          über bestehende Modelle, die deutlich einfacher und praxistauglicher
          umgesetzt werden.
        </p>
      </section>

      <section className="site-shell py-8 sm:py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Überblick
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink">
          Die wichtigsten Punkte zu § 42c EnWG
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {overview.map((item) => (
            <div key={item.title} className="border-t border-line pt-4">
              <h3 className="font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-ink-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-shell py-8 sm:py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Möglichkeiten
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink">
          Was § 42c jetzt ermöglicht
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {enables.map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-ink text-lg">{item.title}</h3>
              <p className="mt-2 text-ink-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-[color:var(--surface)]">
        <div className="site-shell py-12 sm:py-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
            So funktioniert&apos;s
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink">
            Die Logik hinter Energy Sharing nach § 42c
          </h2>
          <p className="mt-5 text-ink-muted leading-relaxed">
            Die Bundesnetzagentur hat das Dienstleistungsmodell als eine
            Möglichkeit beschrieben, Energy Sharing innerhalb der bestehenden
            Marktprozesse umzusetzen. Spezialisierte Dienstleister übernehmen
            dabei die energiewirtschaftliche Abwicklung – beispielsweise
            Bilanzierung, Marktkommunikation und Abrechnung.
          </p>
          <p className="mt-3">
            <a
              href="https://www.bundesnetzagentur.de/"
              target="_blank"
              rel="noreferrer"
              className="text-ok underline underline-offset-2"
            >
              Aktuelle Informationen der BNetzA zu Energy Sharing →
            </a>
          </p>
          <ol className="mt-10 space-y-8">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="shrink-0 font-[family-name:var(--font-display)] text-2xl font-semibold text-[#0b4f9c]">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-ink text-lg">{step.title}</h3>
                  <p className="mt-1 text-ink-muted leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-shell py-12 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Voraussetzungen
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink">
          Welche Bedingungen erfüllt sein müssen
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {prerequisites.map((block) => (
            <div key={block.title}>
              <h3 className="font-semibold text-ink text-lg">{block.title}</h3>
              <ul className="mt-3 space-y-2 text-ink-muted leading-relaxed list-disc pl-5">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-[color:var(--bg-deep)]">
        <div className="site-shell py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Herausforderungen
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink max-w-3xl">
            Wo § 42c an Grenzen stößt
          </h2>
          <p className="mt-5 max-w-3xl text-ink-muted leading-relaxed">
            So vielversprechend § 42c ist – in der praktischen Umsetzung zeigen
            sich klare Grenzen. Viele Anforderungen machen die Umsetzung
            komplexer und weniger skalierbar als erwartet.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((block) => (
              <div key={block.title}>
                <h3 className="font-semibold text-ink text-lg">{block.title}</h3>
                <ul className="mt-3 space-y-2 text-ink-muted leading-relaxed list-disc pl-5">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-medium text-ink">{block.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="vergleich" className="site-shell py-12 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
          Vergleich
        </p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink">
          § 42c vs. Stromcommunity
        </h2>
        <p className="mt-4 max-w-3xl text-ink-muted leading-relaxed">
          Zwei Wege Energy Sharing umzusetzen – mit klaren Unterschieden in der
          Praxis.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left border-collapse">
            <thead>
              <tr className="border-b border-line">
                <th className="py-3 pr-4 font-semibold text-ink w-[22%]" />
                <th className="py-3 pr-4 font-semibold text-ink">§ 42c EnWG</th>
                <th className="py-3 font-semibold text-ink">Stromcommunity</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-b border-line align-top">
                  <th className="py-4 pr-4 font-semibold text-ink text-sm">
                    {row.label}
                  </th>
                  <td className="py-4 pr-4 text-ink-muted text-sm leading-relaxed">
                    {row.enwg}
                  </td>
                  <td className="py-4 text-ink-muted text-sm leading-relaxed">
                    {row.community}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 max-w-3xl text-ink-muted leading-relaxed">
          Beide Modelle basieren auf einer rechnerischen Zuordnung und nutzen
          das bestehende Stromnetz. Die Unterschiede liegen vor allem im
          gesetzlichen Anwendungsbereich, den regulatorischen Vorgaben und der
          Flexibilität der Umsetzung.
        </p>
        <p className="mt-4 max-w-3xl text-ink-muted leading-relaxed">
          Stromcommunitys sind kein neues Konzept im Rahmen von § 42c, sondern
          bereits seit mehreren Jahren in der Praxis erprobt. Wattlokal prüft
          mit einer Machbarkeitsstudie, ob und wie eine lokale Energiegemeinschaft
          für Erzeuger und Verbraucher vor Ort tragfähig ist.
        </p>
        <p className="mt-6">
          <Link href="/#was-ist-wattlokal" className="btn btn-secondary">
            Mehr über Wattlokal erfahren →
          </Link>
        </p>
      </section>

      <section className="border-t border-line bg-[color:var(--surface)]">
        <div className="site-shell py-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-ink-muted">
            Vielseitige Benefits
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-ink max-w-3xl">
            Warum Stromcommunitys heute die einfachere Lösung sind
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="font-semibold text-ink text-lg">Einfach umgesetzt</h3>
              <p className="mt-2 text-ink-muted leading-relaxed">
                Ein Vertrag, zentrale Abwicklung – keine komplexe Abstimmung
                zwischen mehreren Beteiligten
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-ink text-lg">
                Für jedes Projekt geeignet
              </h3>
              <p className="mt-2 text-ink-muted leading-relaxed">
                Stromcommunitys sind flexibel skalierbar und ohne Begrenzungen
                umsetzbar
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-ink text-lg">Bundesweit nutzbar</h3>
              <p className="mt-2 text-ink-muted leading-relaxed">
                Energy Sharing kann standortunabhängig in ganz Deutschland
                umgesetzt werden
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-ink text-lg">Alles aus einer Hand</h3>
              <p className="mt-2 text-ink-muted leading-relaxed">
                Von energiewirtschaftlichen Prozessen bis zur transparenten
                Abrechnung lässt sich die Umsetzung zentral organisieren
              </p>
            </div>
          </div>
          <p className="mt-10">
            <Link href="/anmelden" className="btn">
              Interesse an Wattlokal bekunden
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
