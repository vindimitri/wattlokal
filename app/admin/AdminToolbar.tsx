"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminToolbar({ count }: { count: number }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function logout() {
    setPending(true);
    await fetch("/api/admin/login", { method: "DELETE" });
    router.refresh();
  }

  return (
    <div className="flex flex-wrap items-center gap-3 justify-between">
      <p className="text-ink-muted">
        {count} bestätigte Anmeldung{count === 1 ? "" : "en"}
      </p>
      <div className="flex flex-wrap gap-3">
        <a href="/api/admin/export" className="btn">
          CSV herunterladen
        </a>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={logout}
          disabled={pending}
        >
          Abmelden
        </button>
      </div>
    </div>
  );
}
