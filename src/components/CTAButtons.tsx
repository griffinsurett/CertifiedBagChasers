interface CTAButtonsProps {
  navigate: (page: string) => void;
  centered?: boolean;
  showRating?: boolean;
}

const CTAButtons = ({ navigate, centered = true, showRating = false }: CTAButtonsProps) => {
  return (
    <div className={`flex flex-col ${centered ? 'items-center' : 'items-start'} gap-6`}>
      <div className={`flex gap-5 flex-wrap ${centered ? 'justify-center' : 'justify-start'}`}>
        <a href="https://whop.com" target="_blank" rel="noopener noreferrer" className="no-underline">
          <button className="btn-gold text-base py-[18px] px-10">
            Join The Community →
          </button>
        </a>
        <button className="btn-outline-white text-base py-4 px-[38px]" onClick={() => navigate('products')}>
          View Products
        </button>
      </div>

      {showRating && (
        <div className="flex items-center justify-center gap-2">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-gold text-lg">★</span>
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
      )}
    </div>
  );
};

export default CTAButtons;
