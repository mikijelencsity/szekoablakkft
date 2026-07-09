// Kényelmi hozzáférés a generált referenciaadatokhoz (lib/referenciak.ts).
import { categories, pairs } from "./referenciak";

export { categories, pairs };

const bySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

export function category(slug: string) {
  return bySlug[slug];
}

export function catImages(slug: string) {
  return bySlug[slug]?.images ?? [];
}

export function firstSrc(slug: string): string | undefined {
  return bySlug[slug]?.images[0]?.src;
}

// N kép forrás-útja egy kategóriából, adott eltolással.
export function srcs(slug: string, count: number, offset = 0): string[] {
  return catImages(slug)
    .slice(offset, offset + count)
    .map((i) => i.src);
}
