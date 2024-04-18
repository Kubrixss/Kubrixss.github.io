import { z, defineCollection } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});

const portfolioCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    date_created: z.date(),
    link: z.string(),
    roles: z.array(z.string()),
    genre: z.array(z.string()),
    platform: z.string(),
    engine: z.string(),
    screenshots: z.array(
      z.object({
        url: z.string(),
        alt: z.string(),
      })
    ),
  }),
});

export const colletions = {
  posts: postsCollection,
  portfolio: portfolioCollection,
};
