// src/siteData.ts - Compatible with both Astro and React
const siteDomain = import.meta.env.PUBLIC_SITE_DOMAIN;

export const siteData = {
  title: "Certified Bag Chasers",
  legalName: "Certified Bag Chasers LLC",
  description: "Certified Bag Chasers is a personal finance education company dedicated to bringing you the best, most up-to-date information on personal finance, investing, and wealth-building strategy. No get-rich-quick schemes, just practical education you can apply with confidence.",
  domain: siteDomain,
  url: `https://${siteDomain}`,
  location: "United States",
  founder: "Arold Norelus",
  tagline: "Stop Chasing Quick Fixes",
  whopLoginLink: "https://whop.com/login",
};

export const ctaData = {
  text: "Join The Community",
  link: "https://whop.com/checkout/plan_AXxsDfihgXddN",
  secondaryText: "Get The Book",
  secondaryLink: "/products/book",
};
