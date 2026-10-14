# Private workspace: next implementation phase

This redesign adds a clearly labelled, unconnected workspace page. It stores no notes and provides no authentication. Do not put private content in that page or in the repository.

## Proposed first feature

A personal project notebook: title, body, project/category, status and created/updated dates. Saved resources and lead tracking can follow when the notebook is useful.

## Supabase connection

Use a dedicated CGRV project rather than reusing FoodRisk Applications or Forge without explicit selection. No existing Supabase project was modified in this redesign.

Use Supabase Auth with cookie-based SSR via `@supabase/ssr` and `@supabase/supabase-js`, with pinned versions and a committed lockfile. Configure a publishable key and project URL. Never expose secret/service-role credentials in the browser.

Create separate browser and server clients, refresh sessions in Next.js 16 `proxy.ts`, verify claims on protected pages and validate authorization again in each data mutation. Restrict the workspace to the owner's verified user ID, configured on the server. Disable public registration for the initial owner-only workspace.

Use row level security for every exposed table. Restrict reads/deletes to the authenticated owner's user ID. Inserts must check that ownership matches; updates need both USING and WITH CHECK and a matching SELECT policy. Also require membership in an admin-managed workspace owner table so additional authenticated users cannot become workspace owners automatically.

Do not cache private responses publicly. Robots rules and hidden links are not access controls.

## Required verification before activation

Test unauthenticated access, owner access, a second user's denied access, expired sessions, direct REST requests and rejected ownership reassignment. Confirm records survive sign-out/sign-in and use across devices. Run database advisors and commit the reviewed migration only after database verification.

## Documentation reviewed

- https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=nextjs
- https://supabase.com/docs/guides/database/postgres/row-level-security

The connection phase requires the intended CGRV Supabase project and deployment environment. No credentials are needed in chat.
