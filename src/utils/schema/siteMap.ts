// CBC's displayed price/status/note fields, shared across offering kinds.
import type { SchemaMap } from './types';
import { buildOffer } from './transforms';
import { byTag } from '@/utils/query';

const offers: SchemaMap[string][string] = {
  resolve: ({ data, url }) => buildOffer({
    name: data.title,
    price: data.status === 'free' && data.price === 'FREE' ? 0 : data.price,
    length: data.length ?? (/\/month\b/i.test(data.priceNote ?? '') ? 'Monthly' : undefined),
  }, url),
};

export const schemaMap: SchemaMap = {
  business: {
    email: { resolve: async () => (await byTag('contact-us', 'email').first())?.data.title },
  },
  product: { offers },
  service: { offers, areaServed: false },
  course: { offers },
};
