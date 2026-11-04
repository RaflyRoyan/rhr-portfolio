# Revamp Portfolio dengan Magic UI — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ganti seluruh tampilan portfolio dari tema notebook ke gaya Magic UI memakai komponen resmi registry `@magicui/*` sebagai React island di Astro.

**Architecture:** `@astrojs/react` + shadcn (Tailwind v4) dipasang di atas Astro 7.3.8. Komponen registry tinggal di `src/components/ui/*.tsx` tanpa diedit; section `.astro` tetap render statis dan mengirim teks i18n ke island lewat props/children. Elemen notebook dihapus di akhir setelah semua section pindah.

**Tech Stack:** Astro 7.3.8, Tailwind CSS 4.3.3, React 19 + `@astrojs/react`, shadcn CLI, Magic UI registry, `motion`, `cobe`, `simple-icons`.

**Spec:** `docs/superpowers/specs/2026-11-04-magicui-revamp-design.md`

## Global Constraints

- `astro` tetap `7.3.8`; Node tetap `22.21.0`. Jangan bump.
- Komponen di `src/components/ui/*.tsx` hasil `npx shadcn@latest add @magicui/<slug>` tidak diedit; kustomisasi lewat props/`className` atau wrapper lokal.
- Hidrasi: `client:load` hanya untuk hero; efek di bawah fold `client:visible`; komponen tanpa state/efek JS dirender tanpa `client:*`.
- Token semantik `canvas`, `surface`, `surface-2`, `line`, `ink`, `muted`, `accent`, `accent-ink` tetap ada (nama sama).
- Dark mode: kelas `.dark` di `<html>`, `rhr-theme` di sessionStorage, kunjungan baru selalu terang.
- Font hanya Bricolage Grotesque Variable dan JetBrains Mono Variable.
- Teks UI baru masuk `src/i18n/ui.ts` (`id` sumber, `en` sama bentuknya). Internal link via `localePath(lang, path)`.
- Tanpa nama tabel/skema DB, kredensial, atau data wajib pajak di konten baru.
- Tidak ada pemanggilan API pihak ketiga saat runtime (ikon & globe lokal).
- Animasi menghormati `prefers-reduced-motion` (state akhir tanpa animasi).
- Marker globe: Surabaya `[-7.2575, 112.7521]`.
- Repo tidak punya test runner. Gate tiap task: `npm run check` (0 error) + `npm run build` (sukses) + cek visual yang disebut di task.

## Review Focus

1. **Navigasi ClientRouter** (`/` → `/projects` → `/projects/<slug>` → back): island harus hidrasi ulang dan animasi tetap jalan, tanpa error di console. Dicek di Task 3 dan Task 12.
2. **Tema setelah navigasi**: pilih dark lewat toggler, pindah halaman, tetap dark; tab baru kembali terang. Dicek di Task 3.
3. **`/en/`**: semua teks baru (kata `word-rotate`, label terminal, dock) tampil dalam bahasa Inggris, tidak ada fallback ID. Dicek di Task 4, 10, 12.
4. **Lebar 375px**: `marquee`, `bento-grid`, `globe`, `dock`, `icon-cloud` tidak membuat horizontal scroll (`document.documentElement.scrollWidth === innerWidth`). Dicek di Task 6, 8, 10, 12.
5. **Reduced motion / tanpa JS**: semua teks (nama, stats, timeline) terbaca dengan `prefers-reduced-motion: reduce` dan dengan JS dimatikan; `number-ticker` menampilkan nilai akhir. Dicek di Task 4 dan Task 12.

---

## File Structure

