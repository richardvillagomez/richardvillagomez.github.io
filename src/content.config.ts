import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.string().trim().min(1);

const posts = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content/posts'
	}),
	schema: ({ image }) =>
		z
			.object({
				title: text,
				description: text,
				publishedAt: z.coerce.date(),
				updatedAt: z.coerce.date().optional(),
				tags: z.array(text).default([]),
				featured: z.boolean().default(false),
				heroImage: image().optional(),
				heroImageAlt: text.optional(),
				draft: z.boolean().default(false)
			})
			.superRefine((data, ctx) => {
				if (data.heroImage && !data.heroImageAlt) {
					ctx.addIssue({
						code: 'custom',
						path: ['heroImageAlt'],
						message: 'heroImageAlt is required when heroImage is set'
					});
				}
			})
});

export const collections = { posts };
