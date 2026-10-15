# Workbench: private CGRV workspace

Workbench is the owner-only entry to the personal platform at `/workspace`.
The public website remains at `/`. Private routes use separate navigation and
omit Google Analytics. The public Workspace link performs a full navigation so
public analytics scripts do not carry over into the private area.

## Features

- Dashboard with project, open-task and note counts.
- Create, edit and delete projects; mark them active, paused or complete.
- Create, edit and delete plain-text notes attached to projects.
- Create, edit and delete tasks with descriptions, due dates and three statuses.
- Per-project boards and a combined task board with a project filter.
- Shared database records: saving invalidates all workspace views immediately.
- Visible tabs also refresh every 30 seconds and on return. This is periodic
  synchronization, not WebSocket realtime or collaborative editing. Concurrent
  edits to the same record use last-write-wins semantics.
- Explicit confirmation before deletion. Deleting a project also deletes its
  notes and tasks; deletion cannot be undone in the application.

## Local setup and owner activation

1. Run `npm ci`.
2. Copy `.env.example` to `.env.local` and fill in the project URL, publishable
   key, approved owner email and `SITE_URL=http://localhost:3000`.
   Never put a secret or service-role key in a NEXT_PUBLIC variable.
3. The dedicated CGRV project already has the `workbench_foundation` migration.
   Its canonical source is `supabase/schema/workspace.sql`. Do not rerun the
   schema on the configured project. For another project, create a migration
   with the Supabase CLI and use that SQL as its body.
4. An administrator must add the approved lowercase email to
   `public.workspace_owners`. CGRV's initial owner has already been added.
   Browsers cannot add, edit or remove membership.
5. In Supabase Authentication > URL Configuration, allow
   `http://localhost:3000/auth/callback`. For production, set the production
   Site URL and add its exact `/auth/callback` URL too.
6. Run `npm run dev`, open `/workspace` and expand **First visit? Activate your
   owner account**. Enter the approved email and a password of at least 12
   characters, then choose **Activate owner account**. Confirm the email from
   Supabase and sign in. Never share your password in chat.
7. After activation, disable new user sign-ups in Supabase Authentication.
   Existing owner sign-in continues working. Until then, outsiders still cannot
   access workspace records because membership is independent of sign-in.

Activation accepts only the server-configured owner email. Membership uses the
verified email claim plus per-record user ID ownership. Keep the database
allowlist and WORKSPACE_OWNER_EMAIL aligned when changing the owner's email.

## Deployment

Set the four variables from `.env.example` in the hosting environment, using
the production origin for SITE_URL. Redeploy when changing NEXT_PUBLIC variables
because they are included at build time. Hosting has not been changed by this
implementation.

## Security and shared architecture

- Cookie-based SSR sessions through @supabase/ssr. proxy.ts refreshes verified
  claims and applies private/no-store headers to workspace and auth routes.
- Each private data loader and each mutation independently verifies the current
  user through Supabase Auth and checks administrator-managed membership.
- Every table has RLS. Anonymous roles have no grants. Authenticated users need
  both approved membership and matching owner_id for reads and writes.
- Updates validate old and new ownership. Composite foreign keys prevent notes
  or tasks referencing another owner's project.
- Shared forms, validation, submission feedback, synchronization and data access
  live in components/workspace and lib/workspace for reuse in future modules.
- Private notes render as escaped plain text, never executable HTML or MDX.
- No service-role key is required by the application.
- Private routes are excluded from the sitemap; noindex complements authorization.

## Verification

```sh
npm run build
npx tsc --noEmit
npx eslint app/workspace app/auth components/workspace components/site-frame.tsx lib/workspace lib/supabase proxy.ts
node --test tests/workshop.test.cjs
```

Run `supabase/tests/workspace-access.sql` as administrator on a clean workspace.
It rolls back every fixture. It checks owner CRUD, persisted task status,
outsider denial, protected membership, denied ownership changes, cross-owner
project associations, cascade deletion and anonymous denial. Its assertions
expect no existing projects: use an isolated development database after adding
real workspace data.

Before production activation, complete the real-owner browser flow: confirm
email, sign in, create a project, add/edit notes and tasks, move a task on the
combined board, verify the project board reflects it, then sign out/in and
check persistence. Repeat on a second device. Check expired sessions, denied
non-owner access and confirmation links on the final deployment origin.

References:
- https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=nextjs
- https://supabase.com/docs/guides/database/postgres/row-level-security

## Validation recorded 15 October 2026

- Production build passed with Next.js 16.4.1 after patching the older framework.
- TypeScript and focused ESLint checks passed; existing public-tool tests passed.
- Transactional database access tests passed after the policy optimization.
- Supabase security advisor: no findings. Performance advisor: no table/policy
  warnings; an existing informational Auth connection-allocation notice remains
  (https://supabase.com/docs/guides/deployment/going-into-prod).
- Browser: unauthenticated workspace redirects to the sign-in page; layout inspected.
- All 12 HTTP authorization checks passed: protected routes, private cache headers,
  forged session rejection, safe callback handling and denied direct anonymous REST
  reads. Run `node --env-file=.env.local --test tests/workspace-http.test.cjs`
  with the local production server running.
- Real-owner confirmation, authenticated browser CRUD, expired-session refresh,
  cross-device use and final hosting configuration still require acceptance checks.
- npm audit after compatible fixes reports 9 advisories: 5 high through the Next
  ESLint plugin/glob chain and 4 moderate through the existing gray-matter parser
  chain. The suggested automatic fixes downgrade major packages; these were not
  applied. Private notes do not use gray-matter or execute MDX.

The optimized policy migration is recorded as `workbench_policy_initplan`; its
source is `supabase/schema/workspace-policy-initplan.sql`. The foundation snapshot
also includes the optimized policy expressions for new installations.
