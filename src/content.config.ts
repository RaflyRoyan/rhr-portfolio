import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const PROJECT_CATEGORIES = ['Backend', 'Database', 'Dashboard', 'Monitoring System', 'Integration', 'Migration', 'Field Ops'] as const;
export const PROJECT_STATUSES = ['live', 'in-progress', 'archived'] as const;
export const UPDATE_CATEGORIES = ['Backend', 'Database', 'Dashboard', 'Tools'] as const;

const projects = defineCollection({
  // `slug` di frontmatter dipakai glob loader sebagai id entry (URL /projects/<slug>)
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      slug: z.string(),
      category: z.enum(PROJECT_CATEGORIES),
      summary: z.string(),
      role: z.string(),
      period: z.string(),
      status: z.enum(PROJECT_STATUSES),
      featured: z.boolean().default(false),
      order: z.number().int(),
      tech: z.array(z.string()).default([]),
      highlights: z.array(z.string()).default([]),
      cover: image().optional(),
      gallery: z.array(image()).optional(),
    }),
});

// Terjemahan bahasa Inggris: hanya teks; slug harus sama dengan project aslinya
const projectsEn = defineCollection({
  loader: glob({ base: './src/content/projects-en', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    role: z.string(),
    period: z.string(),
    highlights: z.array(z.string()).default([]),
  }),
});

const updates = defineCollection({
  loader: glob({ base: './src/content/updates', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(UPDATE_CATEGORIES),
    tech: z.array(z.string()).default([]),
    summary: z.string(),
    relatedProject: reference('projects').optional(),
  }),
});

export const collections = { projects, projectsEn, updates };
