import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// /admin(Sveltia CMS)은 빈 칸을 '' 또는 null로 저장할 수 있으므로 둘 다 "없음"으로 받는다.
const optionalText = z
  .string()
  .nullish()
  .transform((v) => v || undefined);

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().nullish(),
    category: optionalText, // src/content/categories/<id>.json 의 id
    tags: z.array(z.string()).nullish().transform((v) => v ?? []),
    banner: optionalText, // 예: /images/uploads/banner.webp
    bannerAlt: optionalText,
    draft: z.boolean().default(false),
  }),
});

const categories = defineCollection({
  loader: glob({ base: './src/content/categories', pattern: '**/*.json' }),
  schema: z.object({
    name: z.string(),
    description: optionalText,
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    period: z.coerce.string(),
    role: optionalText,
    platform: optionalText,
    stack: z.array(z.string()).nullish().transform((v) => v ?? []),
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .nullish()
      .transform((v) => v ?? []),
    cover: optionalText, // 예: /images/uploads/portalhell.webp
    accent: z.string().default('#6366f1'),
    order: z.number().default(0),
    featured: z.boolean().default(true),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    lead: optionalText,
    image: optionalText,
  }),
});

export const collections = { posts, categories, projects, pages };
