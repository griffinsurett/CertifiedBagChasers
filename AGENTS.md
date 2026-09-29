# Certified Bag Chasers

Project mode. Read `../greastro/AGENTS.md` for the shared architecture rules and
`../AGENTS.md` for authenticated Vercel verification. Keep this site's design.

- OnlineBusiness: Certified Bag Chasers LLC; founder Arold Norelus, discovered
  through the JSON author's `founder` tag. Identity lives in siteData and authors.
- JSON author references an MDX biography in `about-us` through the query system.
  Preserve its dynamic CMT level and existing authored profile route.
- `products` is a merchandising collection, not a schema type. Thin Product,
  Service and Course layouts reuse BarebonesCustomLayout without changing UI.
  Preserve book variants/parentage, Whop links, unpriced mentorship and waitlist.
- Use Greastro's schema folder and shared breadcrumb resolver. CBC currently has
  no visible breadcrumb UI; do not add it merely to emit BreadcrumbList.
- Screenshot-only social proof is not written Review/rating data. Custom written
  review renderers use the same prepared quotes for display and schema; never
  default missing ratings. Placement does not imply a reviewed offering.
- Blog sample is draft and the unused index is disabled. Publish real articles
  before enabling the blog. Generated robots/LLMs files are never hand-edited.
- Build/typecheck/output/external validation and browser gates are documented in
  `docs/SCHEMA_MIGRATION.md`. The Vercel project is `certified-bag-chasers`, ID
  `prj_4XPJZPDs9sry4reEqtHENiJ6r9PQ`. Use the workspace helper; no stored secrets
  in this repository. New sites follow `../greastro/docs/VERCEL_SETUP.md`.

## Sanctioned third parties & endpoints

These are the existing integrations, recorded during migration; none is new:

- Formspree (`formspree.io/f/`, public environment IDs): contact, waitlist and
  mentorship forms. Do not submit real enquiries while testing.
- Google Analytics 4 (`googletagmanager.com`, Google Analytics collection hosts),
  Vercel Analytics/Speed Insights: retain existing consent gating and settings.
- Zest 2.7.0 owns cookie consent; existing `/api/geo` reads Vercel geo headers.
  Do not restore the removed legacy consent engine or weaken its fail-closed mode.
- Google Fonts for Inter/Oswald; optional existing Google Translate fallback in
  the language integration. Preserve current CSP and integration configuration.
- Whop, Amazon, Audible, Apple Books, Spotify and Dropbox are outbound purchase,
  access or download links, not new API integrations.

Existing security headers, accessibility preferences, analytics and form targets
must remain intact. See `docs/BREADCRUMBS.md` and `src/utils/schema/README.md`.
