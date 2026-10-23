# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio site for a backend developer at Bapenda Kota Surabaya. Built with Astro 7, Tailwind CSS v4 (via `@tailwindcss/vite`, no `tailwind.config`), and Content Collections. Output is a fully static build deployed to Netlify. UI text, code comments and content are in Indonesian (`lang: 'id'`).

## Commands

```
npm run dev       # dev server at http://localhost:4321
npm run check     # astro check (type-check .astro/.ts and content schemas)
npm run build     # static build to ./dist/
npm run preview   # serve ./dist/
```

There are no tests and no linter. `npm run check` plus `npm run build` is the verification step.

Start the dev server in background mode (see `AGENTS.md`): `npx astro dev --background`. Manage it with `astro dev stop`, `astro dev status` and `astro dev logs`.

Node is pinned to 22.21.0 (`.node-version`, `netlify.toml`, `engines`). Astro is pinned to exactly `7.3.8` for compatibility with that Node version, so do not bump it casually. `README.md` says Node >= 22.23.4, which disagrees with the actual pin.

## Build-time Mermaid rendering

`astro.config.mjs` replaces Astro's default markdown processor with a `unified()` pipeline. It does this so rehype plugins can run. `rehype-mermaid` renders ```` ```mermaid ```` blocks to inline SVG **at build time through Playwright**. It uses a locally installed Chrome (`CHROME_PATH` or the standard install paths) and falls back to Playwright's Chromium otherwise. On Netlify the build command runs `npx playwright install chromium` first. A build that fails with a browser launch error means neither browser is available. `src/lib/rehype-wrap-diagrams.mjs` then wraps each `svg#mermaid*` in a `<figure class="diagram">` so it scrolls horizontally. Shiki excludes `mermaid` and `math`, and uses dual themes with `defaultColor: false`, so token colors come from CSS variables in `global.css`.

## Content model

Content is defined in `src/content.config.ts`, with Zod schemas and the category/status enums exported from there:

- `projects` (`src/content/projects/*.md`): the frontmatter `slug` becomes the entry id and the URL `/projects/<slug>`. Sorting uses `order`. `featured` controls the home page. Images (`cover`, `gallery`) go through `image()`.
- `updates` (`src/content/updates/NNN-*.md`): a changelog-style feed. `relatedProject` is a `reference('projects')` and must match a project slug. Entries with the same `date` sort by the numeric filename prefix, highest first.

Always read collections through `src/lib/collections.ts` (`getProjects`, `getUpdates`) so the sort order stays consistent. `categorySlug()` builds the `?category=` filter values on the projects listing.

Many frontmatter fields carry `# TODO: verifikasi` comments. These mark values that were not confirmed during the migration from the old site. Keep them unless the value has been verified.

## Site structure

- Pages: `src/pages/index.astro` (single-page home composed of `src/components/home/*` sections), `src/pages/projects/index.astro`, and `src/pages/projects/[slug].astro` (`getStaticPaths` over projects plus related updates).
- `src/data/profile.ts` is the single source for personal data: bio, experience, certifications, contact. `src/consts.ts` derives `SITE` from it and defines `SECTIONS` (home section anchor ids). The navbar and the command palette both use `SECTIONS`. Adding a home section means updating `SECTIONS` and `NAV_SECTION_IDS`.
- **Confidentiality rule** (from `profile.ts`): the projects describe internal government systems. Never add DB table or schema names, credentials, or taxpayer data to content or profile data.

## Client-side scripts and ClientRouter

`BaseLayout.astro` enables `<ClientRouter />` (view transitions), so module scripts run only once and do not run again on each navigation. Rules:

- Wrap per-page DOM setup in `onPageLoad(setup)` from `src/scripts/lifecycle.ts`. It runs on `astro:page-load` and calls the returned cleanup function on `astro:before-swap`. Respect `prefersReducedMotion()` for animations.
- Alternatively, delegate listeners to `document`, as `CommandPalette.astro` does.
- Dark mode uses the `.dark` class on `<html>`. An inline script in `BaseLayout` applies it before paint and again after `astro:after-swap`. Every new visit starts light regardless of the system preference; the toggle stores `rhr-theme` in sessionStorage, so dark only lasts for that tab session. The `js` class on `<html>` marks that JS is enabled.
- Elements with `[data-reveal]` or `[data-draw]` get `.is-visible` from a shared IntersectionObserver in `BaseLayout`.
- Toasts and clipboard helpers live in `src/scripts/feedback.ts` (`showToast`, `copyText`).

## Styling

Tailwind v4 is configured entirely in `src/styles/global.css`. Color tokens (`canvas`, `surface`, `surface-2`, `line`, `ink`, `muted`, `accent`, `accent-ink`) are exposed via `@theme inline` over CSS variables that switch between `:root` and `.dark`. Use these semantic utilities (`bg-surface`, `text-muted`, `border-line`), not raw Tailwind palette colors. Fonts come from Fontsource: Bricolage Grotesque Variable (sans), JetBrains Mono Variable (mono) and Kalam (`.hand` handwriting notes).

The visual theme is an engineer's notebook. The body has a graph-paper background. On top of that are `pen` (blue ink), `hl` (highlighter) and `note` (sticky note) tokens. `src/components/Doodle.astro` holds the hand-drawn SVG doodles. Each path uses `pathLength="1"` and draws itself through `stroke-dashoffset` once its `[data-draw]` element becomes visible. The `#sketchy` SVG filter in `BaseLayout` adds the wobble. To add a doodle, add an entry to `DOODLES`. Other helpers in `global.css`: `.highlight` (marker swipe), `.sticky-note`, `.bob` (floating), `.marquee` (scrolling tech strip in the hero) and `.trail` (dashed path revealed with clip-path). All of them respect `prefers-reduced-motion`.

## Deployment

The `site` in `astro.config.mjs` (`https://rhr-portfolio.netlify.app`) is used for canonical URLs and absolute `og:image` URLs. It is a placeholder until the final domain is set. Netlify publishes `dist` and caches `/_astro/*` as immutable.
