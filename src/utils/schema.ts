import { SITE } from '@/config/site';
import { getCanonicalUrl } from '@/utils/seo';

const ORGANIZATION_ID = `${SITE.url}/#organization`;
const PERSON_ID = `${SITE.url}/#rodrigo-chiacchio`;
const WEBSITE_ID = `${SITE.url}/#website`;

function socialProfiles() {
  return [SITE.social.instagram, SITE.social.linkedin].filter(Boolean);
}

export function personSchema() {
  const profiles = socialProfiles();

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': PERSON_ID,
    name: SITE.author.name,
    jobTitle: SITE.author.role,
    description: SITE.author.bio,
    url: getCanonicalUrl('/sobre-rodrigo'),
    image: getCanonicalUrl('/images/rodrigo-bracos-cruzados.webp'),
    worksFor: { '@id': ORGANIZATION_ID },
    ...(profiles.length ? { sameAs: profiles } : {}),
  };
}

export function organizationSchema() {
  const profiles = socialProfiles();

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: getCanonicalUrl('/images/logo-dark.jpg'),
    },
    description: SITE.description,
    founder: { '@id': PERSON_ID },
    ...(profiles.length ? { sameAs: profiles } : {}),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: SITE.contact.email,
      availableLanguage: ['Portuguese', 'pt-BR'],
    },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: 'pt-BR',
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  modifiedTime?: string;
  image?: string;
  author?: string;
  tags?: string[];
}

export function articleSchema({
  title,
  description,
  slug,
  publishedTime,
  modifiedTime,
  image = '/images/hero-studio.jpg',
  author = SITE.author.name,
  tags,
}: ArticleSchemaInput) {
  const pageUrl = getCanonicalUrl(slug);

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: 'pt-BR',
    image: getCanonicalUrl(image),
    datePublished: publishedTime,
    dateModified: modifiedTime ?? publishedTime,
    url: pageUrl,
    author: {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: author,
      url: getCanonicalUrl('/sobre-rodrigo'),
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORGANIZATION_ID,
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: getCanonicalUrl('/images/logo-dark.jpg'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    ...(tags?.length ? { keywords: tags.join(', ') } : {}),
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: getCanonicalUrl(item.href) } : {}),
    })),
  };
}

export function serviceSchema(name: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    url: getCanonicalUrl(slug),
  };
}
