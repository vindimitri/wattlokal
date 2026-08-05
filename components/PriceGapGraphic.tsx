"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";

type ActorId = "producer" | "consumer-house" | "consumer-flat" | "market";

type ModalContent = {
  title: string;
  body: string;
};

const MODALS: Record<ActorId, ModalContent> = {
  producer: {
    title: "Das Erzeuger-Dilemma",
    body: "Du produzierst wertvollen Ökostrom auf deinem Dach, erhältst vom Netzbetreiber aber durchschnittlich nur magere 8 Cent pro Kilowattstunde. Über Wattlokal kannst du deinen Strom direkt an deine Nachbarn verkaufen – für eine faire, deutlich höhere Vergütung!",
  },
  "consumer-house": {
    title: "Die Verbraucher-Falle",
    body: "Während dein Nachbar Solarstrom übrig hat, zahlst du im Schnitt heftige 35 Cent pro Kilowattstunde an die großen Konzerne. Über Wattlokal beziehst du diesen Strom direkt aus deiner Straße – und sparst bares Geld!",
  },
  "consumer-flat": {
    title: "Die Verbraucher-Falle",
    body: "Während dein Nachbar Solarstrom übrig hat, zahlst du im Schnitt heftige 35 Cent pro Kilowattstunde an die großen Konzerne. Über Wattlokal beziehst du diesen Strom direkt aus deiner Straße – und sparst bares Geld!",
  },
  market: {
    title: "Wattlokal – Wir teilen Watt",
    body: "Wir sind die faire Brücke in deinem Veedel. Wir bringen Erzeuger und Verbraucher direkt zusammen, umgehen die anonyme Strombörse und sorgen dafür, dass das Geld und der grüne Strom in unserer Nachbarschaft bleiben.",
  },
};

function SolarHouseIcon() {
  return (
    <svg aria-hidden viewBox="0 0 48 48" className="h-10 w-10" fill="none">
      <path
        d="M8 22.5 24 8l16 14.5V40a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V22.5Z"
        fill="#ecfdf5"
        stroke="#059669"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M20 42V28h8v14" stroke="#047857" strokeWidth="1.75" />
      <path
        d="M12 20.5h8.5M12 24h8.5M12 27.5h8.5M27.5 20.5H36M27.5 24H36M27.5 27.5H36"
        stroke="#f59e0b"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="38" cy="12" r="4" fill="#fbbf24" />
    </svg>
  );
}

function ClassicHouseIcon() {
  return (
    <svg aria-hidden viewBox="0 0 48 48" className="h-10 w-10" fill="none">
      <path
        d="M8 22.5 24 9l16 13.5V40a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V22.5Z"
        fill="#eff6ff"
        stroke="#2563eb"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path d="M20 42V29h8v13" stroke="#1d4ed8" strokeWidth="1.75" />
      <rect
        x="14"
        y="24"
        width="6"
        height="5"
        rx="0.8"
        fill="#bfdbfe"
        stroke="#2563eb"
        strokeWidth="1"
      />
      <rect
        x="28"
        y="24"
        width="6"
        height="5"
        rx="0.8"
        fill="#bfdbfe"
        stroke="#2563eb"
        strokeWidth="1"
      />
    </svg>
  );
}

function ApartmentIcon() {
  return (
    <svg aria-hidden viewBox="0 0 48 48" className="h-10 w-10" fill="none">
      <rect
        x="12"
        y="8"
        width="24"
        height="34"
        rx="2"
        fill="#f1f5f9"
        stroke="#475569"
        strokeWidth="1.75"
      />
      <path d="M12 42h24" stroke="#334155" strokeWidth="1.75" />
      {[0, 1, 2].map((row) =>
        [0, 1].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={17 + col * 9}
            y={14 + row * 8}
            width="5"
            height="4.5"
            rx="0.6"
            fill="#cbd5e1"
          />
        )),
      )}
    </svg>
  );
}

function ShareBoltIcon() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo.svg" alt="" width={40} height={40} className="h-10 w-10" />
  );
}

