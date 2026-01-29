import { getCollection } from 'astro:content';

const promises = await getCollection('promises');
for (const p of promises) {
  console.log(p.id, ':', typeof p.data.featuredImage, p.data.featuredImage);
}
