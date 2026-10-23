# rhr-portfolio

Portfolio pribadi. Astro 7 + Tailwind CSS v4 + Content Collections, deploy statis ke Netlify.

Butuh Node.js >= 22.23.4.

| Perintah          | Fungsi                                |
| ----------------- | ------------------------------------- |
| `npm install`     | Install dependency                    |
| `npm run dev`     | Dev server di `http://localhost:4321` |
| `npm run check`   | Type-check (`astro check`)            |
| `npm run build`   | Build statis ke `./dist/`             |
| `npm run preview` | Preview hasil build                   |

Konten: tambah file Markdown di `src/content/projects/` dan `src/content/updates/`. Schema ada di `src/content.config.ts`.
