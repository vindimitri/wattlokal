import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(20,61,40,0.78), rgba(31,92,58,0.45)), url('https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="site-shell min-h-[78vh] flex flex-col justify-end pb-16 pt-24 text-[#f4f7f2]">
        <p className="rise font-[family-name:var(--font-display)] text-5xl sm:text-7xl font-semibold tracking-tight max-w-3xl">
          Wattlokal
        </p>
        <h1 className="rise rise-delay mt-4 text-2xl sm:text-3xl font-medium max-w-2xl leading-snug">
          Wir teilen unseren Strom in unserer Gemeinde.
        </h1>
        <p className="rise rise-delay-2 mt-4 max-w-xl text-base sm:text-lg text-[#e5efe8]">
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
