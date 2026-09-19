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
    // `/sitemap.xml` is rewritten to this integration's sitemap-index.xml in
    // vercel.json — tools that guess /sitemap.xml got a 404 and concluded
    // there was no sitemap at all.
    //
    // `lastmod` is a native option. Build time is the honest value for a
    // static site: it IS when each page was generated. Per-page content dates
    // would need `serialize`.
    sitemap({ lastmod: new Date() }),
    // Zest installs its cookie/storage/script interceptors head-inline, so it
    // must be injected before any tracker script is evaluated.
    zest({
      language: "en",
      config: {
        mode: "safe",
        policyUrl: "/privacy-policy",
        accentColor: "#c9a227",
        // Dark to match the site — "auto" followed the OS and rendered the
        // banner white on a black site.
        theme: "dark",
        position: "bottom-left",
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
        // Injected into the banner's Shadow DOM, which CANNOT see the page's
        // CSS variables — so the brand values are restated literally here.
        // They mirror global.css: --gradient-gold-metallic, --color-bg (#0a0a0a)
        // and the SecondaryButton's white border. Keep the two in sync.
        customStyles: `
          .zest-banner, .zest-modal {
            background: #0a0a0a !important;
            border: 1px solid rgba(255,255,255,0.12) !important;
            color: #ffffff !important;
          }
          .zest-text { color: #ffffff !important; }
          .zest-text-secondary { color: #b0b0b0 !important; }
          .zest-bg { background: #0a0a0a !important; }
          .zest-bg-secondary { background: #151515 !important; }
          .zest-border { border-color: rgba(255,255,255,0.12) !important; }
          .zest-accent, .zest-accent-text { color: #c9a227 !important; }

          .zest-btn {
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            transition: all .3s;
          }

          .zest-btn--primary {
            background: #0a0a0a !important;
            border: 2px solid #ffffff !important;
            color: #ffffff !important;
          }
          .zest-btn--primary:hover {
            background: rgba(255,255,255,0.1) !important;
          }

          .zest-btn[data-action="save"] {
            background: linear-gradient(170deg,
              #fffde8 0%, #f7e588 8%, #dfc040 20%, #c9a227 35%,
              #d4b254 50%, #8a6a18 70%, #5c4510 90%, #3d2e0a 100%) !important;
            border: none !important;
            color: #0a0a0a !important;
            text-shadow: 0 1px 0 rgba(255,255,255,0.3);
          }
          .zest-btn[data-action="save"]:hover {
            box-shadow: 0 10px 40px rgba(201,162,39,0.4);
            transform: translateY(-2px);
          }

          .zest-btn--ghost {
            background: transparent !important;
            border: none !important;
            color: #b0b0b0 !important;
            font-weight: 600;
          }
          .zest-btn--ghost:hover { color: #ffffff !important; }
        `,
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
