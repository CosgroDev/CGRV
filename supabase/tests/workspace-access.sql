-- Run as database administrator. All fixtures and changes are rolled back.
begin;
insert into auth.users(id,email) values
 ('a18adf9e-a3e1-41e8-a261-d225fdfac201','workbench-owner-test@example.invalid'),
 ('a18adf9e-a3e1-41e8-a261-d225fdfac202','workbench-outsider-test@example.invalid');
insert into public.workspace_owners(email) values ('workbench-owner-test@example.invalid');

set local role authenticated;
select set_config('request.jwt.claims','{"sub":"a18adf9e-a3e1-41e8-a261-d225fdfac201","email":"workbench-owner-test@example.invalid","role":"authenticated"}',true);
insert into public.workspace_projects(id,owner_id,title) values ('a18adf9e-a3e1-41e8-a261-d225fdfac203','a18adf9e-a3e1-41e8-a261-d225fdfac201','RLS test project');
insert into public.workspace_notes(project_id,owner_id,title,body) values ('a18adf9e-a3e1-41e8-a261-d225fdfac203','a18adf9e-a3e1-41e8-a261-d225fdfac201','Test note','A connected note');
insert into public.workspace_tasks(project_id,owner_id,title) values ('a18adf9e-a3e1-41e8-a261-d225fdfac203','a18adf9e-a3e1-41e8-a261-d225fdfac201','Test task');
update public.workspace_tasks set status='doing' where project_id='a18adf9e-a3e1-41e8-a261-d225fdfac203';
do $$ begin
 if (select count(*) from public.workspace_projects) <> 1 then raise exception 'Owner cannot read own project'; end if;
 if (select count(*) from public.workspace_notes) <> 1 then raise exception 'Owner cannot read own note'; end if;
 if (select count(*) from public.workspace_tasks where status='doing') <> 1 then raise exception 'Task status did not persist'; end if;
 begin
   update public.workspace_projects set owner_id='a18adf9e-a3e1-41e8-a261-d225fdfac202';
   raise exception 'Ownership reassignment was permitted';
 exception when insufficient_privilege then null;
 end;
 begin
   insert into public.workspace_notes(project_id,owner_id,title) values ('a18adf9e-a3e1-41e8-a261-d225fdfac203','a18adf9e-a3e1-41e8-a261-d225fdfac202','Invalid ownership');
   raise exception 'Cross-owner note was permitted';
 exception when insufficient_privilege then null;
 end;
end $$;

select set_config('request.jwt.claims','{"sub":"a18adf9e-a3e1-41e8-a261-d225fdfac202","email":"workbench-outsider-test@example.invalid","role":"authenticated"}',true);
do $$ declare affected integer; begin
 if exists(select 1 from public.workspace_projects) or exists(select 1 from public.workspace_notes) or exists(select 1 from public.workspace_tasks) then raise exception 'Outsider can read private data'; end if;
 begin
   insert into public.workspace_projects(owner_id,title) values ('a18adf9e-a3e1-41e8-a261-d225fdfac202','Outsider project');
   raise exception 'Outsider can create projects';
 exception when insufficient_privilege then null;
 end;
 begin
   insert into public.workspace_owners(email) values ('workbench-outsider-test@example.invalid');
   raise exception 'Outsider can grant owner access';
 exception when insufficient_privilege then null;
 end;
 update public.workspace_tasks set status='done';
 get diagnostics affected = row_count;
 if affected <> 0 then raise exception 'Outsider can update tasks'; end if;
 delete from public.workspace_projects;
 get diagnostics affected = row_count;
 if affected <> 0 then raise exception 'Outsider can delete projects'; end if;
end $$;

reset role;
-- Even an approved second identity cannot attach children to another owner's project.
insert into public.workspace_owners(email) values ('workbench-outsider-test@example.invalid');
set local role authenticated;
do $$ begin
 begin
   insert into public.workspace_notes(project_id,owner_id,title) values ('a18adf9e-a3e1-41e8-a261-d225fdfac203','a18adf9e-a3e1-41e8-a261-d225fdfac202','Wrong project');
   raise exception 'Cross-owner project association was permitted';
 exception when foreign_key_violation then null;
 end;
end $$;

select set_config('request.jwt.claims','{"sub":"a18adf9e-a3e1-41e8-a261-d225fdfac201","email":"workbench-owner-test@example.invalid","role":"authenticated"}',true);
delete from public.workspace_projects where id='a18adf9e-a3e1-41e8-a261-d225fdfac203';
do $$ begin
 if exists(select 1 from public.workspace_notes) or exists(select 1 from public.workspace_tasks) then raise exception 'Project children did not cascade'; end if;
end $$;

set local role anon;
select set_config('request.jwt.claims','{}',true);
do $$ begin
 begin
   perform * from public.workspace_projects;
   raise exception 'Anonymous role can read projects';
 exception when insufficient_privilege then null;
 end;
end $$;
reset role;
rollback;
select 'PASS: owner CRUD, task persistence, outsider isolation, membership protection, ownership reassignment, cross-owner relations, cascade deletion, anonymous denial; all fixtures rolled back' as result;
