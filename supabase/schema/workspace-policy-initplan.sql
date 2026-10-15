-- Canonical source for remote `workbench_policy_initplan` migration.
-- Select the JWT once before extracting its email claim.
alter policy owner_membership on public.workspace_owners to authenticated
  using (email = ((select auth.jwt())->>'email'));
do $$
declare table_name text;
begin
  foreach table_name in array array['workspace_projects','workspace_notes','workspace_tasks'] loop
    execute format('alter policy owner_select on public.%I to authenticated using (owner_id = (select auth.uid()) and exists (select 1 from public.workspace_owners where email = ((select auth.jwt())->>''email'')))', table_name);
    execute format('alter policy owner_insert on public.%I to authenticated with check (owner_id = (select auth.uid()) and exists (select 1 from public.workspace_owners where email = ((select auth.jwt())->>''email'')))', table_name);
    execute format('alter policy owner_update on public.%I to authenticated using (owner_id = (select auth.uid()) and exists (select 1 from public.workspace_owners where email = ((select auth.jwt())->>''email''))) with check (owner_id = (select auth.uid()) and exists (select 1 from public.workspace_owners where email = ((select auth.jwt())->>''email'')))', table_name);
    execute format('alter policy owner_delete on public.%I to authenticated using (owner_id = (select auth.uid()) and exists (select 1 from public.workspace_owners where email = ((select auth.jwt())->>''email'')))', table_name);
  end loop;
end;
$$;
