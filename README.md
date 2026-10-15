# CGRV / Dale Cosgrove’s personal workshop

A Next.js-compatible personal site (vinext on Cloudflare Workers) with a retro workshop design: paper, ink, cobalt blue, stamped labels and hard borders.

## Run locally

```sh
npm ci
npm run dev       # http://localhost:3001
npm run build     # production build for Cloudflare Workers (vinext)
npm run preview   # run the built Worker locally, http://localhost:4173
npm run deploy    # deploy to Cloudflare Workers
```

Hosted on Cloudflare Workers via [vinext](https://vinext.dev/). Blog posts are compiled at build time because Workers have no filesystem.

## Pages

- `/`: introduction, featured projects, tools, recent notes and contact.
- `/projects`: project index with individual project pages.
- `/toolbox`: list cleaning/comparison and JSON validation/formatting. Inputs are processed in the browser and are not persisted by the tools.
- `/blog`: existing MDX notes with the new visual style.
- `/about` and `/cv`: background, interests and printable experience.
- `/workspace`: clearly marked, unconnected workspace information. No authentication or private storage is active.

Project content lives in `lib/workshop.ts`. Add notes as MDX files with frontmatter in `content/posts/`.

## Verification

```sh
npm run build
npm test
```

The list tests cover deduplication, mixed line endings, empty inputs, comparison and optional case-insensitive matching. The production build includes TypeScript validation.

Browser visual and interaction QA is still required before merging. Check desktop, tablet and mobile layout, navigation, keyboard focus, clipboard actions, JSON errors and CV printing.

## Next phase

See `docs/private-workspace.md` for the proposed owner-only Supabase notebook and its verification requirements. No existing Supabase databases were changed.

This branch is intended for review before replacing the live website.
