# Certified Bag Chasers schema migration

2026-09-29. Current template runtime ported from Greastro `fe2bd0a`, including the
shared breadcrumb system. The generator's draft exclusion fix is also shared
back to Greastro. Implementation is ready for release verification; browser
interaction checks remain pending because computer automation was interrupted
and then timed out. Do not call those checks passed.

## Data and integration decisions

- Business: `OnlineBusiness`, Certified Bag Chasers LLC. Arold Norelus comes
  from the JSON author's founder tag. No physical office/hours are fabricated.
- The original MDX author biography is retained in `about-us/arold-biography.mdx`;
  its explicit author reference preserves dynamic `siteData.cmtLevel`, images,
  credentials and the existing authored profile page. This is a real profile,
  unlike the empty author pages previously disabled on other sites.
- `products` remains the merchandising collection. Thin layouts declare Product
  for three book formats and the free budgeting download, Service for Discord
  community access and mentorship, and Course for the upcoming course. They all
  reuse BarebonesCustomLayout and preserve each MDX design.
- Prices are the displayed values: $25/$19.99/$24.99, a free $0 download, and $50
  monthly community access. Mentorship's “Apply” is not a price. The upcoming
  course has no price, availability date, invented workload or instructor claim.
- The only price/billing/contact differences live in `utils/schema/siteMap.ts`.
  The published contact email comes from the existing tagged entry's `title`.
- Shared preparation, canonical URLs, primary-parent navigation and query/layout
  resolution feed schema. Child book breadcrumbs include the parent book page.
  No new visible breadcrumb UI is mounted. The reusable component is available.
- FAQ schema captures the two answers rendered by the existing MDX bridge.
  The accordion displays body content, so its unused description prop is not
  silently added to either the UI or schema.
- The active testimonial sections show screenshots. They emit no written Review
  or AggregateRating. Book written-review blocks are commented out in content;
  the migrated written/masonry variants use their exact displayed quote fields
  if enabled later. Existing explicit ratings stay in content; no defaults exist.
- Retired the remaining two unmounted consent components that imported a removed
  consent engine. Zest, its geo endpoint, preferences and security headers remain.
- Drafted the empty Greastro/MDX sample post and disabled the unused blog index.
  Blog metadata is now branded for future use. The draft must not appear in
  routes, sitemaps, `llms.txt` or `llms-full.txt`. Fixed the generator, not output.

## Verification

- Production build passes. Final output: 18 HTML files including two Partytown
  helper documents; 16 schema-bearing pages, 38 JSON-LD blocks, 15 breadcrumb
  lists, two FAQ questions, seven offering subjects. Zero audit errors.
- Typecheck: 0 errors, 0 warnings (71 hints), down from the five baseline errors
  in obsolete consent files. No blanket exclusions were added.
- Six inherited unit tests pass: aggregation/deduplication, sanitized answers,
  numeric prices/ratings, safe serialization, shared author merge and reload.
- `tests/site-schema.py` checks actual built offering types/prices/provider IDs,
  monthly billing, parent book breadcrumbs, founder, email, biography, FAQ,
  screenshot-only review exclusion, draft routes and regenerated AEO files.
- Seven public JSON-LD snippets passed Schema.org validation with zero errors or
  warnings: home, FAQ, audiobook, Discord, mentorship, course and free download.
- Compared all 20 baseline HTML files' page text, links and images. The only
  differences are removal of the two demo blog pages; all retained pages match.
- Pending browser gates: open/close FAQ answers; inspect retained biography;
  navigate social screenshot carousel; switch book formats and verify displayed
  prices and links; check course/mentorship modal opening without submitting.

Run after a clean build:

```sh
node --experimental-strip-types --test tests/*.test.mjs
python3 tests/schema-output.py .
python3 tests/breadcrumb-output.py .
python3 tests/site-schema.py
```

Typecheck in this shared workspace uses the already-installed checker:
`node ../greastro/node_modules/@astrojs/check/bin/astro-check.js`.

Prior uncommitted video-thumbnail utility/integration work and deletion of three
unused generated thumbnail files are separate from this migration. Keep those
changes intact and out of the schema release; verify the staged release too.
Production/deployment evidence goes in `schema-validation/`. No access keys are
stored there. Live verification uses the workspace's existing approved Codex key;
no security/protection or endpoint changes are part of this release.
