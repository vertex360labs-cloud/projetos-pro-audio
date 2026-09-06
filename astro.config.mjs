import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://projetosproaudio.com.br';

const excludedPaths = new Set([
  '/conteudos/vale-o-upgrade',
  '/conteudos/dream-studio-sessions',
  '/conteudos/radar-pro-audio',
  '/live-sound/wireless',
  '/live-sound/projetos-de-sonorizacao',
  '/projetos',
  '/comparativos/pmc-vs-genelec',
]);

function pathnameOf(page) {
  const path = page.replace(/^https?:\/\/[^/]+/i, '').split(/[?#]/, 1)[0];
  return path.replace(/\/+$/, '') || '/';
}

function canonicalSitemapUrl(page) {
  const pathname = pathnameOf(page);
  return pathname === '/' ? SITE_URL : `${SITE_URL}${pathname}`;
}

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !excludedPaths.has(pathnameOf(page)),
      serialize(item) {
        return {
          ...item,
          url: canonicalSitemapUrl(item.url),
        };
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
