import Button from "@/components/Button/Button";
import ProductOverviewCard, {
  type ProductOverviewItem,
} from "@/components/LoopComponents/ProductOverviewCard";

interface ProductsShowcaseProps {
  items: ProductOverviewItem[];
}

const defaultFeatures = [
  "Daily market analysis & insights",
  "Weekly live Q&A sessions with Arold",
  "Private community of wealth builders",
];

function parsePriceNote(priceNote?: string) {
  if (!priceNote) {
    return {
      period: "/month",
      details: "Cancel anytime • 30-day guarantee",
    };
  }

  const parts = priceNote
    .split("•")
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length === 0) {
    return {
      period: "/month",
      details: "Cancel anytime • 30-day guarantee",
    };
  }

  if (parts[0].startsWith("/")) {
    return {
      period: parts[0],
      details: parts.slice(1).join(" • "),
    };
  }

  return {
    period: "",
    details: parts.join(" • "),
  };
}

export default function ProductsShowcase({ items }: ProductsShowcaseProps) {
  if (!items?.length) return null;

  const featured =
    items.find(
      (item) =>
        item.status !== "coming-soon" &&
        Array.isArray(item.tags) &&
        item.tags.includes("most-popular")
    ) || items.find((item) => item.status !== "coming-soon");

  const secondaryItems = items
    .filter((item) => item.slug !== featured?.slug)
    .slice(0, 4);

  const featuredHref = featured?.link || featured?.url;
  const isFeaturedExternal =
    typeof featuredHref === "string" && featuredHref.startsWith("http");
  const featuredPriceMeta = parsePriceNote(featured?.priceNote);
  const featuredFeatures =
    featured?.features && featured.features.length > 0
      ? featured.features.slice(0, 6)
      : defaultFeatures;

  return (
    <>
      {featured && (
        <div className="relative mb-12 overflow-hidden rounded-[20px] border-2 border-primary/50 bg-gradient-to-br from-bg-tertiary to-bg-secondary p-6 md:p-8 lg:p-12">
          <div className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-primary-900 via-primary-600 to-primary-200 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[1px] text-bg md:right-5 md:top-5 md:px-5 md:py-2">
            Most Popular
          </div>

          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="mb-4 text-4xl font-extrabold uppercase leading-tight">
                <span className="gold-metallic-heading">{featured.title}</span>
              </h2>

              {featured.description && (
                <p className="mb-6 text-lg leading-relaxed text-text-secondary">
                  {featured.description}
                </p>
              )}

              <ul className="mb-8 list-none p-0">
                {featuredFeatures.map((feature, index) => (
                  <li
                    key={`${feature}-${index}`}
                    className="mb-3 flex items-center gap-3 text-[#ccc]"
                  >
                    <span className="text-primary">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {featuredHref && (
                <Button
                  href={featuredHref}
                  variant="primary"
                  className="w-full text-lg"
                  target={isFeaturedExternal ? "_blank" : undefined}
                  rel={isFeaturedExternal ? "noopener noreferrer" : undefined}
                >
                  {featured.ctaText || "Learn More"} →
                </Button>
              )}
            </div>

            <div className="rounded-2xl border border-primary/20 bg-bg p-8 text-center md:p-10">
              <div className="mb-2 text-sm uppercase tracking-[2px] text-text-muted">
                Starting at
              </div>
              <div className="gold-metallic-heading text-6xl font-black md:text-7xl">
                {featured.price || "$49"}
              </div>
              <div className="mb-6 text-text-muted">
                {featuredPriceMeta.period || "/month"}
              </div>
              <div className="text-sm text-text-dim">
                {featuredPriceMeta.details || "Cancel anytime • 30-day guarantee"}
              </div>
            </div>
          </div>
        </div>
      )}

      {secondaryItems.length > 0 && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {secondaryItems.map((item) => (
            <ProductOverviewCard
              key={item.slug || item.title}
              item={item}
            />
          ))}
        </div>
      )}
    </>
  );
}
