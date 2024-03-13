import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://golden-jelly-4a3dd7.netlify.app",
  integrations: [preact()]
});