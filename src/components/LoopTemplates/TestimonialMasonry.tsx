/**
 * TestimonialMasonry Component
 *
 * Masonry grid layout for testimonials.
 * Supports both text and video testimonials with CSS Grid spanning.
 */

import TestimonialTextCard from '../LoopComponents/TestimonialTextCard';
import TestimonialVideoCard from '../LoopComponents/TestimonialVideoCard';

interface BaseTestimonialItem {
  id: string;
  name: string;
  role?: string;
  resultsAmount?: string;
  spanColumns?: boolean;
  spanRows?: boolean;
}

interface TextTestimonialItem extends BaseTestimonialItem {
  type: 'text';
  quote: string;
  rating?: number;
  resultsPeriod?: string;
}

interface VideoTestimonialItem extends BaseTestimonialItem {
  type: 'video';
  video: string;
  poster?: string;
  videoAspect?: 'portrait' | 'landscape' | 'square';
  centered?: boolean;
}

type TestimonialItem = TextTestimonialItem | VideoTestimonialItem;

interface TestimonialMasonryProps {
  items: TestimonialItem[];
  className?: string;
}

const TestimonialMasonry = ({ items, className = '' }: TestimonialMasonryProps) => {
  return (
    <div className={`testimonial-masonry ${className}`}>
      {items.map((item, index) => {
        if (item.type === 'video') {
          return (
            <TestimonialVideoCard
              key={item.id || index}
              name={item.name}
              role={item.role}
              video={item.video}
              poster={item.poster}
              resultsAmount={item.resultsAmount}
              spanColumns={item.spanColumns}
              spanRows={item.spanRows}
              videoAspect={item.videoAspect}
              centered={item.centered}
            />
          );
        }

        return (
          <TestimonialTextCard
            key={item.id || index}
            name={item.name}
            role={item.role}
            quote={item.quote}
            rating={item.rating}
            resultsAmount={item.resultsAmount}
            resultsPeriod={item.resultsPeriod}
            spanColumns={item.spanColumns}
          />
        );
      })}
    </div>
  );
};

export default TestimonialMasonry;
