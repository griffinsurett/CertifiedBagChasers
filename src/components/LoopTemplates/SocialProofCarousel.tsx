/**
 * SocialProofCarousel Component
 *
 * Carousel display for social media screenshot testimonials.
 * Auto-advances and supports manual navigation.
 */

import { useEffect, useState } from 'react';
import SocialProofCard from '../LoopComponents/SocialProofCard';

type ReviewSize = 'short' | 'medium' | 'tall';

interface ReviewCard {
  image: string;
  alt?: string;
  size: ReviewSize;
}

interface ReviewColumn {
  cards: ReviewCard[];
}

interface ReviewSlide {
  columns: ReviewColumn[];
}

interface SocialProofCarouselProps {
  items: Array<{
    id: string;
    data: {
      title: string;
      socialMediaPost?: string;
    };
  }>;
  className?: string;
}

// Define carousel slide layouts
const createSlides = (items: SocialProofCarouselProps['items']): ReviewSlide[] => {
  // Filter to only social media posts
  const socialItems = items.filter(item => item.data.socialMediaPost);

  if (socialItems.length === 0) return [];

  // Calculate slides based on items
  const itemsPerSlide = 7; // 3 columns with varying cards
  const slideCount = Math.ceil(socialItems.length / itemsPerSlide);

  const slides: ReviewSlide[] = [];
  const sizes: ReviewSize[] = ['short', 'tall', 'medium', 'short', 'short', 'tall', 'medium'];

  for (let s = 0; s < slideCount; s++) {
    const slideItems = socialItems.slice(s * itemsPerSlide, (s + 1) * itemsPerSlide);

    // Distribute items across 3 columns
    const columns: ReviewColumn[] = [
      { cards: [] },
      { cards: [] },
      { cards: [] },
    ];

    slideItems.forEach((item, i) => {
      const colIndex = i % 3;
      columns[colIndex].cards.push({
        image: item.data.socialMediaPost!,
        alt: `${item.data.title} testimonial`,
        size: sizes[i % sizes.length],
      });
    });

    // Only add slide if it has content
    if (columns.some(col => col.cards.length > 0)) {
      slides.push({ columns });
    }
  }

  return slides;
};

const SocialProofCarousel = ({ items, className = '' }: SocialProofCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = createSlides(items);

  const goToSlide = (index: number) => {
    setCurrentSlide((index + slides.length) % slides.length);
  };

  const goNext = () => goToSlide(currentSlide + 1);
  const goPrev = () => goToSlide(currentSlide - 1);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      {/* Navigation buttons */}
      {slides.length > 1 && (
        <>
          <button
            aria-label="Previous slide"
            onClick={goPrev}
            className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 text-primary text-xl items-center justify-center hover:bg-primary/30 transition-colors z-10"
          >
            ←
          </button>
          <button
            aria-label="Next slide"
            onClick={goNext}
            className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary/20 border border-primary/40 text-primary text-xl items-center justify-center hover:bg-primary/30 transition-colors z-10"
          >
            →
          </button>
        </>
      )}

      {/* Carousel container */}
      <div className="overflow-hidden rounded-[32px] border border-primary/20 bg-gradient-to-br from-[#090909] via-[#0f0f0f] to-[#0a0a0a] shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="min-w-full px-6 py-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {slide.columns.map((column, columnIndex) => (
                  <div key={`col-${columnIndex}`} className="flex flex-col gap-6">
                    {column.cards.map((card, cardIndex) => (
                      <SocialProofCard
                        key={`card-${cardIndex}`}
                        image={card.image}
                        alt={card.alt}
                        size={card.size}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      {slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-primary w-10' : 'bg-primary/30 w-5'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialProofCarousel;
