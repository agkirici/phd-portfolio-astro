import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://agkirici.github.io',
  base: '/phd-portfolio-astro',
  integrations: [mdx(), tailwind()],
  output: 'static',
});