- Create `components.json`, `src/lib/utils.ts` (`cn`) — oleh shadcn init.
- Create `src/components/ui/*.tsx` — output registry, read-only.
- Create `src/components/islands/*.tsx` — wrapper lokal kecil bila sebuah komponen butuh logika proyek (theme, icon cloud, globe).
- Create `src/lib/skill-icons.ts` — map nama skill → slug Simple Icons + builder SVG data URI (build time).
- Modify `src/styles/global.css`, `src/layouts/BaseLayout.astro`, semua `src/components/home/*.astro`, `Navbar.astro`, `ProjectCard.astro`, `ProjectCover.astro`, `SectionHeading.astro`, `src/components/pages/*.astro`, `src/components/project/*.astro`, `src/i18n/ui.ts`, `src/scripts/theme.ts`.
- Delete (Task 11): `src/components/Doodle.astro`, `src/components/home/InkTrail.astro`, `src/components/home/CodeCard.astro`, `src/components/ThemeToggle.astro`, `@fontsource/kalam`.

---

### Task 1: Pasang React + shadcn + smoke island

**Files:**
- Modify: `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/styles/global.css` (tambahan dari shadcn init)
- Create: `components.json`, `src/lib/utils.ts`, `src/components/ui/blur-fade.tsx`

**Interfaces:**
- Produces: alias `@/*` → `./src/*`; `cn(...inputs: ClassValue[]): string` di `src/lib/utils.ts`; integrasi `react()` di `astro.config.mjs`; `BlurFade` di `@/components/ui/blur-fade`.

- [ ] **Step 1:** Cari versi `@astrojs/react` yang peer `astro`-nya mencakup `7.3.8`: `npm view @astrojs/react@* peerDependencies.astro --json`. Pilih versi tertinggi yang cocok, pasang exact: `npm i -E @astrojs/react@<ver> react react-dom` dan `npm i -D -E @types/react @types/react-dom`.
- [ ] **Step 2:** Tambah `react()` ke `integrations` di `astro.config.mjs` (jangan sentuh blok `markdown`). Tambah ke `tsconfig.json`: `"compilerOptions": { "jsx": "react-jsx", "jsxImportSource": "react", "baseUrl": ".", "paths": { "@/*": ["./src/*"] } }`.
- [ ] **Step 3:** `npx shadcn@latest init` (style default, base color neutral, CSS `src/styles/global.css`). Bila CLI gagal deteksi framework, tulis `components.json` manual dengan `"tsx": true`, `"rsc": false`, `"tailwind": { "config": "", "css": "src/styles/global.css", "cssVariables": true }`, aliases `@/components`, `@/lib/utils`, `@/components/ui`.
- [ ] **Step 4:** Periksa diff `global.css`: blok `:root`/`.dark` shadcn yang ditambahkan init tidak boleh menimpa token lama yang masih dipakai (`--canvas`, `--surface`, …). Pertahankan keduanya sementara; penyatuan di Task 2.
- [ ] **Step 5:** `npx shadcn@latest add @magicui/blur-fade`. Smoke test: bungkus judul section About dengan `<BlurFade client:visible inView>`.
- [ ] **Step 6:** Verify `npm run check` → 0 errors; `npm run build` → sukses (render Mermaid tetap jalan). Dev server: judul About fade-in, console bersih.
- [ ] **Step 7:** Commit `feat(ui): add React islands and shadcn/Magic UI setup`.

### Task 2: Sistem visual baru (token, background, shadcn vars)

**Files:**
- Modify: `src/styles/global.css`, `src/layouts/BaseLayout.astro`
- Create: `src/components/ui/dot-pattern.tsx`

**Interfaces:**
- Consumes: Task 1.
- Produces: token semantik baru + variabel shadcn (`--background`, `--foreground`, `--card`, `--card-foreground`, `--border`, `--primary`, `--primary-foreground`, `--muted-foreground`, `--ring`) dipetakan ke token semantik; token tambahan `--accent-from`, `--accent-to` (gradien) diekspos sebagai `--color-accent-from`/`--color-accent-to`.

