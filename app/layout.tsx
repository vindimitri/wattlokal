import type { Metadata } from "next";
import { Outfit, Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { HeroRevealProvider } from "@/components/HeroRevealContext";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import "./globals.css";

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
});

const heroFont = Outfit({
  variable: "--font-hero",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wattlokal – Strom teilen in der Gemeinde",
  description:
    "Wir bündeln Erzeuger und Verbraucher vor Ort. Melde dich an für die Machbarkeitsstudie.",
  icons: {
    icon: [{ url: "/logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable} ${heroFont.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <HeroRevealProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </HeroRevealProvider>
      </body>
    </html>
  );
}
