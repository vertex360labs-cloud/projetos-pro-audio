import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://projetosproaudio.com.br',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => ![
        '/conteudos/vale-o-upgrade/',
        '/conteudos/dream-studio-sessions/',
        '/conteudos/radar-pro-audio/',
        '/live-sound/wireless/',
        '/live-sound/projetos-de-sonorizacao/',
        '/projetos/',
        '/comparativos/pmc-vs-genelec/',
      ].some((path) => page.endsWith(path)),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
