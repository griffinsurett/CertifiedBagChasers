/**
 * WhopRating Component
 *
 * Displays star rating with "4.9/5 on Whop" branding.
 * Used under CTA buttons in Hero and CTA sections.
 */

interface WhopRatingProps {
  className?: string;
}

const WhopRating = ({ className = "" }: WhopRatingProps) => {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className="text-primary text-lg">★</span>
        ))}
      </div>
      <span className="text-white text-base font-medium">4.9/5 on</span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="ml-0.5">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#fff"/>
        <path d="M2 17L12 22L22 17" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-white text-base font-semibold">Whop</span>
    </div>
  );
};

export default WhopRating;
