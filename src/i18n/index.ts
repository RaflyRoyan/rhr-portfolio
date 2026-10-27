import { profile } from '../data/profile';
import { profileEn } from '../data/profile.en';
import { ui } from './ui';

export const LANGS = ['id', 'en'] as const;
export type Lang = (typeof LANGS)[number];

/** Bahasa halaman dari URL: semua halaman di bawah /en berbahasa Inggris, sisanya Indonesia. */
export function getLang(url: URL): Lang {
  return url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'id';
}

/** Path internal untuk bahasa tertentu, mis. ('en', '/projects') → '/en/projects', ('en', '/#about') → '/en/#about'. */
export function localePath(lang: Lang, path: string) {
  if (lang === 'id') return path;
  return path === '/' ? '/en/' : path.startsWith('/#') ? `/en/${path.slice(1)}` : `/en${path}`;
}

/** Path halaman yang sama dalam bahasa lain (untuk tombol ID/EN dan hreflang). */
export function switchPath(pathname: string, to: Lang) {
  const base = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return localePath(to, base);
}

export const getProfile = (lang: Lang) => (lang === 'en' ? profileEn : profile);
export const t = (lang: Lang) => ui[lang];

/** Locale untuk format tanggal. */
export const dateLocale = (lang: Lang) => (lang === 'en' ? 'en-US' : 'id-ID');
export const formatMonth = (lang: Lang, d: Date) => d.toLocaleDateString(dateLocale(lang), { month: 'short', year: 'numeric' });
