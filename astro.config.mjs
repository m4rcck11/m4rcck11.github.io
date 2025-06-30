import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: process.env.NODE_ENV === 'production' ? '/markdev/' : '/',
  server: {
    port: 3000,
    host: true
  }
}); 