function ActorCard({
  title,
  subtitle,
  icon,
  onClick,
}: {
  title: string;
  subtitle?: string;
  icon: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full rounded-2xl border border-slate-200/80 bg-white p-4 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
    >
      <span className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-100 transition-colors duration-300 group-hover:bg-emerald-50">
        {icon}
      </span>
      <span className="block text-sm font-semibold text-slate-800">{title}</span>
      {subtitle ? (
        <span className="mt-0.5 block text-xs text-slate-500">{subtitle}</span>
      ) : null}
      <span className="mt-2 block text-xs font-medium text-emerald-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        Mehr erfahren →
      </span>
    </button>
  );
}

function PriceTag({ label, value }: { label: string; value: string }) {
  return (
    <div className="mt-3 inline-flex flex-col items-start rounded-xl border border-red-200 bg-red-50 px-3.5 py-2.5 shadow-sm">
      <span className="text-[0.7rem] font-semibold uppercase tracking-wide text-red-600/80">
        {label}
      </span>
      <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-red-700">
        {value}
      </span>
    </div>
  );
}

function FlowLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      viewBox="0 0 1000 520"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="flow-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#10b981" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Producer → Market */}
      <path
        className="price-gap-path"
        d="M180 160 C 220 260, 360 340, 500 390"
        fill="none"
        stroke="url(#flow-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle r="4" fill="#34d399" className="price-gap-dot">
        <animateMotion
          dur="2.8s"
          repeatCount="indefinite"
          path="M180 160 C 220 260, 360 340, 500 390"
        />
      </circle>

      {/* Consumer house → Market */}
      <path
        className="price-gap-path"
        d="M820 120 C 760 220, 620 330, 500 390"
        fill="none"
        stroke="url(#flow-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle r="4" fill="#34d399" className="price-gap-dot">
        <animateMotion
          dur="3.1s"
          begin="0.4s"
          repeatCount="indefinite"
          path="M820 120 C 760 220, 620 330, 500 390"
        />
      </circle>

      {/* Consumer flat → Market */}
      <path
        className="price-gap-path"
        d="M820 250 C 740 300, 600 360, 500 390"
        fill="none"
        stroke="url(#flow-green)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle r="4" fill="#10b981" className="price-gap-dot">
        <animateMotion
          dur="2.6s"
          begin="0.9s"
          repeatCount="indefinite"
          path="M820 250 C 740 300, 600 360, 500 390"
        />
      </circle>

      {/* Preisschere dashed line */}
      <path
        d="M260 95 H 740"
        fill="none"
        stroke="#f87171"
        strokeWidth="1.75"
        strokeDasharray="6 7"
        opacity="0.75"
      />
    </svg>
  );
}

