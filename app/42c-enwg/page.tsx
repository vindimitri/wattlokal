import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "§ 42c EnWG – Energy Sharing einfach erklärt | Wattlokal",
  description:
    "Die neue Regelung für Energy Sharing – was sie ermöglicht, wo ihre Grenzen liegen und was heute schon möglich ist.",
};

const overview = [
  {
    emoji: "📄",
    tone: "enwg-icon-yellow",
    title: "Was ist § 42c EnWG?",
    text: "Neue gesetzliche Regelung für Energy Sharing",
  },
  {
    emoji: "☀️",
    tone: "enwg-icon-blue",
    title: "Worum geht es?",
    text: "Strom aus erneuerbaren Anlagen kann gemeinsam genutzt werden",
  },
  {
    emoji: "↔️",
    tone: "enwg-icon-green",
    title: "Wie wird verteilt?",
    text: "Über das öffentliche Stromnetz mit bilanzieller Zuordnung",
  },
  {
    emoji: "👥",
    tone: "enwg-icon-orange",
    title: "Wer kann teilnehmen?",
    text: "Haushalte, kleinere Unternehmen und öffentliche Einrichtungen",
  },
  {
    emoji: "📟",
    tone: "enwg-icon-purple",
    title: "Was braucht man?",
    text: "Stromzähler mit viertelstündlicher Messung sowie Verträge zwischen allen Beteiligten",
  },
  {
    emoji: "📅",
    tone: "enwg-icon-teal",
    title: "Ab wann gilt es?",
    text: "Seit 1. Juni 2026 in Kraft, schrittweise Erweiterungen geplant",
  },
];

const enables = [
  {
    emoji: "✅",
    tone: "enwg-icon-green",
    title: "Energy Sharing wird erstmals möglich",
    text: "Die gemeinsame Nutzung von Strom aus erneuerbaren Anlagen ist erstmals gesetzlich geregelt.",
  },
  {
    emoji: "🔌",
    tone: "enwg-icon-blue",
    title: "Nutzung über das öffentliche Stromnetz",
    text: "Teilnehmer müssen nicht direkt an die Anlage angeschlossen sein, sondern können über das bestehende Stromnetz eingebunden werden.",
  },
  {
    emoji: "🔄",
    tone: "enwg-icon-yellow",
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
    emoji: "📝",
    tone: "enwg-icon-yellow",
    title: "Verträge",
    items: [
      "Je nach Umsetzungsmodell können mehrere Vertragsbeziehungen erforderlich sein",
      "Mit dem Dienstleistermodell lässt sich die vertragliche Komplexität reduzieren",
    ],
  },
  {
    emoji: "⚙️",
    tone: "enwg-icon-blue",
    title: "Technische Voraussetzungen",
    items: [
      "Viertelstündliche Messung (z. B. Smart Meter) von Erzeugung und Verbrauch notwendig",
      "Nur Strom aus erneuerbaren Energien zulässig",
    ],
  },
  {
    emoji: "🏢",
    tone: "enwg-icon-green",
    title: "Organisation & Abwicklung",
    items: [
      "Für die Umsetzung müssen energiewirtschaftliche Prozesse wie Bilanzierung, Marktkommunikation und Abrechnung organisiert werden",
      "Diese Aufgaben können von einem spezialisierten Dienstleister übernommen werden",
    ],
  },
  {
    emoji: "📏",
    tone: "enwg-icon-orange",
    title: "Rahmenbedingungen",
    items: ["Die Anlage darf nicht primär gewerblich betrieben werden"],
  },
];

