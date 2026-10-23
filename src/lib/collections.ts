import { getCollection } from 'astro:content';

const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
  b.data.date.valueOf() - a.data.date.valueOf();

/** Project terbaru dulu; draft hanya tampil saat dev. */
export async function getProjects() {
  const entries = await getCollection('projects', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort(byDateDesc);
}

/** Update terbaru dulu; draft hanya tampil saat dev. */
export async function getUpdates() {
  const entries = await getCollection('updates', ({ data }) => import.meta.env.DEV || !data.draft);
  return entries.sort(byDateDesc);
}
