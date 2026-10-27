import { getCollection, getEntry } from 'astro:content';
import type { Lang } from '../i18n';
import { updatesEn } from '../data/updates.en';

/**
 * Project urut berdasarkan `order` (kecil dulu). Untuk bahasa Inggris, teks frontmatter ditimpa
 * dari koleksi `projectsEn` (slug sama); metadata seperti cover, tech, dan status tetap dari versi Indonesia.
 * Entry disalin, bukan diubah, karena hasil getCollection bisa dipakai bersama antarhalaman saat build.
 */
export async function getProjects(lang: Lang = 'id') {
  let entries = await getCollection('projects');
  if (lang === 'en') {
    const translations = new Map((await getCollection('projectsEn')).map((e) => [e.id, e.data]));
    entries = entries.map((entry) => ({ ...entry, data: { ...entry.data, ...translations.get(entry.id) } }));
  }
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** Update terbaru dulu; tanggal sama diurutkan dari prefix nomor file terbesar. */
export async function getUpdates(lang: Lang = 'id') {
  let entries = await getCollection('updates');
  if (lang === 'en') entries = entries.map((entry) => ({ ...entry, data: { ...entry.data, ...updatesEn[entry.id] } }));
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf() || b.id.localeCompare(a.id));
}

/**
 * Path statis halaman detail project. `source` adalah entry yang body-nya dirender:
 * terjemahan Inggris bila ada, selain itu versi Indonesia.
 */
export async function getProjectPaths(lang: Lang = 'id') {
  const projects = await getProjects(lang);
  const updates = await getUpdates(lang);
  return Promise.all(
    projects.map(async (project, i) => ({
      params: { slug: project.id },
      props: {
        project,
        source: (lang === 'en' && (await getEntry('projectsEn', project.id))) || project,
        prev: projects[i - 1],
        next: projects[i + 1],
        related: updates.filter((u) => u.data.relatedProject?.id === project.id),
      },
    })),
  );
}

/** Slug kategori untuk query URL, mis. "Field Ops" → "field-ops". */
export const categorySlug = (category: string) => category.toLowerCase().replace(/\s+/g, '-');