- [ ] **Step 1:** Ganti nilai `:root` dan `.dark` ke palet netral. Terang: canvas `#fafafa`, surface `#ffffff`, surface-2 `#f4f4f5`, line `#e4e4e7`, ink `#09090b`, muted `#71717a`, accent `#6d5efc`, accent-ink `#ffffff`, accent-from `#6d5efc`, accent-to `#22d3ee`. Gelap: canvas `#09090b`, surface `#111113`, surface-2 `#18181b`, line `#27272a`, ink `#fafafa`, muted `#a1a1aa`, accent `#8b7dff`, accent-ink `#0b0820`, accent-from `#8b7dff`, accent-to `#22d3ee`. Token syntax `--tok-*` tetap ada, sesuaikan agar kontras di palet baru.
- [ ] **Step 2:** Petakan variabel shadcn ke token semantik (mis. `--background: var(--canvas)`), hapus duplikat nilai shadcn hasil init.
- [ ] **Step 3:** Hapus background graph paper dari `body` dan `.inverse` (kelas `.inverse` tetap ada sementara, tanpa grid). `--shadow-sheet`/`--shadow-lift` diganti bayangan halus netral.
- [ ] **Step 4:** `npx shadcn@latest add @magicui/dot-pattern`. Di `BaseLayout`, render `DotPattern` (tanpa `client:*`) sebagai `fixed inset-0 -z-10` dengan `className="[mask-image:radial-gradient(800px_circle_at_top,white,transparent)] text-line"`.
- [ ] **Step 5:** Verify check + build. Visual: terang & gelap, teks kontras, tidak ada grid kertas.
- [ ] **Step 6:** Commit `feat(theme): neutral Magic UI palette and dot-pattern background`.

### Task 3: Navbar, scroll progress, theme toggler

**Files:**
- Modify: `src/components/Navbar.astro`, `src/scripts/theme.ts`, `src/layouts/BaseLayout.astro`
- Create: `src/components/ui/scroll-progress.tsx`, `src/components/ui/animated-theme-toggler.tsx`, `src/components/islands/ThemeToggler.tsx`

**Interfaces:**
- Produces: `ThemeToggler({ label: string }): JSX.Element`; `persistThemeChanges(): void` di `src/scripts/theme.ts`.

- [ ] **Step 1:** `npx shadcn@latest add @magicui/scroll-progress @magicui/animated-theme-toggler`.
- [ ] **Step 2:** `persistThemeChanges()` memasang satu `MutationObserver` (guard global `window.__themePersist`) pada `class` `<html>` dan menulis `rhr-theme` = `dark|light` ke sessionStorage (try/catch). Panggil sekali dari script `BaseLayout`. `toggleTheme()` boleh dihapus bila tak dipakai lagi.
- [ ] **Step 3:** `ThemeToggler` merender `AnimatedThemeToggler` dengan `aria-label={label}` dan kelas tombol navbar. Pakai di `Navbar.astro` dengan `client:load` dan `label={tr.nav.theme}`; hapus pemakaian `ThemeToggle.astro`.
- [ ] **Step 4:** Navbar jadi pill `sticky top-4 mx-auto max-w-5xl rounded-full border border-line bg-surface/70 backdrop-blur-md`; `ScrollProgress` (`client:load`) di atas navbar. Link tetap dari `SECTIONS`/`NAV_SECTION_IDS` via `localePath`; switch ID/EN dan pemicu CommandPalette tetap.
- [ ] **Step 5:** Verify check + build. Review Focus #1 & #2: toggle dark → navigasi ke `/projects` → tetap dark; tab baru → terang; console bersih. Mobile 375px: menu tidak overflow.
- [ ] **Step 6:** Commit `feat(nav): pill navbar with scroll progress and animated theme toggler`.

### Task 4: Hero

**Files:**
- Modify: `src/components/home/Hero.astro`, `src/i18n/ui.ts`
- Create: `src/components/ui/{animated-grid-pattern,word-rotate,shimmer-button,number-ticker,terminal}.tsx`

**Interfaces:**
- Consumes: `BlurFade` (Task 1).
- Produces: `t(lang).hero.roles: string[]`, `t(lang).hero.terminal: { title: string; lines: string[] }`.

