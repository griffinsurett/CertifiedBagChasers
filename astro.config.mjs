// astro.config.mjs
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { buildRedirectConfig } from './src/utils/redirects';
import { manualChunks, assetFileNames } from './vite.chunks.js';
import iconGeneratorIntegration from './src/integrations/icons/icon-generator.integration.mjs';
import clientDirectivesIntegration from './src/integrations/client-directives/client-directives.integration.mjs';
import conditionalPartytown from './src/integrations/partytown/partytown.integration.mjs';
import zest from "@freshjuice/zest-astro";
import robotsLlmsIntegration from './src/integrations/robots-llms/robots-llms.integration.ts';
import { SITE_URL } from './src/content/siteData.ts';

const redirects = await buildRedirectConfig();
const siteUrl = SITE_URL;

console.log(`Site URL: ${siteUrl}`);

export default defineConfig({
  site: siteUrl,
  trailingSlash: 'never',
  server: { port: 6543 },
  adapter: vercel(),
  output: 'static',
  
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@site': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [tailwindcss()],
    build: {
      assetsInlineLimit: 10240, // 10KB - will inline your 7.3KB CSS automatically
      cssCodeSplit: true,
      cssMinify: 'esbuild',
      rollupOptions: {
        output: {
          assetFileNames,
          manualChunks,
        },
      },
    },
    css: {
      devSourcemap: false,
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
    },
  },
  
  integrations: [
    clientDirectivesIntegration(),
    iconGeneratorIntegration(),
    mdx(),
    react(),
    sitemap(),
    // Zest installs its cookie/storage/script interceptors head-inline, so it
    // must be injected before any tracker script is evaluated.
    zest({
      language: "en",
      config: {
        mode: "safe",
        policyUrl: "/privacy-policy",
        accentColor: "#4ade80",
        theme: "auto",
        branding: false,
        // The footer's "Your Privacy Choices" link already reopens the
        // settings modal on every page, so the floating widget is redundant.
        showWidget: false,
        consentModeGoogle: true,
        respectDNT: true,
        dntBehavior: "reject",
        // patterns.<category> REPLACES that category's built-in list, so the
        // five Zest defaults are restated alongside our two site keys.
        // Without this, user-language and googtrans fall through to
        // "marketing" and functional-only visitors lose translation.
        patterns: {
          functional: [
            "^user-language$",
            "^googtrans$",
            "^lang",
            "^locale",
            "^theme",
            "^preferences",
            "^ui_",
          ],
        },
      },
    }),
    conditionalPartytown(),
    robotsLlmsIntegration(),
  ],
  
  build: {
    inlineStylesheets: 'always',
    split: true,
  },

  prefetch: false,
  
  compressHTML: true,
  redirects: {
    ...redirects,
    '/feed': '/',
    '/feed/': '/',
    '/values': '/',
    '/values/commitment-to-financial-literacy': '/',
    '/values/commitment-to-financial-literacy/': '/',
  },

  experimental: {
    clientPrerender: false,
  },
});
