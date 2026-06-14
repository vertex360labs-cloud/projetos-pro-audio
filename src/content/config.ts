import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.string().optional(),
      author: z.string().default('Equipe Projetos Pro Audio'),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      relatedSlugs: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };
