"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <header
      className={
        onHome
          ? "absolute inset-x-0 top-0 z-20"
          : "relative border-b border-line bg-[color:var(--bg)]"
      }
    >
      <div className="site-shell py-5 flex items-center justify-between">
        <Link
          href="/"
          className={`font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight ${
            onHome ? "text-[color:var(--bg)]" : "text-ink"
          }`}
        >
          Wattlokal
        </Link>
        <nav
          className={`flex items-center gap-5 text-sm ${
            onHome ? "text-[color:var(--bg)]/80" : "text-ink-muted"
          }`}
        >
          <Link
            href="/anmelden"
            className={onHome ? "hover:text-[color:var(--bg)]" : "hover:text-ink"}
          >
            Mitmachen
          </Link>
          <Link
            href="/impressum"
            className={onHome ? "hover:text-[color:var(--bg)]" : "hover:text-ink"}
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className={onHome ? "hover:text-[color:var(--bg)]" : "hover:text-ink"}
          >
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
