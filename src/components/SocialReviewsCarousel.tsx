import { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import review6mirr from '../assets/social-reviews/6mirr.jpeg';
import reviewAdminAjax from '../assets/social-reviews/admin-ajax.jpeg';
import reviewChaptersStraightSauce from '../assets/social-reviews/chaptersstraightsauce.jpeg';
import reviewDeadass from '../assets/social-reviews/deadass.jpeg';
import reviewHumorIsAmazing from '../assets/social-reviews/humorisamazing.jpg';
import reviewIGotCopy from '../assets/social-reviews/igotcopy.jpeg';
import reviewJlueshotyou from '../assets/social-reviews/jlueshotyou.jpeg';
import reviewKaeloving from '../assets/social-reviews/kaeloving.jpeg';
import reviewNeothenot from '../assets/social-reviews/neothenot.jpeg';
import reviewNewmont from '../assets/social-reviews/newmont.jpeg';
import reviewRovan from '../assets/social-reviews/rovan.jpeg';
import reviewStephonBoulay from '../assets/social-reviews/stephonboulay.jpeg';
import reviewTdvickers from '../assets/social-reviews/tdvickers.jpeg';

type ReviewSize = 'short' | 'medium' | 'tall';

const reviewSlides = [
  {
    columns: [
      {
        cards: [
          { image: review6mirr, size: 'short' as ReviewSize },
          { image: reviewAdminAjax, size: 'tall' as ReviewSize },
        ],
      },
      {
        cards: [
          { image: reviewDeadass, size: 'tall' as ReviewSize },
          { image: reviewHumorIsAmazing, size: 'short' as ReviewSize },
        ],
      },
      {
        cards: [
          { image: reviewChaptersStraightSauce, size: 'medium' as ReviewSize },
          { image: reviewIGotCopy, size: 'short' as ReviewSize },
          { image: reviewJlueshotyou, size: 'short' as ReviewSize },
        ],
      },
    ],
  },
  {
    columns: [
      {
        cards: [
          { image: reviewKaeloving, size: 'short' as ReviewSize },
          { image: reviewNeothenot, size: 'short' as ReviewSize },
        ],
      },
      {
        cards: [
          { image: reviewNewmont, size: 'tall' as ReviewSize },
          { image: reviewTdvickers, size: 'medium' as ReviewSize },
        ],
      },
      {
        cards: [
          { image: reviewRovan, size: 'short' as ReviewSize },
          { image: reviewStephonBoulay, size: 'short' as ReviewSize },
        ],
      },
    ],
  },
];

const sizeClasses: Record<ReviewSize, string> = {
  short: 'h-[170px]',
  medium: 'h-[250px]',
  tall: 'h-[430px]',
};

const SocialReviewsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide((index + reviewSlides.length) % reviewSlides.length);
  };

  const goNext = () => goToSlide(currentSlide + 1);
  const goPrev = () => goToSlide(currentSlide - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % reviewSlides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-bg-dark section-base">
      <div className="max-w-[1200px] mx-auto">
        <SectionHeading
          eyebrow="Social Proof"
          title={<>Real <span className="gold-metallic-heading">Member Wins</span></>}
          description="Screenshots straight from our Discord and socials. No fluff. Just real people stacking real results while following the Certified Bag Chasers playbook."
          descriptionClassName="max-w-[700px]"
        />

        <div className="relative">
          <button
            aria-label="Previous slide"
            onClick={goPrev}
            className="hidden md:flex absolute -left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold/20 border border-gold/40 text-gold text-xl items-center justify-center hover:bg-gold/30 transition-colors z-10"
          >
            ←
          </button>
          <button
            aria-label="Next slide"
            onClick={goNext}
            className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold/20 border border-gold/40 text-gold text-xl items-center justify-center hover:bg-gold/30 transition-colors z-10"
          >
            →
          </button>
          <div className="overflow-hidden rounded-[32px] border border-gold/20 bg-gradient-to-br from-[#090909] via-[#0f0f0f] to-[#0a0a0a] shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviewSlides.map((slide, index) => (
                <div key={index} className="min-w-full px-6 py-10">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {slide.columns.map((column, columnIndex) => (
                      <div key={`col-${columnIndex}`} className="flex flex-col gap-6">
                        {column.cards.map((card, cardIndex) => (
                          <div
                            key={`card-${cardIndex}-${card.image}`}
                            className={`rounded-[26px] border border-gold/20 bg-gradient-to-br from-[#121212] to-[#1c1b18] shadow-[0_15px_40px_rgba(0,0,0,0.3)] p-3 ${sizeClasses[card.size]}`}
                          >
                            <div className="w-full h-full rounded-[20px] overflow-hidden bg-black/60 flex items-center justify-center">
                              <img
                                src={card.image}
                                alt="Certified Bag Chasers community win"
                                className="max-h-full max-w-full object-contain"
                                loading="lazy"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {reviewSlides.map((_, index) => (
              <span
                key={`dot-${index}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-gold w-10' : 'bg-gold/30 w-5'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialReviewsCarousel;
