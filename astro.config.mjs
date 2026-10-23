// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Ganti dengan domain final (dipakai untuk canonical & og:image absolut)
  site: 'https://rhr-portfolio.netlify.app',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
