-- Wattlokal registrations (run in Supabase SQL Editor)
-- Region: preferably Frankfurt (eu-central-1)

create extension if not exists pgcrypto;

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  confirmed_at timestamptz,
  status text not null default 'pending'
    check (status in ('pending', 'confirmed')),
  name text not null,
  email text not null,
  plz text not null,
  ort text not null,
  rolle text not null
    check (rolle in ('erzeuger', 'verbraucher', 'beides')),
  pv_kwp numeric,
  verbrauch_kwh integer,
  smart_meter text not null
    check (smart_meter in ('ja', 'nein', 'unsicher')),
  consent_dsgvo boolean not null,
  consent_studie boolean not null,
  confirm_token_hash text,
  confirm_token_expires_at timestamptz
);

create unique index if not exists registrations_email_unique
  on public.registrations (lower(email));

create index if not exists registrations_status_idx
  on public.registrations (status);

create index if not exists registrations_token_idx
  on public.registrations (confirm_token_hash);

alter table public.registrations enable row level security;

-- No public policies: anon/authenticated cannot read or write.
-- Only the service role key (server-side) can access this table.

-- Helpful view for the study: only confirmed rows
create or replace view public.registrations_confirmed as
select
  id,
  created_at,
  confirmed_at,
  name,
  email,
  plz,
  ort,
  rolle,
  pv_kwp,
  verbrauch_kwh,
  smart_meter
from public.registrations
where status = 'confirmed';