const challenges = [
  {
    emoji: "🚫",
    tone: "enwg-icon-orange",
    title: "Eingeschränkter Teilnehmerkreis",
    items: [
      "Nur Haushalte, KMUs und öffentliche Einrichtungen zugelassen",
      "Große Unternehmen ausgeschlossen",
    ],
    note: "Kein universelles Modell für alle Marktakteure",
  },
  {
    emoji: "📍",
    tone: "enwg-icon-blue",
    title: "Regionale Begrenzung",
    items: [
      "Teilnahme zunächst nur innerhalb eines Netzgebietes möglich",
      "Erweiterung erst ab 2028 vorgesehen",
    ],
    note: "Aktuell nur lokal umsetzbar",
  },
  {
    emoji: "⚡",
    tone: "enwg-icon-yellow",
    title: "Zusätzlicher Strombezug bleibt notwendig",
    items: [
      "Erzeugung deckt den Bedarf nicht jederzeit",
      "Reststrom muss weiterhin über klassische Anbieter bezogen werden",
    ],
    note: "Ergänzt den klassischen Strombezug, ersetzt ihn aber nicht vollständig",
  },
  {
    emoji: "📐",
    tone: "enwg-icon-purple",
    title: "Regulatorische Schwellen bei der Anlagengröße",
    items: [
      "Vereinfachungen gelten nur bis 30 kW / 100 kW (Mehrparteienhäuser)",
      "Darüber greifen umfassende regulatorische Anforderungen",
    ],
    note: "Größere Projekte werden deutlich komplexer",
  },
  {
    emoji: "🧩",
    tone: "enwg-icon-teal",
    title: "Aufwendige Umsetzung",
    items: [
      "Je nach Umsetzungsmodell sind mehrere Vertragsbeziehungen erforderlich",
      "Energiewirtschaftliche Prozesse müssen aufeinander abgestimmt werden",
      "Bilanzierung, Marktkommunikation und Abrechnung erfordern eine sorgfältige Organisation",
    ],
    note: "Die Umsetzung kann einen hohen Aufwand erfordern",
  },
];

const benefits = [
  {
    emoji: "✨",
    tone: "enwg-icon-yellow",
    title: "Einfach umgesetzt",
    text: "Ein Vertrag, zentrale Abwicklung – keine komplexe Abstimmung zwischen mehreren Beteiligten",
  },
  {
    emoji: "📈",
    tone: "enwg-icon-green",
    title: "Für jedes Projekt geeignet",
    text: "Stromcommunitys sind flexibel skalierbar und ohne Begrenzungen umsetzbar",
  },
  {
    emoji: "🇩🇪",
    tone: "enwg-icon-blue",
    title: "Bundesweit nutzbar",
    text: "Energy Sharing kann standortunabhängig in ganz Deutschland umgesetzt werden",
  },
  {
    emoji: "🤝",
    tone: "enwg-icon-teal",
    title: "Alles aus einer Hand",
    text: "Von energiewirtschaftlichen Prozessen bis zur transparenten Abrechnung lässt sich die Umsetzung zentral organisieren",
  },
];

