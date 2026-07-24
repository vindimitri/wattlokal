# Wattlokal – Datenfluss

## Übersicht (Architektur)

```mermaid
flowchart TB
  subgraph nutzer [Nutzer]
    B[Browser]
    M[E-Mail-Postfach]
  end

  subgraph vercel [Vercel – Hosting]
    LP["/ Landing"]
    FORM["/anmelden"]
    API["POST /api/register"]
    CONF["/bestaetigen"]
    DANK["/danke"]
  end

  subgraph eu [EU]
    SB[(Supabase PostgreSQL)]
  end

  subgraph mail [E-Mail]
    RES[Resend]
  end

  B --> LP
  LP -->|Button Formular ausfüllen| FORM
  FORM -->|Absenden| API
  API -->|Insert status=pending| SB
  API -->|Bestätigungsmail| RES
  RES --> M
  API --> DANK
  M -->|Link klicken| CONF
  CONF -->|Update status=confirmed| SB
```

## Anmeldung im Detail

```mermaid
sequenceDiagram
  participant U as Nutzer
  participant W as Website Vercel
  participant API as /api/register
  participant DB as Supabase
  participant R as Resend
  participant Mail as Postfach

  U->>W: Formular ausfüllen
  U->>API: Absenden
  API->>API: Validierung + Rate Limit
  API->>DB: Speichern status = pending<br/>+ Token-Hash
  API->>R: Bestätigungsmail senden
  R->>Mail: Mail mit Link
  API->>W: Redirect /danke
  U->>Mail: Link öffnen
  U->>W: /bestaetigen?token=…
  W->>DB: Token prüfen
  W->>DB: status = confirmed<br/>confirmed_at setzen
  W->>U: Danke – du bist dabei
```

## Status in der Datenbank

```mermaid
stateDiagram-v2
  [*] --> pending: Formular abgesendet
  pending --> confirmed: E-Mail-Link geklickt
  pending --> pending: Erneut absenden<br/>(Daten + neuer Token)
  note right of confirmed
    Nur confirmed zählt
    für die Studie
    View: registrations_confirmed
  end note
```

## Kurz in Worten

1. Nutzer öffnet `https://www.wattlokal.de`
2. Klickt auf Formular, füllt Daten aus
3. Server speichert Eintrag als **pending** in Supabase
4. Resend schickt Bestätigungsmail an die angegebene Adresse
5. Nutzer klickt Link → Eintrag wird **confirmed**
6. Erst dann gilt die Anmeldung für die Machbarkeitsstudie

## Beteiligte Dienste

| Dienst | Rolle |
|--------|--------|
| Vercel | Website + API hosten |
| Supabase | Daten speichern (EU) |
| Resend | Bestätigungsmails von `@wattlokal.de` |
| IONOS | Domain `wattlokal.de` (Nameserver → Vercel) |
