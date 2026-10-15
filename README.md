# CGRV / Dale Cosgrove’s personal workshop

A Next.js personal site with a retro workshop design: paper, ink, cobalt blue, stamped labels and hard borders.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production build: `npm run build`. Start that build: `npm start`.

## Pages

- `/`: introduction, featured projects, tools, recent notes and contact.
- `/projects`: project index with individual project pages.
- `/toolbox`: list cleaning/comparison and JSON validation/formatting. Inputs are processed in the browser and are not persisted by the tools.
- `/blog`: existing MDX notes with the new visual style.
- `/about` and `/cv`: background, interests and printable experience.
- `/workspace`: Workbench, the owner-only dashboard with connected projects, notes and task boards. Requires Supabase configuration and owner activation.

Project content lives in `lib/workshop.ts`. Add notes as MDX files with frontmatter in `content/posts/`.

## Verification

```sh
npm run build
node --test tests/workshop.test.cjs
```

The list tests cover deduplication, mixed line endings, empty inputs, comparison and optional case-insensitive matching. The production build includes TypeScript validation.

Browser visual and interaction QA is still required before merging. Check desktop, tablet and mobile layout, navigation, keyboard focus, clipboard actions, JSON errors and CV printing.

## Next phase

See `docs/private-workspace.md` for Workbench setup, owner activation, architecture and verification. The dedicated CGRV Supabase project contains the workspace schema; FoodRisk Applications was not changed.

This branch is intended for review before replacing the live website.
