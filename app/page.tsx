import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 85% 15%, rgba(255,234,0,0.22), transparent 55%), radial-gradient(ellipse 55% 45% at 10% 80%, rgba(11,95,255,0.28), transparent 50%), linear-gradient(155deg, #0B132B 0%, #121a33 45%, #1E293B 100%)",
        }}
      />
      <div className="site-shell min-h-[78vh] flex flex-col justify-end pb-16 pt-24 text-[#F8FAFC]">
        <p className="rise font-[family-name:var(--font-display)] text-5xl sm:text-7xl font-semibold tracking-tight max-w-3xl">
          Wattlokal
        </p>
        <h1 className="rise rise-delay mt-4 text-2xl sm:text-3xl font-medium max-w-2xl leading-snug text-[#F8FAFC]">
          Wir teilen unseren Strom in unserer Gemeinde.
        </h1>
        <p className="rise rise-delay-2 mt-4 max-w-xl text-base sm:text-lg text-slate-300">
          Erzeuger und Verbraucher finden sich vor Ort. Trag dich ein – wir
          prüfen gemeinsam, ob ein lokaler Stromkreis machbar ist.
        </p>
        <div className="rise rise-delay-2 mt-8">
          <Link href="/anmelden" className="btn">
            Formular ausfüllen
          </Link>
        </div>
      </div>
    </section>
  );
}
