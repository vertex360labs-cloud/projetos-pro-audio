import type { CollectionEntry } from 'astro:content';

type BlogEntry = CollectionEntry<'blog'>;

/** Em DEV inclui drafts para revisão local; em build de produção esconde. */
export function includeBlogEntry({
  data,
}: {
  data: BlogEntry['data'];
}): boolean {
  if (import.meta.env.DEV) return true;
  return !data.draft;
}

/** Listagens públicas omitem duplicatas que apontam canonical para outro artigo. */
export function includeInListings(entry: { data: BlogEntry['data'] }): boolean {
  return includeBlogEntry(entry) && !entry.data.canonical;
}

const RELATED_STOPWORDS = new Set([
  'para', 'com', 'uma', 'que', 'como', 'quando', 'vale', 'upgrade', 'audio',
  'áudio', 'estudio', 'estúdio', 'interface', 'monitoração', 'monitoracao',
  'papel', 'ideal', 'escolher', 'o', 'a', 'de', 'do', 'da', 'e', 'no', 'na',
]);

function tokenize(value: string): string[] {
  return value
    .toLowerCase()
    .split(/[^a-z0-9áéíóúâêôãõç+]+/i)
    .filter((token) => token.length > 2 && !RELATED_STOPWORDS.has(token));
}

function scoreRelated(post: BlogEntry, candidate: BlogEntry): number {
  const postTags = new Set(post.data.tags.map((tag) => tag.toLowerCase()));
  const sharedTags = candidate.data.tags.filter((tag) => postTags.has(tag.toLowerCase()));
  let score = sharedTags.length * 3;

  const titleTokens = new Set(tokenize(post.data.title));
  score += tokenize(candidate.data.title).filter((token) => titleTokens.has(token)).length * 4;
  score += tokenize(candidate.id).filter((token) => titleTokens.has(token)).length * 2;

  return score;
}

export function pickRelatedPosts(post: BlogEntry, allPosts: BlogEntry[], limit = 3): BlogEntry[] {
  const pool = allPosts.filter((item) => item.id !== post.id && includeInListings(item));
  const relatedSlugs = post.data.relatedSlugs ?? [];
  const fromFrontmatter = pool.filter((item) => relatedSlugs.includes(item.id));
  if (fromFrontmatter.length) return fromFrontmatter.slice(0, limit);

  return pool
    .map((item) => ({ item, score: scoreRelated(post, item) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.item.data.pubDate.valueOf() - a.item.data.pubDate.valueOf())
    .slice(0, limit)
    .map((entry) => entry.item);
}

export function getRelatedPostsByKeywords(posts: BlogEntry[], keywords: string[], limit = 3): BlogEntry[] {
  if (!keywords.length) return [];
  const needles = keywords.map((keyword) => keyword.toLowerCase());

  return posts
    .filter(includeInListings)
    .map((item) => {
      const haystack = `${item.id} ${item.data.title} ${item.data.tags.join(' ')}`.toLowerCase();
      const score = needles.reduce((total, keyword) => total + (haystack.includes(keyword) ? 1 : 0), 0);
      return { item, score };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || b.item.data.pubDate.valueOf() - a.item.data.pubDate.valueOf())
    .slice(0, limit)
    .map((entry) => entry.item);
}
