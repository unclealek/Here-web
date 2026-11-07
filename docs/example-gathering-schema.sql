-- OPTIONAL REFERENCE ONLY. Do NOT run against an existing Supabase project
-- without first checking its schema, permissions, memberships and RLS.
-- App-only invitations: the website never queries or publishes gathering details.
-- This sketch intentionally does NOT create a public preview RPC.

create table if not exists public.gatherings (
  id uuid primary key default gen_random_uuid(),
  share_id uuid not null unique default gen_random_uuid(),
  creator_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(title) between 3 and 120),
  description text check (char_length(description) <= 1500),
  venue_name text,
  area_label text,
  starts_at timestamptz not null,
  ends_at timestamptz,
  max_attendees integer check (max_attendees between 2 and 100),
  is_shareable boolean not null default false,
  status text not null default 'open' check (status in ('open','full','cancelled')),
  created_at timestamptz not null default now(),
  constraint ends_after_start check (ends_at is null or ends_at > starts_at)
);

create index if not exists gatherings_creator_idx on public.gatherings (creator_id);
-- share_id already has a unique index through its UNIQUE constraint.

alter table public.gatherings enable row level security;

-- Revoke public access to the table. Explicit grants and policies BOTH matter.
revoke all on table public.gatherings from anon, authenticated;
grant select, insert, update, delete on table public.gatherings to authenticated;

-- These policies are HOST-ONLY. They do not yet grant invitee access.
-- For invitee viewing, add a reviewed authenticated, token-scoped access path
-- in the mobile app backend that verifies the caller and the invitation.
create policy "hosts read own gatherings" on public.gatherings
  for select to authenticated using (creator_id = (select auth.uid()));
create policy "hosts create own gatherings" on public.gatherings
  for insert to authenticated with check (creator_id = (select auth.uid()));
create policy "hosts update own gatherings" on public.gatherings
  for update to authenticated using (creator_id = (select auth.uid()))
  with check (creator_id = (select auth.uid()));
create policy "hosts delete own gatherings" on public.gatherings
  for delete to authenticated using (creator_id = (select auth.uid()));

-- Before enabling invitee lookups:
-- 1) Determine whether app login is mandatory to view invitations (recommended).
-- 2) Return only allowable invitation fields to the authenticated invitee.
-- 3) Honor is_shareable, revocation, cancellation, expiry and host blocking.
-- 4) Never expose get_gathering_preview to anon or allow blanket SELECT for all users.
-- 5) Test RLS for creator, invited user, unrelated signed-in user and anon role.
-- 6) Enforce join capacity/eligibility server-side, not just in the UI.
