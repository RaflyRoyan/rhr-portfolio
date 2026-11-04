# Revamp Portfolio dengan Magic UI — Desain

Tanggal: 2026-11-04
Status: disetujui di chat, menunggu review spec tertulis

## Tujuan

Mengganti seluruh tampilan portfolio dari tema "engineer's notebook" ke gaya modern Magic UI
(pola titik/grid, glow, shimmer, gradien, bento), memakai komponen resmi Magic UI dari registry
shadcn sebagai React island di Astro.

Kriteria sukses:

- Semua section home, navbar, `/projects`, dan `/projects/[slug]` memakai sistem visual baru.
- Tidak ada sisa elemen notebook (graph paper, doodle, sticky note, highlight, font Kalam, ink trail).
- Konten, i18n ID/EN, CommandPalette, dan pipeline Mermaid tetap berfungsi seperti sekarang.
- `npm run check` dan `npm run build` lulus; tampilan benar di desktop, mobile, mode gelap,
  dan `prefers-reduced-motion`.

Di luar cakupan: perubahan konten/teks profil, struktur route, content collections, deployment.

## Keputusan

1. **Integrasi: React islands.** Komponen resmi Magic UI dipasang lewat
   `npx shadcn@latest add @magicui/<slug>`, bukan di-port ke Astro.
2. **Tema: ganti total.** Identitas notebook dibuang, diganti gaya Magic UI.

## 1. Arsitektur

- Tambah `@astrojs/react` (+ `react`, `react-dom`, `@types/react`, `@types/react-dom`) dengan
  versi yang kompatibel dengan `astro@7.3.8` dan Node 22.21.0. Astro tidak di-bump.
- Jalankan `npx shadcn@latest init` untuk Tailwind v4: menghasilkan `components.json`,
  `src/lib/utils.ts` (`cn`), dan alias `@/*` → `src/*` di `tsconfig.json`.
- Komponen registry ada di `src/components/ui/*.tsx` dan **tidak diedit**. Kustomisasi lewat
  props/`className`; bila kustomisasi besar, bungkus di komponen lokal.
- Section tetap `.astro` dan dirender statis (SEO, `getLang(Astro.url)`, `localePath`).
  Teks hasil i18n dikirim ke island sebagai props/children.
- Hidrasi:
  - `client:load` hanya untuk elemen hero di atas fold.
  - `client:visible` untuk semua efek di bawah fold, terutama `globe` (cobe) dan `icon-cloud`.
  - Komponen yang murni CSS (mis. `marquee`, `shine-border`, `border-beam`, `dot-pattern`,
    `bento-grid`) dirender tanpa directive `client:*` bila tidak butuh JS.
- ClientRouter tetap aktif. Island harus benar setelah navigasi (dipasang ulang oleh Astro);
  script non-React tetap memakai `onPageLoad` dari `src/scripts/lifecycle.ts`.
- Reduced motion: island animasi mengecek `prefers-reduced-motion` (mis. `useReducedMotion`
  dari `motion`) dan menampilkan state akhir tanpa animasi. Konten tetap ada di HTML statis.

## 2. Sistem visual

Dihapus:

- `src/components/Doodle.astro` dan semua pemakaiannya.
- `src/components/home/InkTrail.astro`.
- Di `global.css`: background graph paper, token `pen`/`hl`/`note`, `.highlight`, `.sticky-note`,
  `.hand`, `.bob`, `.trail`, `.marquee` versi lama, animasi `[data-draw]`.
- Filter SVG `#sketchy` di `BaseLayout.astro`.
- Dependensi `@fontsource/kalam`.

Dipertahankan:

- Nama token semantik (`canvas`, `surface`, `surface-2`, `line`, `ink`, `muted`, `accent`,
  `accent-ink`) via `@theme inline`, agar utility yang ada tidak rusak. Nilainya diganti ke palet
  netral (zinc-like) terang/gelap dengan satu aksen; ditambah token gradien aksen untuk efek glow.
- Variabel shadcn (`--background`, `--foreground`, `--border`, dst.) dipetakan ke token yang sama
  supaya komponen registry konsisten dengan tema.
- Dark mode lewat kelas `.dark` di `<html>`, logika `rhr-theme` di sessionStorage, dan
  script anti-flash di `BaseLayout`.
- Font Bricolage Grotesque Variable (sans) dan JetBrains Mono Variable (mono).
- `[data-reveal]` IntersectionObserver boleh dihapus bila semua reveal sudah pindah ke `blur-fade`.

Background global: satu lapis `dot-pattern` tipis dengan mask radial. Maksimal satu efek
animasi berat per viewport.

## 3. Pemetaan komponen

| Area | Komponen Magic UI |
|---|---|
| Hero | `animated-grid-pattern` (latar), `blur-fade` (nama), `word-rotate` (peran), `shimmer-button` (CTA utama), `number-ticker` (stats). `CodeCard` diganti `terminal` + `typing-animation` |
| About | `blur-fade`, `magic-card` |
| Featured Projects | `bento-grid` + `magic-card`; `border-beam` pada project unggulan |
| Experience | `blur-fade` bertahap; timeline dengan `animated-beam` bila rapi, jika tidak garis gradien CSS |
| Services | grid `magic-card` |
| Tech Stack | `marquee` dua baris arah berlawanan + `icon-cloud` |
| Updates | `animated-list` atau kartu `blur-fade` |
| Education | `magic-card`; `shine-border` untuk sertifikasi |
| Contact | `globe` (penanda Surabaya), `shimmer-button`, `dock` untuk tautan sosial |
| Navbar | `scroll-progress`, navbar pill `backdrop-blur`; `ThemeToggle` → `animated-theme-toggler` dengan logika `rhr-theme` tetap |
| `/projects` | `ProjectCard` → `magic-card`; grid dengan `blur-fade` |
| `/projects/[slug]` | penyesuaian visual header, `Gallery`, `Toc`; pipeline Mermaid tidak diubah |

Tidak berubah: `CommandPalette.astro` (hanya restyle token), konten collections, `src/data/*`,
`src/i18n/*` (kecuali string baru yang dibutuhkan, mis. daftar kata `word-rotate` ID/EN),
aturan confidentiality.

## 4. Data dan i18n

- Daftar kata `word-rotate` dan label baru ditambahkan di `src/i18n/ui.ts` (`id` sumber,
  `en` mengikuti bentuknya).
- Ikon `icon-cloud` diambil dari daftar skill di `profile.ts` (slug Simple Icons); skill tanpa
  ikon dilewati. Ikon dirender lokal/statis bila memungkinkan, tanpa memanggil API pihak ketiga
  saat runtime.
- `globe` memakai koordinat Surabaya (-7.2575, 112.7521) sebagai marker.

## 5. Penanganan error dan risiko

- Bila `@astrojs/react` terbaru tidak kompatibel dengan Astro 7.3.8, pakai versi mayor yang
  sesuai; jangan bump Astro.
- Bila `shadcn init` gagal mendeteksi framework, buat `components.json` dan alias manual.
- Bundle JS naik (React + `motion` + `cobe`). Komponen berat wajib `client:visible`.
- Tanpa JS: semua teks tetap terlihat; efek hanya dekorasi.

## 6. Verifikasi

- `npm run check` dan `npm run build` lulus (termasuk render Mermaid).
- Cek visual via dev server: home, `/projects`, satu `/projects/<slug>`, versi `/en/`.
- Viewport desktop dan ~375px tanpa horizontal overflow.
- Mode gelap dan terang; navigasi antar halaman via ClientRouter (island tetap jalan).
- Emulasi `prefers-reduced-motion: reduce`.
