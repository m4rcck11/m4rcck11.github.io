import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  server: {
    port: 3000,
    host: true
  },
  // Performance optimizations
  build: {
    inlineStylesheets: 'auto',
    split: true,
    assets: 'assets'
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'particles': ['./src/components/hero-script.js']
          }
        }
      }
    },
    ssr: {
      noExternal: ['@astrojs/tailwind']
    }
  },
  // Image optimization
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
}); 