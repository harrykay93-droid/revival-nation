create extension if not exists pgcrypto;

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  "fullName" text not null,
  email text not null,
  phone text not null,
  gender text not null,
  "ageRange" text not null,
  church text,
  address text not null,
  occupation text not null,
  source text,
  "prayerRequest" text not null,
  "followUp" text not null default 'yes',
  "checked_in" boolean not null default false,
  "confirmation_sent" boolean not null default false,
  "created_at" timestamptz not null default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  "created_at" timestamptz not null default now()
);

alter table public.registrations enable row level security;
alter table public.contact_messages enable row level security;

create policy "Allow anon insert registrations" on public.registrations
  for insert with check (true);

create policy "Allow anon select registrations" on public.registrations
  for select using (true);

create policy "Allow anon update registrations" on public.registrations
  for update using (true) with check (true);

create policy "Allow anon insert contact messages" on public.contact_messages
  for insert with check (true);

create policy "Allow anon select contact messages" on public.contact_messages
  for select using (true);
