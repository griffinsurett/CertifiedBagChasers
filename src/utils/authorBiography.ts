import { render } from "astro:content";
import { find, normalizeReference } from "@/utils/query";

/** JSON identity references rich content through the existing collection system. */
export async function authorBiography(author: { biography?: unknown }) {
  const [ref] = normalizeReference(author.biography);
  if (!ref?.collection) return null;
  const entry = await find(ref.collection, ref.id);
  if (!entry) throw new Error(`Missing author biography: ${ref.collection}/${ref.id}`);
  return (await render(entry as any)).Content;
}