export function PriceGapGraphic() {
  const [active, setActive] = useState<ActorId | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descId = useId();

  useEffect(() => {
    if (!active) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const modal = active ? MODALS[active] : null;

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-50 p-4 sm:p-6 lg:p-8">
      <p className="mb-5 text-center text-sm text-slate-500">
        Tippe auf die Akteure oder den Marktplatz, um mehr zu erfahren.
      </p>

      <div className="relative mx-auto max-w-5xl">
        <FlowLines />

        {/* Desktop: 3-column bridge layout */}
        <div className="relative z-[1] hidden grid-cols-[1fr_auto_1fr] gap-6 lg:grid">
          {/* Left – Erzeuger */}
          <div className="flex flex-col items-start pt-2">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Erzeuger
            </p>
            <ActorCard
              title="Privathaushalt mit PV"
              subtitle="Solarstrom vom Dach"
              icon={<SolarHouseIcon />}
              onClick={() => setActive("producer")}
            />
            <PriceTag label="Einspeisevergütung" value="Erhält nur ca. 8 ct/kWh" />
          </div>

          {/* Center spacer for market bubble lower */}
          <div className="flex w-52 flex-col items-center justify-end pb-2">
            <div className="relative mb-auto mt-6 flex w-full items-center justify-center px-2">
              <div className="h-px flex-1 border-t border-dashed border-red-300" />
              <span className="mx-2 rounded-full bg-red-50 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-red-600 ring-1 ring-red-200">
                Preisschere
              </span>
              <div className="h-px flex-1 border-t border-dashed border-red-300" />
            </div>

            <button
              type="button"
              onClick={() => setActive("market")}
              className="price-gap-pulse group relative mt-28 flex w-full flex-col items-center rounded-3xl border-2 border-emerald-400/60 bg-gradient-to-b from-emerald-50 to-white px-4 py-5 text-center shadow-md shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <ShareBoltIcon />
              <span className="mt-2 text-sm font-bold text-emerald-800">
                Wattlokal Marktplatz
              </span>
              <span className="mt-1 text-xs text-emerald-700/80">
                Die faire Brücke vor Ort
              </span>
            </button>
          </div>

          {/* Right – Verbraucher */}
          <div className="flex flex-col items-end pt-2">
            <p className="mb-3 w-full text-right text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Verbraucher
            </p>
            <div className="flex w-full max-w-xs flex-col gap-3">
              <ActorCard
                title="Einfamilienhaus"
                subtitle="Klassischer Haushalt"
                icon={<ClassicHouseIcon />}
                onClick={() => setActive("consumer-house")}
              />
              <ActorCard
                title="Privathaushalt / Wohnung"
                subtitle="Mehrfamilienhaus"
                icon={<ApartmentIcon />}
                onClick={() => setActive("consumer-flat")}
              />
            </div>
            <div className="w-full max-w-xs">
              <PriceTag label="Netzstrom-Durchschnitt" value="Zahlt ca. 35 ct/kWh" />
            </div>
          </div>
        </div>

        {/* Mobile stacked */}
        <div className="relative z-[1] space-y-5 lg:hidden">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Erzeuger
            </p>
            <ActorCard
              title="Privathaushalt mit PV"
              subtitle="Solarstrom vom Dach"
              icon={<SolarHouseIcon />}
              onClick={() => setActive("producer")}
            />
            <PriceTag label="Einspeisevergütung" value="Erhält nur ca. 8 ct/kWh" />
          </div>

          <div className="flex items-center gap-3 px-1">
            <div className="h-px flex-1 border-t border-dashed border-red-300" />
            <span className="rounded-full bg-red-50 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-red-600 ring-1 ring-red-200">
              Preisschere
            </span>
            <div className="h-px flex-1 border-t border-dashed border-red-300" />
          </div>

          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
              Verbraucher
            </p>
            <div className="space-y-3">
              <ActorCard
                title="Einfamilienhaus"
                subtitle="Klassischer Haushalt"
                icon={<ClassicHouseIcon />}
                onClick={() => setActive("consumer-house")}
              />
              <ActorCard
                title="Privathaushalt / Wohnung"
                subtitle="Mehrfamilienhaus"
                icon={<ApartmentIcon />}
                onClick={() => setActive("consumer-flat")}
              />
            </div>
            <PriceTag label="Netzstrom-Durchschnitt" value="Zahlt ca. 35 ct/kWh" />
          </div>

          <div className="flex justify-center pt-1">
            <svg
              aria-hidden
              viewBox="0 0 24 40"
              className="h-10 w-6 text-emerald-500"
              fill="none"
            >
              <path
                d="M12 2v28"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="price-gap-path"
              />
              <path
                d="M6 26l6 8 6-8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <button
            type="button"
            onClick={() => setActive("market")}
            className="price-gap-pulse mx-auto flex w-full max-w-sm flex-col items-center rounded-3xl border-2 border-emerald-400/60 bg-gradient-to-b from-emerald-50 to-white px-4 py-5 text-center shadow-md shadow-emerald-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            <ShareBoltIcon />
            <span className="mt-2 text-sm font-bold text-emerald-800">
              Wattlokal Marktplatz
            </span>
            <span className="mt-1 text-xs text-emerald-700/80">
              Die faire Brücke vor Ort
            </span>
          </button>
        </div>
      </div>

      {modal ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          role="presentation"
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/45 backdrop-blur-sm transition-opacity duration-300"
            aria-label="Dialog schließen"
            onClick={() => setActive(null)}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descId}
            tabIndex={-1}
            className="relative z-[1] w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl outline-none animate-[price-gap-modal-in_280ms_ease-out]"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 rounded-lg p-2 text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-800"
              aria-label="Schließen"
            >
              <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M6 6l12 12M18 6 6 18"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <h3
              id={titleId}
              className="pr-10 font-[family-name:var(--font-display)] text-2xl font-semibold text-slate-900"
            >
              {modal.title}
            </h3>
            <p id={descId} className="mt-3 text-base leading-relaxed text-slate-600">
              {modal.body}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setActive(null)}
                className="rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-emerald-700"
              >
                Verstanden
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
