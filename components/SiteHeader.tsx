"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";

const NAV_ITEMS = [
  { label: "Über uns", href: "/#was-ist-wattlokal" },
  { label: "§ 42c EnWG", href: "/42c-enwg" },
] as const;

const CTA = {
  label: "Interesse bekunden",
  href: "/anmelden",
} as const;

/** Mid orange from logo.svg house gradient */
const LOGO_ORANGE = "#f97316";


function MenuIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileTitleId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  // Home hero: transparent bar → white text. After scroll (or subpages): white bar → black text.
  const solid = isHome ? scrolled || mobileOpen : true;
  const ink = solid ? "#000000" : "#ffffff";

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out ${
          solid
            ? "border-b border-gray-100/50 bg-white/80 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
        style={{ color: ink }}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 lg:gap-2.5 transition-opacity duration-300 hover:opacity-90"
            style={{ color: ink }}
          >
            <Image
              src="/logo.svg"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 lg:h-11 lg:w-11"
              unoptimized
              priority
            />
            <span
              className="font-[family-name:var(--font-hero)] text-lg lg:text-xl font-semibold tracking-tight transition-colors duration-300"
              style={{ color: ink }}
            >
              wattlokal
            </span>
          </Link>

          <nav
            aria-label="Hauptnavigation"
            className="hidden lg:flex lg:items-center"
          >
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-lg px-3.5 py-2.5 text-base font-medium transition-all duration-300 ease-in-out ${
                      solid ? "hover:bg-orange-50" : "hover:bg-white/10"
                    }`}
                    style={{ color: ink }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={CTA.href}
              className={`hidden sm:inline-flex items-center justify-center rounded-lg border-2 bg-transparent px-4 py-2.5 text-sm font-semibold transition-all duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 lg:px-5 lg:py-3 lg:text-base ${
                solid ? "hover:bg-orange-50" : "hover:bg-white/10"
              }`}
              style={{
                color: ink,
                borderColor: LOGO_ORANGE,
                outlineColor: LOGO_ORANGE,
              }}
            >
              {CTA.label}
            </Link>

            <button
              type="button"
              className={`inline-flex items-center justify-center rounded-lg p-2 transition-all duration-300 ease-in-out lg:hidden ${
                solid ? "hover:bg-slate-100" : "hover:bg-white/10"
              }`}
              style={{ color: ink }}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-panel"
              onClick={() => setMobileOpen(true)}
            >
              <span className="sr-only">Menü öffnen</span>
              <MenuIcon />
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ease-in-out ${
            mobileOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          aria-hidden={!mobileOpen}
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"
            aria-label="Menü schließen"
            onClick={() => setMobileOpen(false)}
          />

          <aside
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby={mobileTitleId}
            className={`absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out ${
              mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
              <p
                id={mobileTitleId}
                className="font-[family-name:var(--font-display)] text-base font-semibold text-black"
              >
                Menü
              </p>
              <button
                type="button"
                className="rounded-lg p-2 text-black transition-all duration-200 hover:bg-slate-100"
                onClick={() => setMobileOpen(false)}
              >
                <span className="sr-only">Menü schließen</span>
                <CloseIcon />
              </button>
            </div>

            <nav
              aria-label="Mobile Navigation"
              className="flex-1 overflow-y-auto px-3 py-3"
            >
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-black transition-all duration-200 hover:bg-orange-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="border-t border-slate-200 p-4">
              <Link
                href={CTA.href}
                onClick={() => setMobileOpen(false)}
                className="flex w-full items-center justify-center rounded-lg border-2 bg-transparent px-4 py-3 text-sm font-semibold text-black transition-all duration-200 hover:bg-orange-50"
                style={{ borderColor: LOGO_ORANGE }}
              >
                {CTA.label}
              </Link>
            </div>
          </aside>
        </div>
      </header>

      {!isHome ? <div className="h-16 shrink-0" aria-hidden /> : null}
    </>
  );
}
