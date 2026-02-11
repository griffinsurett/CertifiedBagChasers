// src/components/LoopTemplates/ProductTable.tsx
/**
 * ProductTable Component
 *
 * Loop template that renders a pricing grid of ProductCard components.
 * Filters out "coming-soon" products and displays them in a responsive grid.
 * The featured/most-popular product is highlighted with special styling.
 *
 * Uses Tailwind classes for all styling - no vanilla CSS dependencies.
 */

import Button from "@/components/Button/Button";
import Icon from "@/components/Icon";

export interface ProductTableProps {
  items: any[];
  className?: string;
}

export default function ProductTable({ items, className = "" }: ProductTableProps) {
  // Filter out coming-soon products - they're handled separately
  const availableProducts = items.filter(
    (item) => item.status !== "coming-soon"
  );

  if (availableProducts.length === 0) {
    return null;
  }

  // Reorder products so "most-popular" is always in the middle (index 1)
  const sortedProducts = reorderWithMostPopularInMiddle(availableProducts);

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch ${className}`}>
      {sortedProducts.map((product) => {
        // Only "most-popular" tag gets the featured card styling (gold border, badge, etc.)
        const isMostPopular = product.tags?.includes("most-popular");
        const isPremiumOffering = product.tags?.includes("premium-offering");
        const primaryHref = product.link || product.url;
        const hasInternalPage = Boolean(product.url);
        const isPrimaryExternal = typeof primaryHref === "string" && primaryHref.startsWith("http");
        const showLearnMore = Boolean(product.link && hasInternalPage);

        // Determine eyebrow text based on status/price
        let eyebrow = "";
        if (product.status === "free") {
          eyebrow = "Free Download";
        } else if (isMostPopular) {
          eyebrow = "Full Access";
        } else if (product.price === "Apply") {
          eyebrow = "Application Required";
        } else if (product.title?.toLowerCase().includes("book")) {
          eyebrow = "Amazon Bestseller";
        }

        return (
          <div
            key={product.slug || product.title}
            className={`
              relative flex flex-col text-center rounded-[20px] p-8 md:p-6
              border transition-all duration-300
              ${isMostPopular
                ? "bg-gradient-to-br from-[#1a1708] to-[#0f0d05] border-2 border-primary/40 scale-100 lg:scale-105 z-10 shadow-[0_25px_50px_rgba(201,162,39,0.15)]"
                : "bg-gradient-to-br from-[#0f0f0f] to-[#0a0a0a] border-white/5 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              }
            `}
          >
            {/* Gold glow effect for featured card */}
            {isMostPopular && (
              <div className="absolute inset-[-2px] rounded-[22px] bg-gradient-to-br from-primary-800 via-primary to-primary-100 opacity-30 -z-10" />
            )}

            {/* Most Popular Badge */}
            {isMostPopular && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-800 via-primary to-primary-100 text-bg py-2 px-5 rounded-full text-xs font-extrabold uppercase tracking-[1px] whitespace-nowrap z-10">
                🔥 Most Popular
              </div>
            )}

            {/* Eyebrow text */}
            {eyebrow && (
              <div className={`mb-6 ${isMostPopular ? "mt-2" : ""}`}>
                <span className="text-white text-sm font-semibold uppercase tracking-[3px]">
                  {eyebrow}
                </span>
              </div>
            )}

            {/* Icon - uses Icon component from collection data */}
            {product.icon && (
              <div className="mb-4 drop-shadow-lg flex items-center justify-center">
                <Icon icon={product.icon} size="xl" className="text-primary w-16 h-16" />
              </div>
            )}

            {/* Title */}
            <h3 className="text-[28px] font-extrabold font-display uppercase text-white mb-2">
              {product.title}
            </h3>

            {/* Description */}
            {product.description && (
              <p
                className={`text-sm leading-relaxed mb-6 flex-1 text-text-muted`}
              >
                {product.description}
              </p>
            )}

            {/* Price */}
            {product.price && (
              <div className="mb-6">
                <div className="flex items-baseline gap-2 justify-center">
                  <span className="text-5xl font-extrabold text-white">
                    {product.price}
                  </span>
                </div>
                {product.priceNote && (
                  <span className="text-[13px] text-text-dim block mt-1">
                    {product.priceNote}
                  </span>
                )}
              </div>
            )}

            {/* Features list */}
            {product.features && product.features.length > 0 && (
              <ul className="list-none p-0 mb-8 text-left">
                {product.features.map((feature: string, idx: number) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 mb-3 text-text-secondary text-sm"
                  >
                    <span className="text-accent">✓</span> {feature}
                  </li>
                ))}
              </ul>
            )}

            {/* Primary CTA prefers external product link when available */}
            {primaryHref && (
              <div className="mt-auto">
                <Button
                  variant={isMostPopular ? "primary" : isPremiumOffering ? "tertiary" : "secondary"}
                  href={primaryHref}
                  className="w-full py-3"
                  target={isPrimaryExternal ? "_blank" : undefined}
                  rel={isPrimaryExternal ? "noopener noreferrer" : undefined}
                >
                  {product.ctaText || "Learn More"} →
                </Button>

                {showLearnMore && (
                  <a
                    href={product.url}
                    className="inline-flex justify-center w-full mt-3 text-sm text-text-secondary hover:text-primary underline underline-offset-4 transition-colors"
                  >
                    Learn More
                  </a>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Reorders products so the "most-popular" item is always in the middle (index 1 for 3 items)
 */
function reorderWithMostPopularInMiddle(products: any[]): any[] {
  if (products.length < 3) return products;

  const mostPopularIndex = products.findIndex((p) => p.tags?.includes("most-popular"));

  // If no most-popular or already in middle, return as-is
  if (mostPopularIndex === -1 || mostPopularIndex === 1) return products;

  // Create a copy and move most-popular to the middle
  const reordered = [...products];
  const [mostPopular] = reordered.splice(mostPopularIndex, 1);
  reordered.splice(1, 0, mostPopular);

  return reordered;
}
