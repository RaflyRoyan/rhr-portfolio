import { getCollection } from 'astro:content';

/** Project urut berdasarkan `order` (kecil dulu). */
export async function getProjects() {
  const entries = await getCollection('projects');
  return entries.sort((a, b) => a.data.order - b.data.order);
}

/** Update terbaru dulu; tanggal sama diurutkan dari prefix nomor file terbesar. */
export async function getUpdates() {
  const entries = await getCollection('updates');
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf() || b.id.localeCompare(a.id));
}

/** Slug kategori untuk query URL, mis. "Field Ops" → "field-ops". */
export const categorySlug = (category: string) => category.toLowerCase().replace(/\s+/g, '-');
