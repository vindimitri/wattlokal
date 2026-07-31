import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-nav sticky top-0 z-50">
      <div className="site-shell py-3.5 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-semibold tracking-tight text-white shrink-0"
        >
          Wattlokal
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 sm:gap-x-6 text-sm sm:text-[0.95rem] text-white/90">
          <Link href="/#was-ist-wattlokal" className="hover:text-white">
            Konzept
          </Link>
          <Link href="/42c-enwg" className="hover:text-white">
            §&nbsp;42c&nbsp;EnWG
          </Link>
          <Link href="/anmelden" className="hover:text-white">
            Mitmachen
          </Link>
          <Link href="/impressum" className="hover:text-white">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-white">
            Datenschutz
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-shell py-10 text-sm text-ink-muted border-t border-line mt-auto">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>Wattlokal – lokale Energiegemeinschaft</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/42c-enwg" className="hover:text-ink">
            § 42c EnWG
          </Link>
          <Link href="/impressum" className="hover:text-ink">
            Impressum
          </Link>
          <Link href="/datenschutz" className="hover:text-ink">
            Datenschutz
          </Link>
        </div>
      </div>
    </footer>
  );
}
