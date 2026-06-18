// src/siteData.ts - Compatible with both Astro and React
const SITE_DOMAIN = "certifiedbagchasers.com";
export const SITE_URL = `https://${SITE_DOMAIN}`;

export const siteData = {
  title: "Certified Bag Chasers",
  legalName: "Certified Bag Chasers LLC",
  description: "A trading community built on real education—learn to trade, invest, and build wealth with discipline. No hype, no get-rich-quick schemes.",
  domain: SITE_DOMAIN,
  url: SITE_URL,
  location: "United States",
  founder: "Arold Norelus",
  cmtLevel: "Level II",
  tagline: "Stop Chasing Quick Fixes",
  whopLoginLink: "https://whop.com/login",
};

export const ctaData = {
  text: "Join The Community",
  link: "https://whop.com/joined/certifiedbagchasers/products/4certifiedbagchasers/",
  secondaryText: "Get The Book",
  secondaryLink: "/products/book",
};
