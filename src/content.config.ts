import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { LOCALES } from './i18n/config';

/** One string per locale; every locale is required. */
const localized = z.record(z.enum(LOCALES), z.string());

/** Page copy as Markdown, one file per route and locale: `<route>.<locale>.md`. */
const pages = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/pages',
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    updated: z.coerce.date().optional(),
  }),
});

/** Hand-written project cards, one JSON per project, every text field in every locale. */
const projects = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    title: localized,
    meta: localized,
    summary: localized,
    stack: z.array(z.string()),
    url: z.url().optional(),
  }),
});

export const collections = { pages, projects };
