/**
 * SocialProofCard Component
 *
 * Displays a social media screenshot testimonial card.
 * Styled to support both framed and bare carousel presentations.
 */

interface SocialProofCardProps {
  image: string;
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
      : 'rounded-[26px] border border-primary/20 bg-gradient-to-br from-[#121212] to-[#1c1b18] shadow-[0_15px_40px_rgba(0,0,0,0.3)] p-3';
  const innerClasses = isBare ? 'rounded-none bg-transparent' : 'rounded-[20px] bg-black/60';

  return (
    <div
      className={`${outerClasses} ${sizeClasses[size]} ${className}`}
    >
      <div className={`w-full h-full overflow-hidden flex items-center justify-center ${innerClasses}`}>
        <img
          src={image}
          alt={alt}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default SocialProofCard;
