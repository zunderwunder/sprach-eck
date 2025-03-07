import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs({
      // Alpine.js spezifische Konfiguration
      include: ['*.astro', 'src/**/*.astro']
    })
  ],
  site: 'https://sprach-eck.at',
  output: 'static',
  vite: {
    optimizeDeps: {
      include: ['alpinejs', '@alpinejs/intersect']
    },
    // Verbesserte Asset-Handhabung
    assetsInclude: ['**/*.woff2']
  }
});