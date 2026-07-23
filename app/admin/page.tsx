import { AdminLoginForm } from "./AdminLoginForm";
import { AdminToolbar } from "./AdminToolbar";
import {
  getAdminSecret,
  isAdminAuthenticated,
  type ConfirmedRegistration,
} from "@/lib/admin";
import { getSupabaseAdmin } from "@/lib/supabase";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Admin – Wattlokal",
  robots: { index: false, follow: false },
};

function formatDate(value: string | null): string {
  if (!value) return "—";
  try {
    return new Intl.DateTimeFormat("de-DE", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

export default async function AdminPage() {
  const configured = Boolean(getAdminSecret());
  const authed = configured && (await isAdminAuthenticated());

  if (!configured) {
    return (
      <div className="site-shell py-12 max-w-2xl">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-brand-deep">
          Admin
        </h1>
        <p className="mt-4 text-ink-muted">
          Bitte <code className="text-ink">ADMIN_SECRET</code> in den
          Umgebungsvariablen setzen (mindestens 12 Zeichen) und neu deployen.
        </p>
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="site-shell py-12 max-w-2xl">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-brand-deep">
          Admin
        </h1>
        <p className="mt-3 text-ink-muted mb-8">
          Nur für die Projektkoordination. Nicht öffentlich teilen.
        </p>
        <AdminLoginForm />
      </div>
    );
  }

  let rows: ConfirmedRegistration[] = [];
  let loadError: string | null = null;

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("registrations")
      .select(
        "id, created_at, confirmed_at, name, email, plz, ort, rolle, pv_kwp, verbrauch_kwh, smart_meter",
      )
      .eq("status", "confirmed")
      .order("confirmed_at", { ascending: false });

    if (error) {
      console.error(error);
      loadError = "Daten konnten nicht geladen werden.";
    } else {
      rows = (data ?? []) as ConfirmedRegistration[];
    }
  } catch (err) {
    console.error(err);
    loadError = "Datenbankverbindung fehlgeschlagen.";
  }

  return (
    <div className="site-shell py-10 sm:py-12">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-brand-deep">
        Anmeldungen
      </h1>
      <p className="mt-2 text-ink-muted mb-6">
        Nur bestätigte Einträge (Double-Opt-in).
      </p>

      <AdminToolbar count={rows.length} />

      {loadError && <p className="error-text mt-6">{loadError}</p>}

      {!loadError && rows.length === 0 && (
        <p className="mt-8 text-ink-muted">Noch keine bestätigten Anmeldungen.</p>
      )}

      {rows.length > 0 && (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white/60">
          <table className="min-w-full text-sm text-left">
            <thead className="border-b border-line text-ink-muted">
              <tr>
                <th className="px-3 py-3 font-semibold">Bestätigt</th>
                <th className="px-3 py-3 font-semibold">Name</th>
                <th className="px-3 py-3 font-semibold">E-Mail</th>
                <th className="px-3 py-3 font-semibold">Ort</th>
                <th className="px-3 py-3 font-semibold">Rolle</th>
                <th className="px-3 py-3 font-semibold">PV kWp</th>
                <th className="px-3 py-3 font-semibold">kWh/Jahr</th>
                <th className="px-3 py-3 font-semibold">Smart-Meter</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-line/70 align-top">
                  <td className="px-3 py-3 whitespace-nowrap">
                    {formatDate(row.confirmed_at)}
                  </td>
                  <td className="px-3 py-3">{row.name}</td>
                  <td className="px-3 py-3">{row.email}</td>
                  <td className="px-3 py-3 whitespace-nowrap">
                    {row.plz} {row.ort}
                  </td>
                  <td className="px-3 py-3">{row.rolle}</td>
                  <td className="px-3 py-3">{row.pv_kwp ?? "—"}</td>
                  <td className="px-3 py-3">{row.verbrauch_kwh ?? "—"}</td>
                  <td className="px-3 py-3">{row.smart_meter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
