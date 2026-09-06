import type { CollectionEntry } from 'astro:content';

/** Em DEV inclui drafts para revisão local; em build de produção esconde. */
export function includeBlogEntry({
  data,
}: {
  data: CollectionEntry<'blog'>['data'];
}): boolean {
  if (import.meta.env.DEV) return true;
  return !data.draft;
}
