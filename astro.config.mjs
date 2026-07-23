// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://formax-j.com',
  integrations: [tailwind()],
  image: {
    domains: ['res.cloudinary.com', 'image.qwenlm.ai'],
  },
  // Inyectar Google Fonts en el <head>
  vite: {
    optimizeDeps: {
      exclude: ['@astrojs/tailwind'],
    },
  },
});