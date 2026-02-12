// src/siteData.ts - Compatible with both Astro and React
const siteDomain = import.meta.env.PUBLIC_SITE_DOMAIN;

export const siteData = {
  title: "Certified Bag Chasers",
  legalName: "Certified Bag Chasers LLC",
  description: "A financial education provider built for people who want to understand how markets actually work—not chase shortcuts. No get-rich-quick schemes, just real strategies that create lasting wealth.",
  domain: siteDomain,
  url: `https://${siteDomain}`,
  location: "United States",
  founder: "Arold Norelus",
  tagline: "Stop Chasing Quick Fixes",
};

export const ctaData = {
  text: "Join The Community",
  link: "https://whop.com/checkout/plan_AXxsDfihgXddN",
  secondaryText: "Get The Book",
  secondaryLink: "/products/book",
};
