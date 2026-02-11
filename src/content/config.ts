// src/content/config.ts
/**
 * Collection structure:
 *
 * src/content/[collection]/
 *   _meta.mdx         ← Collection config (frontmatter) + index page content (body)
 *                        The _ prefix excludes it from collection entries
 *   item-one.mdx      ← Collection item
 *   item-two.mdx      ← Collection item
 *
 * _meta.mdx frontmatter controls:
 * - title: Display name for the collection
 * - description: Collection description
 * - hasPage: Whether to generate /[collection] index page
 * - itemsHasPage: Whether items get individual pages
 * - featuredImage: Hero image for index page
 * - seo: SEO overrides
 */
import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { baseSchema, MenuSchema, MenuItemFields, refSchema, imageInputSchema } from "./schema";
import { MenuItemsLoader } from "@/utils/loaders/MenuItemsLoader";

export const collections = {
  // ── menus.json ─────────────────────────────────────────
  "menus": defineCollection({
    loader: file("src/content/menus/menus.json"),
    schema: MenuSchema,
  }),

  // ── menu-items.json ─────────────────────────────────────
  "menu-items": defineCollection({
    loader: MenuItemsLoader(),
    schema: MenuItemFields,
  }),

  "contact-us": defineCollection({
    loader: file("src/content/contact-us/contact-us.json"),
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        linkPrefix: z.string().optional(),
      }),
  }),

  "social-media": defineCollection({
    loader: file("src/content/social-media/socialmedia.json"),
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        link: z.string().optional(),
      }),
  }),

  // ── legal ───────────────────────────────────────────────
  "legal": defineCollection({
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
    schema: ({ image }) =>
      baseSchema({ image })
  }),

  "blog": defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        author: refSchema("authors"),
        tags: z.array(z.string()).default([]),
        readingTime: z.number().optional(),
      }),
  }),

  "authors": defineCollection({
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

  // ── testimonials ─────────────────────────────────────────
  "testimonials": defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        role: z.string().default("Customer"),
        company: z.string().optional(),
        rating: z.number().min(1).max(5).default(5),
        // Social media post screenshot (for social proof carousel)
        socialMediaPost: imageInputSchema({ image }),
        // Video testimonial file path (e.g., "@/assets/sample-video-testimonial.mp4")
        video: z.string().optional(),
        // Poster image for video (thumbnail before playing)
        videoPoster: imageInputSchema({ image }),
        // Video aspect ratio for grid layout: portrait (2 rows), landscape (2 cols), square (1x1)
        videoAspect: z.enum(["portrait", "landscape", "square"]).default("portrait"),
        // Results/gains amount (e.g., "+$22,000")
        resultsAmount: z.string().optional(),
        // Time period for results (e.g., "in 6 months")
        resultsPeriod: z.string().optional(),
        // Whether this is a video testimonial
        isVideo: z.boolean().default(false),
      }),
  }),

  "faq": defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        category: z.string().optional(),
      }),
  }),

  // ── promises ─────────────────────────────────────────────
  "promises": defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        // Card size for masonry layout: large, wide, small
        cardSize: z.enum(["large", "wide", "small"]).default("small"),
      }),
  }),

  // ── topics ───────────────────────────────────────────────
  "topics": defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }),
  }),

  // ── products ────────────────────────────────────────────
  "products": defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        // Optional featured video shown in product sidebars
        featuredVideo: z
          .object({
            src: z.string(),
            title: z.string().optional(),
          })
          .optional(),
        // Extended product page description (used in product layouts)
        longDescription: z.string().optional(),
        // Optional hero highlight boxes shown under product hero
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
        // Product CTA section configuration (displayed at end of product pages)
        cta: z
          .object({
            eyebrow: z.string().optional(),
            title: z.string().optional(),
            description: z.string().optional(),
            ctaText: z.string().optional(),
          })
          .optional(),
        // Pricing information
        price: z.string().optional(),
        priceNote: z.string().optional(),
        // External link (e.g., Whop, Amazon)
        link: z.string().url().optional(),
        // Product status
        status: z.enum(["available", "coming-soon", "free"]).default("available"),
        // List of features/benefits
        features: z.array(z.string()).default([]),
        // CTA button text
        ctaText: z.string().optional(),
      }),
  }),
};
