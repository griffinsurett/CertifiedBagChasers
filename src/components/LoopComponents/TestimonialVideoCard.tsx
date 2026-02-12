/**
 * TestimonialVideoCard Component
 *
 * Displays a video testimonial card with video playback, play button, and overlay.
 * Used in the testimonials masonry grid for video testimonials.
 * Height is controlled by CSS grid (tm-row-2) for proper masonry layout.
 */

import { useState, useRef } from 'react';

interface TestimonialVideoCardProps {
  name: string;
  role?: string;
  video: string;
  poster?: string;
  resultsAmount?: string;
  className?: string;
  spanColumns?: boolean;
  spanRows?: boolean;
  videoAspect?: 'portrait' | 'landscape' | 'square';
  centered?: boolean;
}

const TestimonialVideoCard = ({
  name,
  role = "Customer",
  video,
  poster,
  resultsAmount,
  className = '',
  spanColumns = false,
  spanRows = false,
  videoAspect = 'portrait',
  centered = false,
}: TestimonialVideoCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const spanClasses = [
    spanColumns ? 'tm-span-2' : '',
    spanRows ? 'tm-row-2' : '',
    `tm-video-${videoAspect}`,
  ].filter(Boolean).join(' ');

  const handlePlayClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className={`testimonial-video-card ${spanClasses} ${className}`}
      onClick={handlePlayClick}
    >
      {/* Results badge */}
      {resultsAmount && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-900 via-primary to-primary-100 py-2 px-5 rounded-bl-xl z-[3]">
          <span className="text-bg font-extrabold text-sm">
            {resultsAmount}
          </span>
        </div>
      )}

      {/* Video element with poster - fills container */}
      <video
        ref={videoRef}
        src={video}
        poster={poster}
        className="w-full h-full object-cover absolute inset-0"
        playsInline
        onEnded={handleVideoEnd}
      />

      {/* Gradient overlay - hide when playing */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
      />

      {/* Play button - hide when playing */}
      <div
        className={`play-btn transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'} ${centered ? '!left-1/2 !top-1/2 !bottom-auto !-translate-x-1/2 !-translate-y-1/2' : ''}`}
      />

      {/* Author info - hide when playing */}
      <div className={`absolute bottom-5 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'} ${centered ? 'left-1/2 -translate-x-1/2 text-center' : 'left-5'}`}>
        <div className={`font-bold text-white ${centered ? 'text-[22px]' : 'text-xl'}`}>
          {name}
        </div>
        <div className="text-text-muted text-sm">{role}</div>
      </div>
    </div>
  );
};

export default TestimonialVideoCard;