export default function Paragraph42cPage() {
  return (
    <div className="enwg-page pb-8">
      <section className="enwg-hero">
        <div className="site-shell max-w-3xl">
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-semibold leading-tight text-[color:var(--enwg-navy)]">
            § 42c EnWG: Das steckt dahinter
          </h1>
          <div className="enwg-divider" aria-hidden />
        </div>
      </section>



      <section className="site-shell py-8 sm:py-12">
        <p className="enwg-kicker">Überblick</p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)]">
          Die wichtigsten Punkte zu § 42c EnWG
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {overview.map((item) => (
            <article key={item.title} className="enwg-card">
              <span className={`enwg-icon ${item.tone}`} aria-hidden>
                {item.emoji}
              </span>
              <h3 className="font-semibold text-lg text-[color:var(--enwg-navy)]">
                {item.title}
              </h3>
              <p className="mt-2 text-[color:var(--enwg-muted)] leading-relaxed">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell py-8 sm:py-12">
        <p className="enwg-kicker">Möglichkeiten</p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)]">
          Was § 42c jetzt ermöglicht
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {enables.map((item) => (
            <article key={item.title} className="enwg-card">
              <span className={`enwg-icon ${item.tone}`} aria-hidden>
                {item.emoji}
              </span>
              <h3 className="font-semibold text-lg text-[color:var(--enwg-navy)]">
                {item.title}
              </h3>
              <p className="mt-2 text-[color:var(--enwg-muted)] leading-relaxed">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="logik" className="py-10 sm:py-14 bg-[#eef2f5]">
        <div className="site-shell max-w-3xl">
          <p className="enwg-kicker">So funktioniert&apos;s</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)]">
            Die Logik hinter Energy Sharing nach § 42c
          </h2>

          <div className="mt-6 enwg-card">
            <span className="enwg-icon enwg-icon-yellow" aria-hidden>
              💡
            </span>
            <p className="leading-relaxed text-[color:var(--enwg-navy)]">
              Die Bundesnetzagentur hat das Dienstleistungsmodell als eine
              Möglichkeit beschrieben, Energy Sharing innerhalb der bestehenden
              Marktprozesse umzusetzen. Spezialisierte Dienstleister übernehmen
              dabei die energiewirtschaftliche Abwicklung – beispielsweise
              Bilanzierung, Marktkommunikation und Abrechnung.
            </p>
            <p className="mt-4">
              <a
                href="https://www.bundesnetzagentur.de/DE/Vportal/Energie/Energy_Sharing/start.html"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#0b4f9c] underline-offset-2 hover:underline"
              >
                Aktuelle Informationen der BNetzA zu Energy Sharing →
              </a>
            </p>
          </div>

          <div className="mt-10 roadmap">
            {steps.map((step, index) => (
              <div key={step.title} className="roadmap-step">
                <span className="roadmap-num" aria-hidden>
                  {index + 1}
                </span>
                <article className="roadmap-card">
                  <h3 className="font-semibold text-lg text-[color:var(--enwg-navy)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[color:var(--enwg-muted)] leading-relaxed">
                    {step.text}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell py-10 sm:py-14">
        <p className="enwg-kicker">Voraussetzungen</p>
        <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)]">
          Welche Bedingungen erfüllt sein müssen
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {prerequisites.map((block) => (
            <article key={block.title} className="enwg-card">
              <span className={`enwg-icon ${block.tone}`} aria-hidden>
                {block.emoji}
              </span>
              <h3 className="font-semibold text-lg text-[color:var(--enwg-navy)]">
                {block.title}
              </h3>
              <ul className="mt-3 space-y-2 text-[color:var(--enwg-muted)] leading-relaxed list-disc pl-5">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-[#eef2f5]">
        <div className="site-shell">
          <p className="enwg-kicker">Herausforderungen</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)] max-w-3xl">
            Wo § 42c an Grenzen stößt
          </h2>
          <p className="mt-4 max-w-3xl text-[color:var(--enwg-muted)] leading-relaxed">
            So vielversprechend § 42c ist – in der praktischen Umsetzung zeigen
            sich klare Grenzen. Viele Anforderungen machen die Umsetzung
            komplexer und weniger skalierbar als erwartet.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((block) => (
              <article key={block.title} className="enwg-card">
                <span className={`enwg-icon ${block.tone}`} aria-hidden>
                  {block.emoji}
                </span>
                <h3 className="font-semibold text-lg text-[color:var(--enwg-navy)]">
                  {block.title}
                </h3>
                <ul className="mt-3 space-y-2 text-[color:var(--enwg-muted)] leading-relaxed list-disc pl-5">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-3 text-sm font-semibold text-[color:var(--enwg-navy)]">
                  {block.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-[#eef2f5]">
        <div className="site-shell">
          <p className="enwg-kicker">Vielseitige Benefits</p>
          <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold text-[color:var(--enwg-navy)] max-w-3xl">
            Warum Stromcommunitys heute die einfachere Lösung sind
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item) => (
              <article key={item.title} className="enwg-card">
                <span className={`enwg-icon ${item.tone}`} aria-hidden>
                  {item.emoji}
                </span>
                <h3 className="font-semibold text-lg text-[color:var(--enwg-navy)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[color:var(--enwg-muted)] leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
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
