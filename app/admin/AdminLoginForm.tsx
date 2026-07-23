"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export function AdminLoginForm() {
  const router = useRouter();
  const [secret, setSecret] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    setPending(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret }),
      });
      const json = (await res.json()) as { error?: string };

      if (!res.ok) {
        setError(json.error ?? "Login fehlgeschlagen.");
        setPending(false);
        return;
      }

      router.refresh();
    } catch {
      setError("Netzwerkfehler.");
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md space-y-4">
      <div className="field">
        <label htmlFor="admin-secret">Admin-Passwort</label>
        <input
          id="admin-secret"
          type="password"
          autoComplete="current-password"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
          required
          minLength={12}
        />
        <p className="hint">Das ist der Wert von ADMIN_SECRET aus Vercel.</p>
      </div>
      {error && <p className="error-text">{error}</p>}
      <button type="submit" className="btn" disabled={pending}>
        {pending ? "Prüfen…" : "Anmelden"}
      </button>
    </form>
  );
}
