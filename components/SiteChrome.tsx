import Link from "next/link";

export { SiteHeader } from "@/components/SiteHeader";

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
