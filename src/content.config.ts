// src/content.config.ts
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { GlobLoad, FileLoad } from "@/utils/loaders/loaderUtils";
import {
  baseSchema,
  MenuSchema,
  MenuItemFields,
  refSchema,
  imageInputSchema,
  iconSchema,
} from "./content/schema";
import { MenuItemsLoader } from "@/utils/loaders/MenuItemsLoader";

export const collections = {
  "menus": defineCollection({
    loader: FileLoad("menus", "menus.json"),
    schema: MenuSchema,
  }),

  "menu-items": defineCollection({
    loader: MenuItemsLoader(),
    schema: MenuItemFields,
  }),

  "contact-us": defineCollection({
    loader: FileLoad("contact-us", "contact-us.json"),
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        linkPrefix: z.string().optional(),
      }),
  }),

  "social-media": defineCollection({
    loader: FileLoad("social-media", "socialmedia.json"),
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        link: z.string().optional(),
      }),
  }),

  "legal": defineCollection({
    loader: GlobLoad("legal"),
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        effectiveDate: z
          .union([z.date(), z.string()])
          .optional()
          .transform((val) => {
            if (!val) return undefined;
            if (val instanceof Date) return val;
            return new Date(val);
          }),
      }),
  }),

  "about-us": defineCollection({
    loader: GlobLoad("about-us"),
    schema: ({ image }) =>
      baseSchema({ image })
  }),

  "blog": defineCollection({
    loader: GlobLoad("blog"),
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        author: refSchema("authors"),
        tags: z.array(z.string()).default([]),
        readingTime: z.number().optional(),
      }),
  }),

  "authors": defineCollection({
    loader: FileLoad("authors", "authors.json"),
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        email: z.string().email().optional(),
        social: z
          .object({
            twitter: z.string().url().optional(),
            github: z.string().url().optional(),
            linkedin: z.string().url().optional(),
            instagram: z.string().url().optional(),
            youtube: z.string().url().optional(),
            website: z.string().url().optional(),
          })
          .optional(),
        role: z.string().optional(),
        credentials: z.array(z.object({
          icon: z.string(),
          text: z.string(),
        })).optional(),
      }),
  }),

  "testimonials": defineCollection({
    loader: GlobLoad("testimonials"),
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        role: z.string().default("Customer"),
        company: z.string().optional(),
        rating: z.number().min(1).max(5).default(5),
        socialMediaPost: imageInputSchema({ image }),
        video: z.string().optional(),
        videoPoster: imageInputSchema({ image }),
        videoAspect: z.enum(["portrait", "landscape", "square"]).default("portrait"),
        resultsAmount: z.string().optional(),
        resultsPeriod: z.string().optional(),
        isVideo: z.boolean().default(false),
      }),
  }),

  "faq": defineCollection({
    loader: GlobLoad("faq"),
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        category: z.string().optional(),
      }),
  }),

  "promises": defineCollection({
    loader: GlobLoad("promises"),
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        cardSize: z.enum(["large", "wide", "small"]).default("small"),
      }),
  }),

  "topics": defineCollection({
    loader: GlobLoad("topics"),
    schema: ({ image }) =>
      baseSchema({ image }),
  }),

  "affiliates": defineCollection({
    loader: GlobLoad("affiliates"),
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        link: z.string().url(),
        openInNewTab: z.boolean().default(true),
      }),
  }),

  "products": defineCollection({
    loader: GlobLoad("products"),
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        featuredVideo: z
          .object({
            src: z.string(),
            title: z.string().optional(),
          })
          .optional(),
        longDescription: z.string().optional(),
        heroHighlights: z
          .array(
            z.object({
              title: z.string(),
              description: z.string().optional(),
              link: z.string().optional(),
            })
          )
          .max(5)
          .optional(),
        cta: z
          .object({
            eyebrow: z.string().optional(),
            title: z.string().optional(),
            description: z.string().optional(),
            ctaText: z.string().optional(),
          })
          .optional(),
        price: z.string().optional(),
        priceNote: z.string().optional(),
        link: z.string().url().optional(),
        status: z.enum(["available", "coming-soon", "free"]).default("available"),
        features: z.array(z.string()).default([]),
        ctaText: z.string().optional(),
        purchaseLinks: z
          .array(
            z.object({
              text: z.string(),
              url: z.string().url(),
              icon: iconSchema({ image }).optional(),
            })
          )
          .default([]),
        format: z
          .object({
            consumeType: z.string().optional(),
            delivery: z.string().optional(),
            availability: z.string().optional(),
            ctaText: z.string().optional(),
            highlights: z.array(z.string()).optional(),
          })
          .optional(),
      }),
  }),
};
