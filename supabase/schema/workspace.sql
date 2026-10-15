-- Canonical source for the remote `workbench_foundation` migration.
-- Owner membership is managed by an administrator, never by the browser.
create table public.workspace_owners (
  email text primary key check (email = lower(email))
);
alter table public.workspace_owners enable row level security;
revoke all on public.workspace_owners from anon, authenticated;
grant select on public.workspace_owners to authenticated;
create policy owner_membership on public.workspace_owners for select to authenticated
  using (email = ((select auth.jwt())->>'email'));

create table public.workspace_projects (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  title text not null check (char_length(btrim(title)) between 1 and 160),
  description text not null default '' check (char_length(description) <= 10000),
  status text not null default 'active' check (status in ('active','paused','complete')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (id, owner_id)
);
create index workspace_projects_owner_idx on public.workspace_projects(owner_id);
create table public.workspace_notes (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  project_id uuid not null,
  title text not null check (char_length(btrim(title)) between 1 and 160),
  body text not null default '' check (char_length(body) <= 50000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  foreign key (project_id, owner_id) references public.workspace_projects(id, owner_id) on delete cascade
);
create index workspace_notes_owner_idx on public.workspace_notes(owner_id);
create index workspace_notes_project_idx on public.workspace_notes(project_id, owner_id);
create table public.workspace_tasks (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  project_id uuid not null,
  title text not null check (char_length(btrim(title)) between 1 and 160),
  description text not null default '' check (char_length(description) <= 10000),
  status text not null default 'todo' check (status in ('todo','doing','done')),
  due_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  foreign key (project_id, owner_id) references public.workspace_projects(id, owner_id) on delete cascade
);
create index workspace_tasks_owner_idx on public.workspace_tasks(owner_id);
create index workspace_tasks_project_idx on public.workspace_tasks(project_id, owner_id);

create function public.workspace_set_updated_at() returns trigger
language plpgsql security invoker set search_path = '' as $$
begin
  new.updated_at = now();
  return new;
end;
$$;
revoke execute on function public.workspace_set_updated_at() from public, anon, authenticated;

do $$
declare table_name text;
begin
  foreach table_name in array array['workspace_projects','workspace_notes','workspace_tasks'] loop
    execute format('alter table public.%I enable row level security', table_name);
    execute format('revoke all on public.%I from anon, authenticated', table_name);
    execute format('grant select, insert, update, delete on public.%I to authenticated', table_name);
    execute format('create policy owner_select on public.%I for select to authenticated using (owner_id = (select auth.uid()) and exists (select 1 from public.workspace_owners where email = ((select auth.jwt())->>''email'')))', table_name);
    execute format('create policy owner_insert on public.%I for insert to authenticated with check (owner_id = (select auth.uid()) and exists (select 1 from public.workspace_owners where email = ((select auth.jwt())->>''email'')))', table_name);
    execute format('create policy owner_update on public.%I for update to authenticated using (owner_id = (select auth.uid()) and exists (select 1 from public.workspace_owners where email = ((select auth.jwt())->>''email''))) with check (owner_id = (select auth.uid()) and exists (select 1 from public.workspace_owners where email = ((select auth.jwt())->>''email'')))', table_name);
    execute format('create policy owner_delete on public.%I for delete to authenticated using (owner_id = (select auth.uid()) and exists (select 1 from public.workspace_owners where email = ((select auth.jwt())->>''email'')))', table_name);
    execute format('create trigger set_updated_at before update on public.%I for each row execute function public.workspace_set_updated_at()', table_name);
  end loop;
end;
$$;

