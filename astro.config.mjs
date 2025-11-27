import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jessynapse-portfolio.vercel.app', // Will be updated after Vercel deployment
  integrations: [mdx(), tailwind()],
  output: 'static',
});
