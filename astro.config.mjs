// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kentoushitani.github.io',
  base: '/SayakaCalligraphyClass',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // We're using our own base styles in global.css
    }),
  ],
});