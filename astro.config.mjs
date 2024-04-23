import { defineConfig } from 'astro/config';

import remarkEleventyImage from "astro-remark-eleventy-image";

// https://astro.build/config
export default defineConfig({
  site: 'https://Kubrixss.github.io',
  integrations: [remarkEleventyImage()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img"],
    },
}
  
});