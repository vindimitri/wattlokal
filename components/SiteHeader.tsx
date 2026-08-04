"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

type NavLink = { label: string; href: string };
type NavItem =
  | { type: "link"; label: string; href: string }
  | {
      type: "dropdown";
      id: string;
      label: string;
      items: Array<NavLink & { indent?: boolean }>;
    };

const NAV_ITEMS: NavItem[] = [
  {
    type: "dropdown",
    id: "loesungen",
    label: "Lösungen",
    items: [
      {
        label: "Für Organisationen",
        href: "/stromcommunitys/organisationen",
      },
      {
        label: "Für Privathaushalte",
        href: "/stromcommunitys/privathaushalte",
      },
      {
        label: "Für Energiemakler und Partner",
        href: "/loesungen/makler-und-partner",
      },
    ],
  },
  {
    type: "dropdown",
    id: "energiewelten",
    label: "Energiewelten",
    items: [
      { label: "Stromcommunitys", href: "/stromcommunitys" },
      {
        label: "Offene Stromcommunity",
        href: "/stromcommunitys/offene-stromcommunity",
        indent: true,
      },
      {
        label: "Eigene Stromcommunity",
        href: "/stromcommunitys/eigene-stromcommunity",
        indent: true,
      },
      { label: "Ökostrom", href: "/oekostrom" },
    ],
  },
  { type: "link", label: "§ 42c EnWG", href: "/42c-enwg" },
  { type: "link", label: "Über uns", href: "/ueber-uns" },
  {
    type: "dropdown",
    id: "wissen",
    label: "Wissen",
    items: [
      { label: "Blog", href: "/wissen/blog" },
      { label: "FAQ", href: "/faq" },
    ],
  },
];

const CTA = {
  label: "Mitglied werden",
  href: "/stromcommunitys/neukunde",
} as const;

function ChevronIcon({ open }: { open?: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 shrink-0 transition-transform duration-200 ease-in-out ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5 7.5 10 12.5 15 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.75"
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
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const mobileTitleId = useId();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setDesktopOpen(null);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDesktopOpen(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  function closeMobile() {
    setMobileOpen(false);
    setMobileAccordion(null);
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b transition-all duration-200 ease-in-out ${
        scrolled
          ? "border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0 transition-opacity duration-200 ease-in-out hover:opacity-90"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="" width={36} height={36} className="h-9 w-9" />
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-slate-900">
            Wattlokal
          </span>
        </Link>

        <nav
          aria-label="Hauptnavigation"
          className="hidden lg:flex lg:items-center lg:gap-1"
        >
          <ul className="flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              if (item.type === "link") {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="rounded-lg px-3 py-2 text-sm font-medium text-slate-800 transition-all duration-200 ease-in-out hover:bg-slate-100 hover:text-emerald-700"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const open = desktopOpen === item.id;
              return (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setDesktopOpen(item.id)}
                  onMouseLeave={() => setDesktopOpen(null)}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() =>
                      setDesktopOpen((current) =>
                        current === item.id ? null : item.id,
                      )
                    }
                    className={`inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out ${
                      open
                        ? "bg-slate-100 text-emerald-700"
                        : "text-slate-800 hover:bg-slate-100 hover:text-emerald-700"
                    }`}
                  >
                    {item.label}
                    <ChevronIcon open={open} />
                  </button>

                  <div
                    className={`absolute left-0 top-full z-50 pt-2 transition-all duration-200 ease-in-out ${
                      open
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0 pointer-events-none"
                    }`}
                  >
                    <ul
                      role="menu"
                      className="min-w-[17.5rem] rounded-xl border border-slate-200 bg-white p-2 shadow-lg shadow-slate-900/8"
                    >
                      {item.items.map((sub) => (
                        <li key={sub.href} role="none">
                          <Link
                            role="menuitem"
                            href={sub.href}
                            onClick={() => setDesktopOpen(null)}
                            className={`block rounded-lg px-3 py-2.5 text-sm transition-all duration-200 ease-in-out hover:bg-emerald-50 hover:text-emerald-800 ${
                              sub.indent
                                ? "pl-6 text-slate-600"
                                : "font-medium text-slate-800"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={CTA.href}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 ease-in-out hover:bg-emerald-700 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            {CTA.label}
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-800 transition-all duration-200 ease-in-out hover:bg-slate-100 lg:hidden"
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
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-200 ease-in-out ${
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
          onClick={closeMobile}
        />

        <aside
          id="mobile-nav-panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={mobileTitleId}
          className={`absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col bg-white shadow-2xl transition-transform duration-200 ease-in-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
            <p
              id={mobileTitleId}
              className="font-[family-name:var(--font-display)] text-base font-semibold text-slate-900"
            >
              Menü
            </p>
            <button
              type="button"
              className="rounded-lg p-2 text-slate-800 transition-all duration-200 ease-in-out hover:bg-slate-100"
              onClick={closeMobile}
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
              {NAV_ITEMS.map((item) => {
                if (item.type === "link") {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className="block rounded-lg px-3 py-3 text-base font-medium text-slate-800 transition-all duration-200 ease-in-out hover:bg-slate-100"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                const open = mobileAccordion === item.id;
                return (
                  <li key={item.id} className="rounded-lg">
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() =>
                        setMobileAccordion((current) =>
                          current === item.id ? null : item.id,
                        )
                      }
                      className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-base font-medium text-slate-800 transition-all duration-200 ease-in-out hover:bg-slate-100"
                    >
                      {item.label}
                      <ChevronIcon open={open} />
                    </button>
                    <ul
                      className={`overflow-hidden transition-all duration-200 ease-in-out ${
                        open ? "max-h-96 pb-2 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.items.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={closeMobile}
                            className={`block rounded-lg py-2.5 pr-3 text-sm transition-all duration-200 ease-in-out hover:bg-emerald-50 hover:text-emerald-800 ${
                              sub.indent
                                ? "pl-8 text-slate-600"
                                : "pl-5 font-medium text-slate-700"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="border-t border-slate-200 p-4">
            <Link
              href={CTA.href}
              onClick={closeMobile}
              className="flex w-full items-center justify-center rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 ease-in-out hover:bg-emerald-700"
            >
              {CTA.label}
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
