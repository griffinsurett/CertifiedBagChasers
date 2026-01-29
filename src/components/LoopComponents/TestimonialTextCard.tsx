/**
 * TestimonialTextCard Component
 *
 * Displays a text-based testimonial with author info, quote, and rating.
 * Used in the testimonials masonry grid.
 */

interface TestimonialTextCardProps {
  name: string;
  role?: string;
  quote: string;
  rating?: number;
  resultsAmount?: string;
  resultsPeriod?: string;
  className?: string;
  spanColumns?: boolean;
}

const TestimonialTextCard = ({
  name,
  role = "Customer",
  quote,
  rating = 5,
  resultsAmount,
  resultsPeriod,
  className = '',
  spanColumns = false,
}: TestimonialTextCardProps) => {
  // Get first letter of name for avatar
  const initial = name.charAt(0).toUpperCase();

  return (
    <div className={`testimonial-text-card ${spanColumns ? 'tm-span-2' : ''} ${className}`}>
      {/* Results badge */}
      {resultsAmount && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-900 via-primary to-primary-100 py-2 px-5 rounded-bl-xl">
          <span className="text-bg font-extrabold text-sm">
            {resultsAmount}
          </span>
        </div>
      )}

      {/* Author info */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#1a1a1a] to-bg-secondary rounded-full border-2 border-primary/30 flex items-center justify-center font-bold text-primary">
          {initial}
        </div>
        <div>
          <div className="font-bold text-white">{name}</div>
          {resultsPeriod ? (
            <div className="text-xs text-text-muted">{resultsPeriod}</div>
          ) : (
            <div className="text-xs text-text-muted">{role}</div>
          )}
        </div>
      </div>

      {/* Quote */}
      <p className="text-text-secondary leading-relaxed italic">
        "{quote}"
      </p>

      {/* Star rating */}
      <div className="flex gap-1 mt-4">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-primary text-base">
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialTextCard;
