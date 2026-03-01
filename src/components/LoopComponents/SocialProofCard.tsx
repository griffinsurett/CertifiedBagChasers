/**
 * SocialProofCard Component
 *
 * Displays a social media screenshot testimonial card.
 * Styled to support both framed and bare carousel presentations.
 */

interface SocialProofCardProps {
  image: {
    src: string;
    srcSet?: string;
    sizes?: string;
    width?: number;
    height?: number;
  };
  alt?: string;
  size?: 'short' | 'medium' | 'tall';
  className?: string;
  styleVariant?: 'primary' | 'parts';
  appearance?: 'framed' | 'bare';
}

const sizeClasses = {
  short: 'h-[120px] sm:h-[170px]',
  medium: 'h-[170px] sm:h-[250px]',
  tall: 'h-[240px] sm:h-[430px]',
};

const sizeHeights = {
  short: { mobile: 120, desktop: 170 },
  medium: { mobile: 170, desktop: 250 },
  tall: { mobile: 240, desktop: 430 },
};

const SocialProofCard = ({
  image,
  alt = "Certified Bag Chasers community win",
  size = 'medium',
  className = '',
  styleVariant = 'primary',
  appearance = 'framed',
}: SocialProofCardProps) => {
  const isBare = appearance === 'bare';
  const outerClasses = isBare
    ? 'rounded-none text-primary shadow-none ring-0 border-0 bg-transparent p-0'
    : styleVariant === 'parts'
      ? 'rounded-[26px] border border-white/25 bg-white/8 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur-sm p-3'
      : 'rounded-[26px] cbc-border bg-gradient-to-br from-[#121212] to-[#1c1b18] shadow-[0_15px_40px_rgba(0,0,0,0.3)] p-3';
  const innerClasses = isBare ? 'rounded-none bg-transparent' : 'rounded-[20px] bg-black/60';
  const aspectRatio = image.width && image.height ? image.width / image.height : 1;
  const cardHeights = sizeHeights[size];
  const mobilePixelWidth = Math.max(80, Math.round(cardHeights.mobile * aspectRatio));
  const desktopPixelWidth = Math.max(100, Math.round(cardHeights.desktop * aspectRatio));
  const computedSizes = image.width && image.height
    ? `(max-width: 640px) min(calc(100vw - 4rem), ${mobilePixelWidth}px), (max-width: 1024px) min(calc((100vw - 8rem) / 2), ${desktopPixelWidth}px), min(340px, ${desktopPixelWidth}px)`
    : image.sizes || "(max-width: 640px) calc(100vw - 4rem), (max-width: 1024px) calc((100vw - 8rem) / 2), 340px";

  return (
    <div
      className={`${outerClasses} ${sizeClasses[size]} ${className}`}
    >
      <div className={`w-full h-full overflow-hidden flex items-center justify-center ${innerClasses}`}>
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={computedSizes}
          alt={alt}
          width={image.width}
          height={image.height}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default SocialProofCard;
