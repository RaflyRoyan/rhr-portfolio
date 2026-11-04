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

## Bilingual (ID / EN)

Indonesian is the default at `/`; English lives under `/en/` with the same routes. `src/pages/**` only holds thin route files; page bodies are in `src/components/pages/*` and components read the language from the URL with `getLang(Astro.url)` (`src/i18n/index.ts`). Internal links must go through `localePath(lang, path)`.

- UI strings: `src/i18n/ui.ts` (`id` is the source, `en: UI` must match its shape). Strings needed by client scripts are passed via `data-*` attributes.
- Profile: `src/data/profile.en.ts` (typed `Profile`, spreads non-text fields from `profile.ts`). Update both when profile text changes.
- Projects: `src/content/projects-en/<slug>.md` (collection `projectsEn`) overrides text fields and supplies the body; metadata (cover, tech, status, order) stays in the Indonesian file. `getProjects(lang)` merges them.
- Updates: titles/summaries in `src/data/updates.en.ts`, keyed by the update file id. Missing entries fall back to Indonesian.

## Client-side scripts and ClientRouter

`BaseLayout.astro` enables `<ClientRouter />` (view transitions), so module scripts run only once and do not run again on each navigation. Rules:

- Wrap per-page DOM setup in `onPageLoad(setup)` from `src/scripts/lifecycle.ts`. It runs on `astro:page-load` and calls the returned cleanup function on `astro:before-swap`. Respect `prefersReducedMotion()` for animations.
- Alternatively, delegate listeners to `document`, as `CommandPalette.astro` does.
- Dark mode uses the `.dark` class on `<html>`. An inline script in `BaseLayout` applies it before paint and again after `astro:after-swap`. Every new visit starts light regardless of the system preference; the toggle stores `rhr-theme` in sessionStorage, so dark only lasts for that tab session. The `js` class on `<html>` marks that JS is enabled.
- The theme toggle is the `ThemeToggler` island (Magic UI `animated-theme-toggler` in controlled mode); it writes `rhr-theme`. `toggleTheme()` in `src/scripts/theme.ts` is still used by the command palette.
- Toasts and clipboard helpers live in `src/scripts/feedback.ts` (`showToast`, `copyText`).

## React islands and Magic UI

`@astrojs/react` (pinned `7.0.1` for Astro 7.3.8 / Node 22.21) renders Magic UI components as islands. shadcn is configured by a hand-written `components.json` (no `shadcn init`, so it does not rewrite `global.css`); add components with `npx shadcn@latest add @magicui/<slug>`. Alias `@/*` maps to `src/*`.

- `src/components/ui/*.tsx` is registry output. Do not edit it; customize through props/`className` or a wrapper in `src/components/islands/`.
- Wrappers worth knowing: `Reveal` (BlurFade + `.blur-fade` CSS override so content shows without JS and with reduced motion), `GlowCard` (MagicCard in theme colors), `Ticker`, `RoleRotate` (span version of word-rotate, the registry one renders an `<h1>`), `ThemeToggler`, `HeroTerminal`, `AboutOrbit`, `ContactGlobe`, `ContactDock`. `ShimmerLink.astro` is an `<a>` version of ShimmerButton.
- Hydration: `client:load` only for hero/navbar; `client:visible` below the fold; pure-CSS components (marquee, shine-border, aurora-text, animated-shiny-text, orbiting-circles) get no directive. A component whose SSR output is an empty fragment (e.g. meteors) cannot use `client:visible`; use `client:idle`.
- Never read `matchMedia` during render (hydration mismatch); use `useReducedMotionSafe()` from `src/lib/use-reduced-motion-safe.ts`.
- Never put `transition:name` targets or above-the-fold hero text inside `Reveal` (it SSRs `opacity:0`); the hero uses the CSS `.hero-in` entrance.
- `vite.optimizeDeps.include` in `astro.config.mjs` pre-bundles React, motion, lucide, next-themes, cobe and Astro's transition modules. Without it the dev server re-optimizes mid-session and React gets duplicated ("Invalid hook call"). If that error shows up in dev, stop the server, delete `node_modules/.vite` and restart.
- Skill icons for the icon cloud and About orbit come from `simple-icons` at build time (`src/lib/skill-icons.ts`), with no CDN requests.

## Styling

Tailwind v4 is configured entirely in `src/styles/global.css`. Color tokens (`canvas`, `surface`, `surface-2`, `line`, `ink`, `muted`, `accent`, `accent-ink`, plus `accent-from`/`accent-to` for gradients and `accent-soft`) are exposed via `@theme inline` over CSS variables that switch between `:root` and `.dark`. shadcn variable names (`--background`, `--border`, …) are mapped onto the same tokens. Use these semantic utilities (`bg-surface`, `text-muted`, `border-line`), not raw Tailwind palette colors. Fonts come from Fontsource: Bricolage Grotesque Variable (sans) and JetBrains Mono Variable (mono).

The visual theme is modern Magic UI style: neutral zinc palette with a violet→cyan accent gradient, a global `DotPattern` background, and per-section `SectionGlow.astro` (gradient divider + accent glows). `SectionHeading.astro` takes an `eyebrow` (e.g. `01 · Tentang`) and renders the title's last word with `AuroraText`. Every animation must respect `prefers-reduced-motion` (see the reduced-motion blocks at the end of `global.css`).

## Deployment

The `site` in `astro.config.mjs` (`https://rhr-portfolio.netlify.app`) is used for canonical URLs and absolute `og:image` URLs. It is a placeholder until the final domain is set. Netlify publishes `dist` and caches `/_astro/*` as immutable.