- [ ] **Step 1:** `npx shadcn@latest add @magicui/animated-grid-pattern @magicui/word-rotate @magicui/shimmer-button @magicui/number-ticker @magicui/terminal`.
- [ ] **Step 2:** Tambah ke `ui.ts`. ID: `roles: ['Backend Developer', 'Oracle SQL Engineer', 'Integrasi Sistem', 'Optimasi Query']`, `terminal.title: 'profil.cs'`. EN: `roles: ['Backend Developer', 'Oracle SQL Engineer', 'Systems Integration', 'Query Optimization']`, `terminal.title: 'profile.cs'`. `terminal.lines` ID/EN: perintah/output pendek yang diturunkan dari `profile` (nama, posisi, lokasi, 3 skill teratas) — dibangun di `Hero.astro`, bukan hardcode data pribadi baru.
- [ ] **Step 3:** Susun hero: `AnimatedGridPattern` latar (tanpa `client:*` bila statis, `client:load` bila animasi kotak butuh JS) dengan mask radial; badge posisi; nama dalam `BlurFade client:load` (teks tetap di HTML); baris peran `WordRotate client:load words={tr.roles}`; bio; CTA utama `ShimmerButton` membungkus `<a href="#projects">`, CTA kedua link outline ke `#contact`; stats `NumberTicker client:visible value={stat.value}`; panel kanan `Terminal` + `TypingAnimation`/`AnimatedSpan` (`client:visible`) menggantikan `CodeCard`. Hapus `Doodle`, `.highlight`, `.hand`, `data-depth` dari hero.
- [ ] **Step 4:** Verify check + build. Review Focus #3 (`/en/` peran Inggris) & #5: dengan reduced motion nama dan angka stats final langsung terlihat; JS off: nama, bio, CTA terlihat.
- [ ] **Step 5:** Commit `feat(hero): Magic UI hero with grid pattern, word rotate, terminal`.

### Task 5: About + Services

**Files:**
- Modify: `src/components/home/About.astro`, `src/components/home/Services.astro`, `src/components/SectionHeading.astro`
- Create: `src/components/ui/magic-card.tsx`

**Interfaces:**
- Produces: `SectionHeading` props tidak berubah (`eyebrow?`, `title`, …) tapi tanpa doodle; dipakai semua section berikutnya. `MagicCard` dipakai Task 6–9.

- [ ] **Step 1:** `npx shadcn@latest add @magicui/magic-card`.
- [ ] **Step 2:** `SectionHeading`: eyebrow mono kecil + judul besar, dibungkus `BlurFade client:visible inView`; hapus doodle/highlight.
- [ ] **Step 3:** About: paragraf bio + prinsip kerja sebagai grid `MagicCard client:visible gradientFrom="var(--accent-from)" gradientTo="var(--accent-to)"`. Services: grid 1/2/3 kolom `MagicCard`, ikon/teks dari data yang sama seperti sekarang.
- [ ] **Step 4:** Verify check + build. Visual terang/gelap; hover spotlight jalan; 375px satu kolom.
- [ ] **Step 5:** Commit `feat(home): magic cards for about and services`.

### Task 6: Featured Projects + `/projects`

**Files:**
- Modify: `src/components/home/FeaturedProjects.astro`, `src/components/ProjectCard.astro`, `src/components/ProjectCover.astro`, `src/components/pages/ProjectsPage.astro`
- Create: `src/components/ui/{bento-grid,border-beam}.tsx`

