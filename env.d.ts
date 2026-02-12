/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_DOMAIN: string;
  readonly PUBLIC_FORMSPREE_ID?: string;
  readonly PUBLIC_FORMSPREE_CONTACT_ID?: string;
  readonly PUBLIC_FORMSPREE_QUOTE_ID?: string;
  readonly PUBLIC_FORMSPREE_SUBSCRIBE_ID?: string;
  readonly PUBLIC_FORMSPREE_WAITLIST_ID?: string;
  readonly PUBLIC_FORMSPREE_APPLICATION_ID?: string;
  readonly PUBLIC_FORMSPREE_MULTI_STEP_QUOTE_ID?: string;
  readonly PUBLIC_FORMSPREE_BUDGET_TOOL_ID?: string;
  readonly PUBLIC_GOOGLE_TRANSLATE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
