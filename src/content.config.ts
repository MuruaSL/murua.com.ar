import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const trabajos = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/trabajos" }),
	schema: ({ image }) =>
		z.object({
			nombre: z.string(),
			gancho: z.string(),
			resumen: z.string(),
			url: z.string().url().optional(),
			año: z.string(),
			portada: image(),
			portadaAlt: z.string(),
			destacado: z.boolean().default(false),
			orden: z.number(),
		}),
});

export const collections = { trabajos };
