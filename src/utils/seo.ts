import type { ImageMetadata } from 'astro';
import { SITE } from '@/config/site';

export interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string | ImageMetadata;
  ogType?: 'website' | 'article';
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

export function getCanonicalUrl(path: string): string {
  const origin = SITE.url.replace(/\/+$/, '');
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const url = new URL(normalized, `${origin}/`);
  const pathname = url.pathname.replace(/\/+$/, '') || '/';
  if (pathname === '/') return origin;
  return `${origin}${pathname}${url.search}${url.hash}`;
}

export function resolveOgImage(ogImage?: string | ImageMetadata): string {
  if (!ogImage) return `${SITE.url}/images/hero-studio.jpg`;
  if (typeof ogImage === 'string') {
    return ogImage.startsWith('http') ? ogImage : getCanonicalUrl(ogImage);
  }
  return new URL(ogImage.src, SITE.url).href;
}

export function buildSEO({
  title,
  description = SITE.description,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
  publishedTime,
  modifiedTime,
  author,
  tags,
}: SEOProps) {
  const pageTitle = title ? `${title} | ${SITE.name}` : SITE.title;
  const canonicalUrl = canonical ? getCanonicalUrl(canonical) : SITE.url;
  const imageUrl = resolveOgImage(ogImage);

  return {
    title: pageTitle,
    description,
    canonical: canonicalUrl,
    og: {
      type: ogType,
      url: canonicalUrl,
      title: pageTitle,
      description,
      image: imageUrl,
      siteName: SITE.name,
      locale: SITE.locale,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: pageTitle,
      description,
      image: imageUrl,
    },
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    publishedTime,
    modifiedTime,
    author: author ?? SITE.author.name,
    tags,
  };
}
