import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  site: 'https://sprach-eck.at',
  output: 'static',
  vite: {
    optimizeDeps: {
      include: ['alpinejs']
    }
  }
});