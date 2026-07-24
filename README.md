# Wattlokal

Lokale Energiegemeinschaft – Landingpage + Anmeldeformular mit Double-Opt-in.

## Flow

1. Nutzer füllt Formular unter `/anmelden` aus  
2. Eintrag wird als `pending` gespeichert  
3. Bestätigungsmail mit Link  
4. Klick auf `/bestaetigen?token=…` setzt Status auf `confirmed`  
5. Nur `confirmed`-Einträge zählen für die Studie (`registrations_confirmed`)

## Setup

### 1. Abhängigkeiten

```bash
npm install
```

### 2. Supabase

1. Projekt in Region **Frankfurt** anlegen  
2. SQL aus `supabase/schema.sql` im SQL Editor ausführen  
3. URL + **service_role** Key kopieren  

### 3. Umgebungsvariablen

```bash
cp .env.example .env.local
```

Werte eintragen. Für lokalen Test ohne Resend: `RESEND_API_KEY` leer lassen – der Bestätigungslink erscheint in der Terminal-Ausgabe von `npm run dev`.

### 4. Starten

```bash
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000).

### Admin

1. `ADMIN_SECRET` in `.env.local` / Vercel setzen (mind. 12 Zeichen)
2. `/admin` öffnen und Passwort eingeben
3. Bestätigte Anmeldungen sehen + CSV herunterladen

Nicht öffentlich verlinken.

### Pending-Cleanup

Täglich (03:00 UTC) löscht Vercel Cron unbestätigte Anmeldungen:
- Token abgelaufen, oder
- älter als 7 Tage

Env: `CRON_SECRET` (Vercel setzt `Authorization: Bearer …` beim Cron-Aufruf).

Manuell testen:
```bash
curl -H "Authorization: Bearer DEIN_CRON_SECRET" https://www.wattlokal.de/api/cron/cleanup-pending
```

## Deploy (Vercel)

1. Repo mit Vercel verbinden  
2. Dieselben Env-Vars setzen (`NEXT_PUBLIC_APP_URL` = Produktions-URL)  
3. Deploy  

## Sicherheit (MVP)

- HTTPS über Vercel  
- Service Role Key nur serverseitig  
- RLS ohne Public-Policies  
- Token gehasht in der DB, 48h gültig  
- Rate Limit auf `/api/register`  
- Ein E-Mail = ein Datensatz (erneutes Absenden aktualisiert nur `pending`)
