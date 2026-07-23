import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wattlokal – Strom teilen in der Gemeinde",
  description:
    "Wir bündeln Erzeuger und Verbraucher vor Ort. Melde dich an für die Machbarkeitsstudie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <header className="site-shell py-5 flex items-center justify-between">
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-brand-deep"
          >
            Wattlokal
          </Link>
          <nav className="flex items-center gap-4 text-sm text-ink-muted">
            <Link href="/anmelden" className="hover:text-ink">
              Mitmachen
            </Link>
            <Link href="/datenschutz" className="hover:text-ink">
              Datenschutz
            </Link>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="site-shell py-10 text-sm text-ink-muted border-t border-line mt-16">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>Wattlokal – lokale Energiegemeinschaft</p>
            <Link href="/datenschutz" className="hover:text-ink">
              Datenschutzerklärung
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