- [ ] **Step 1:** `npx shadcn@latest add @magicui/bento-grid @magicui/border-beam`.
- [ ] **Step 2:** Home: `BentoGrid` dengan project `featured`; project pertama (urutan `order`) `col-span-2` + `BorderBeam`. Kartu memakai cover lewat `<Image>` Astro, status (`ProjectStatus`), tech, link via `localePath(lang, '/projects/<slug>')`. Hapus kelas `inverse` dan `data-ink-skip`.
- [ ] **Step 3:** `ProjectCard` dibungkus `MagicCard`; `ProjectsPage` grid dengan `BlurFade` per kartu (`delay={0.04 * i}`); filter `?category=` dan `categorySlug()` tetap.
- [ ] **Step 4:** Verify check + build. Review Focus #4: 375px tanpa horizontal scroll; filter kategori jalan di `/projects` dan `/en/projects`.
- [ ] **Step 5:** Commit `feat(projects): bento grid with border beam and magic project cards`.

### Task 7: Experience + Education

**Files:**
- Modify: `src/components/home/Experience.astro`, `src/components/home/Education.astro`
- Create: `src/components/ui/shine-border.tsx`

- [ ] **Step 1:** `npx shadcn@latest add @magicui/shine-border`.
- [ ] **Step 2:** Experience: timeline vertikal dengan garis gradien CSS (`bg-gradient-to-b from-accent-from to-accent-to`, bukan `animated-beam`); tiap item `BlurFade client:visible inView delay={0.08 * i}`.
- [ ] **Step 3:** Education: kartu pendidikan `MagicCard`; tiap sertifikasi kartu dengan `ShineBorder` (`shineColor={['var(--accent-from)','var(--accent-to)']}`).
- [ ] **Step 4:** Verify check + build. Reduced motion: timeline lengkap terlihat.
- [ ] **Step 5:** Commit `feat(home): gradient timeline and shine-border certifications`.

### Task 8: Tech Stack (marquee + icon cloud)

**Files:**
- Modify: `src/components/home/TechStack.astro`
- Create: `src/lib/skill-icons.ts`, `src/components/ui/{marquee,icon-cloud}.tsx`

**Interfaces:**
- Produces: `skillIconImages(skills: string[]): string[]` — mengembalikan SVG data URI untuk skill yang punya slug di `simple-icons`; skill tanpa ikon dilewati.

- [ ] **Step 1:** `npx shadcn@latest add @magicui/marquee @magicui/icon-cloud`; `npm i -E simple-icons`.
- [ ] **Step 2:** `skill-icons.ts`: map eksplisit nama skill di `profile.ts` → nama export `simple-icons` (mis. `'.NET' → siDotnet`, `'JavaScript' → siJavascript`, `'jQuery' → siJquery`, `'Bootstrap 5' → siBootstrap`, `'Tailwind CSS' → siTailwindcss`, `'Chart.js' → siChartdotjs`, `'Git' → siGit`); ikon yang tidak ada di versi terpasang tidak dimasukkan. Data URI `data:image/svg+xml,` + SVG dengan `fill="#<hex>"`.
- [ ] **Step 3:** TechStack: dua `Marquee` (`pauseOnHover`, baris kedua `reverse`) berisi chip skill dari `profile.skills`, dengan mask fade kiri/kanan; di samping (≥ lg) `IconCloud client:visible images={skillIconImages(...)}`. Di < lg icon cloud disembunyikan.
- [ ] **Step 4:** Verify check + build. Review Focus #4: 375px tanpa horizontal scroll. Network tab: tidak ada request ke CDN ikon.
- [ ] **Step 5:** Commit `feat(stack): marquee skill rails and local icon cloud`.

### Task 9: Updates

**Files:**
- Modify: `src/components/home/Updates.astro`

- [ ] **Step 1:** Daftar update terbaru sebagai kartu `MagicCard` ringkas (tanggal mono, judul, ringkasan, link project terkait via `localePath`), tiap kartu `BlurFade client:visible inView delay={0.06 * i}`. Tidak memakai `animated-list` (urutan harus statis dan terbaca).
- [ ] **Step 2:** Verify check + build; `/en/` memakai judul dari `updates.en.ts`.
- [ ] **Step 3:** Commit `feat(home): animated update cards`.

### Task 10: Contact (globe + dock)

