import { defineConfig } from 'astro/config';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "ignore",
  site: 'https://isitdaylightsaving.com',
  integrations: []
});