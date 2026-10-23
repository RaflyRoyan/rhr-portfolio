// @ts-check
import { existsSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import rehypeMermaid from 'rehype-mermaid';
import rehypeWrapDiagrams from './src/lib/rehype-wrap-diagrams.mjs';

// Mermaid dirender ke SVG saat build lewat Playwright. Pakai Chrome yang terpasang bila ada;
// selain itu (mis. di Netlify) pakai Chromium bawaan Playwright (`npx playwright install chromium`).
const systemChrome = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find((path) => path && existsSync(path));

// https://astro.build/config
export default defineConfig({
  // Ganti dengan domain final (dipakai untuk canonical & og:image absolut)
  site: 'https://rhr-portfolio.netlify.app',
  output: 'static',
  markdown: {
    syntaxHighlight: { type: 'shiki', excludeLangs: ['mermaid', 'math'] },
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    },
    // Plugin rehype butuh pipeline unified (default Astro 7 adalah Sätteri)
    processor: unified({
      rehypePlugins: [
        [
          rehypeMermaid,
          {
            strategy: 'inline-svg',
            launchOptions: systemChrome ? { executablePath: systemChrome } : undefined,
            mermaidConfig: { theme: 'neutral' },
          },
        ],
        rehypeWrapDiagrams,
      ],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