**Files:**
- Modify: `src/components/home/Contact.astro`, `src/i18n/ui.ts`
- Create: `src/components/ui/{globe,dock}.tsx`, `src/components/islands/ContactGlobe.tsx`

**Interfaces:**
- Produces: `ContactGlobe(): JSX.Element` — `Globe` dengan config marker `{ location: [-7.2575, 112.7521], size: 0.1 }`, warna mengikuti `.dark`.

- [ ] **Step 1:** `npx shadcn@latest add @magicui/globe @magicui/dock`.
- [ ] **Step 2:** `ContactGlobe` membaca `document.documentElement.classList.contains('dark')` saat mount + `MutationObserver` untuk set `dark: 1|0` dan warna base/glow; tidak me-render apa pun pada reduced motion selain globe statis (`phi` tetap).
- [ ] **Step 3:** Contact: judul + teks, CTA email `ShimmerButton` (`mailto:` dari `profile`), `Dock` berisi link sosial dari `profile` (ikon + `aria-label`), `ContactGlobe client:visible` di kolom kanan dengan ukuran `max-w-[420px] aspect-square`. Label dock baru masuk `ui.ts` ID/EN.
- [ ] **Step 4:** Verify check + build. Review Focus #3 & #4. Globe ganti warna saat toggle tema.
- [ ] **Step 5:** Commit `feat(contact): globe marker for Surabaya and social dock`.

### Task 11: Detail project + bersih-bersih notebook

**Files:**
- Modify: `src/components/pages/ProjectPage.astro`, `src/components/project/{Gallery,Highlights,Toc}.astro`, `src/components/pages/HomePage.astro`, `src/layouts/BaseLayout.astro`, `src/styles/global.css`, `package.json`
- Delete: `src/components/Doodle.astro`, `src/components/home/InkTrail.astro`, `src/components/home/CodeCard.astro`, `src/components/ThemeToggle.astro`

- [ ] **Step 1:** ProjectPage: header dengan `BlurFade`, metadata chip, `Highlights` jadi kartu `MagicCard`, `Gallery` dan `Toc` restyle token baru. Konten markdown, `figure.diagram`, dan pipeline Mermaid tidak diubah.
- [ ] **Step 2:** Hapus `InkTrail` dari `HomePage.astro`; hapus file di daftar Delete; hapus filter `#sketchy`; observer `[data-reveal]/[data-draw]` di `BaseLayout` dihapus bila `grep -rn "data-reveal\|data-draw" src` kosong.
- [ ] **Step 3:** `global.css`: hapus `--font-hand`, token `pen/hl/note/pen-soft/grid`, `.highlight`, `.sticky-note`, `.hand`, `.bob`, `.trail`, `.marquee` lama, `.inverse`. `npm uninstall @fontsource/kalam` dan hapus import-nya.
- [ ] **Step 4:** Verify `grep -rnE "Doodle|InkTrail|sticky-note|class=\"hand|\bhl\b|text-pen|bg-note|kalam|sketchy|inverse" src` → kosong. check + build sukses, diagram Mermaid tampil di halaman project.
- [ ] **Step 5:** Commit `refactor(theme): remove notebook theme remnants`.

### Task 12: Verifikasi menyeluruh

- [ ] **Step 1:** `npm run check` → 0 errors; `npm run build` → sukses.
- [ ] **Step 2:** `npx astro dev --background`; cek `/`, `/projects`, satu `/projects/<slug>`, `/en/`, `/en/projects` di 1440px dan 375px, terang dan gelap.
- [ ] **Step 3:** Review Focus #1–#5 satu per satu; catat hasil. Console bersih di semua halaman setelah navigasi ClientRouter bolak-balik.
- [ ] **Step 4:** `npm run preview` dari `dist/` untuk memastikan island jalan di build produksi; catat ukuran JS terbesar di `dist/_astro/`.
- [ ] **Step 5:** `astro dev stop`. Commit perbaikan yang muncul (bila ada) `fix(ui): ...`.
