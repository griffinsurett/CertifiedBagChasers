import Button from "@/components/Button/Button";
import Icon from "@/components/Icon";
import type { CSSProperties } from "react";

export interface ProductOverviewItem {
  slug?: string;
  title?: string;
  description?: string;
  icon?: any;
  price?: string;
  priceNote?: string;
  features?: string[];
  tags?: string[];
  ctaText?: string;
  link?: string;
  url?: string;
  status?: "available" | "coming-soon" | "free";
}

interface ProductOverviewCardProps {
  item: ProductOverviewItem;
  className?: string;
}

const isExternalLink = (href?: string) =>
  typeof href === "string" && href.startsWith("http");

export default function ProductOverviewCard({
  item,
  className = "",
}: ProductOverviewCardProps) {
  const href = item.link || item.url;
  const isComingSoon = item.status === "coming-soon";
  const isFree = item.status === "free" || item.price?.toUpperCase() === "FREE";
  const ctaText = item.ctaText || (isComingSoon ? "Join Waitlist" : "Learn More");
  const gradientIdBase = String(item.slug || item.title || "product-overview-icon")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const gradientId = `product-overview-icon-gold-gradient-${gradientIdBase || "default"}`;
  const iconStyle = {
    "--product-icon-gradient": `url(#${gradientId})`,
    color: "var(--color-accent)",
  } as CSSProperties;

  return (
    <div
      className={`relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#111111] to-[#0a0a0a] p-7 md:p-8 ${className}`}
    >
      {isComingSoon && (
        <div className="absolute top-4 right-4 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1px] text-text-secondary">
          Coming Soon
        </div>
      )}

      {item.icon && (
        <div className="mb-5 flex items-center justify-center">
          <svg
            aria-hidden="true"
            width="0"
            height="0"
            focusable="false"
            className="pointer-events-none h-0 w-0 overflow-hidden"
          >
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--color-accent-50)" />
                <stop offset="8%" stopColor="var(--color-accent-100)" />
                <stop offset="20%" stopColor="var(--color-accent-300)" />
                <stop offset="35%" stopColor="var(--color-accent-500)" />
                <stop offset="50%" stopColor="var(--color-accent-400)" />
                <stop offset="70%" stopColor="var(--color-accent-700)" />
                <stop offset="90%" stopColor="var(--color-accent-800)" />
                <stop offset="100%" stopColor="var(--color-accent-900)" />
              </linearGradient>
            </defs>
          </svg>
          <Icon
            icon={item.icon}
            size="xl"
            className="h-14 w-14 product-icon-gradient"
            style={iconStyle}
          />
        </div>
      )}

      <h3 className="mb-4 text-center text-[28px] font-bold uppercase leading-tight">
        <span className="gold-metallic-heading">{item.title}</span>
      </h3>

      {item.description && (
        <p className="mb-6 text-center text-text-muted leading-relaxed">{item.description}</p>
      )}

      <div className="mb-6 text-center">
        {isComingSoon ? (
          <span className="text-2xl font-extrabold text-text-dim">Price TBA</span>
        ) : (
          <span className="text-2xl font-extrabold text-white">
            {item.title?.toLowerCase().includes("book") && item.price ? "From " : ""}
            <span className="gold-metallic-heading">{item.price || "Learn More"}</span>
          </span>
        )}
        {item.priceNote && !isComingSoon && (
          <p className="mt-1 text-sm text-text-dim">{item.priceNote}</p>
        )}
      </div>

      {href ? (
        <Button
          href={href}
          variant={isFree ? "primary" : "secondary"}
          className={`w-full ${isComingSoon ? "opacity-80" : ""}`}
          target={isExternalLink(href) ? "_blank" : undefined}
          rel={isExternalLink(href) ? "noopener noreferrer" : undefined}
        >
          {ctaText}
        </Button>
      ) : (
        <button
          type="button"
          className="w-full rounded-lg border-2 border-primary/35 px-6 py-3 text-sm font-bold uppercase tracking-[1px] text-primary opacity-60"
          disabled
        >
          {ctaText}
        </button>
      )}
    </div>
  );
}
