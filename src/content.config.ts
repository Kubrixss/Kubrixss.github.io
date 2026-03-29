import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from "astro/zod";

const postsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string().optional(),
      author: z.string(),
      image: z.object({
        url: image(),
        alt: z.string().optional()
      }),
    }),
});

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      trailer: z.string().optional(),
      image: z.object({
        url: image(),
        alt: z.string().optional(),
      }),
      date_created: z.date(),
      link: z.string(),
      roles: z.array(z.string()),
      genre: z.array(z.string()),
      platform: z.string(),
      engine: z.string(),
      screenshots: z.array(
        z.object({
          url: image(),
          alt: z.string().optional(),
        })
      ),
    }),
});

export const collections = {
  posts: postsCollection,
  portfolio: portfolioCollection,
};
