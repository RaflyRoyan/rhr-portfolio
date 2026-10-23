import { profile } from './data/profile';

export const SITE = {
  title: profile.shortName,
  description: profile.bio.short,
  author: profile.name,
  lang: 'id',
  ogImage: '/og-image.png',
} as const;

/** Section di halaman utama; dipakai navbar dan command palette. */
export const SECTIONS = [
  { id: 'about', label: 'Tentang' },
  { id: 'services', label: 'Layanan' },
  { id: 'projects', label: 'Project' },
  { id: 'experience', label: 'Pengalaman' },
  { id: 'stack', label: 'Teknologi' },
  { id: 'updates', label: 'Update' },
  { id: 'education', label: 'Pendidikan' },
  { id: 'contact', label: 'Kontak' },
] as const;

/** Section yang tampil langsung di navbar desktop. */
export const NAV_SECTION_IDS = ['about', 'projects', 'experience', 'stack', 'updates', 'contact'] as const;
