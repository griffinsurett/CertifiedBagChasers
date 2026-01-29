/**
 * SocialProofCard Component
 *
 * Displays a social media screenshot testimonial card.
 * Used in the social proof masonry grid for displaying Discord/social wins.
 */

interface SocialProofCardProps {
  image: string;
  alt?: string;
  size?: 'short' | 'medium' | 'tall';
  className?: string;
}

const sizeClasses = {
  short: 'h-[170px]',
  medium: 'h-[250px]',
  tall: 'h-[430px]',
};

const SocialProofCard = ({
  image,
  alt = "Certified Bag Chasers community win",
  size = 'medium',
  className = '',
}: SocialProofCardProps) => {
  return (
    <div
      className={`rounded-[26px] border border-primary/20 bg-gradient-to-br from-[#121212] to-[#1c1b18] shadow-[0_15px_40px_rgba(0,0,0,0.3)] p-3 ${sizeClasses[size]} ${className}`}
    >
      <div className="w-full h-full rounded-[20px] overflow-hidden bg-black/60 flex items-center justify-center">
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
