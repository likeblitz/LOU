import React, { useState, useCallback, useMemo } from 'react';
import SliderControls from './SliderControls';
import SliderDots from './SliderDots';
import SliderImage from './SliderImage';
import { SLIDER_IMAGES } from './constants';

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDER_IMAGES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);
  }, []);

  const handleCustomizeClick = () => {
    window.location.href = '/customize';
  };

  // Memoize the random background patterns to prevent hydration mismatches
  const backgroundPatterns = useMemo(() => {
    return Array.from({ length: 20 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      scale: Math.random() * 0.5 + 0.5,
    }));
  }, []);

  return (
    <section className="bg-[#CFD989] py-16 relative overflow-hidden">
      {/* Fun background patterns */}
      <div className="absolute inset-0 opacity-10">
        {backgroundPatterns.map((pattern, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 rounded-full bg-[#A4C639]"
            style={{
              top: pattern.top,
              left: pattern.left,
              transform: `scale(${pattern.scale})`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left side - Image Slider */}
          <div className="w-full md:w-[60%] relative">
            <div className="max-w-2xl mx-auto bg-[#E5C4A1]/20 p-6 rounded-xl backdrop-blur-sm border-2 border-[#3E2F23] shadow-xl hover:shadow-2xl transition-all duration-300">
              <SliderImage
                src={SLIDER_IMAGES[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
              />
              <SliderControls onPrev={prevSlide} onNext={nextSlide} />
              <SliderDots
                total={SLIDER_IMAGES.length}
                current={currentIndex}
                onClick={setCurrentIndex}
              />
            </div>
          </div>

          {/* Right side - Customize Button */}
          <div className="w-full md:w-[35%] flex flex-col items-center justify-center">
            <h2 className="hero-title text-4xl text-[#3E2F23] mb-6 text-center">
              <span className="animate-wiggle inline-block">Create</span>{' '}
              <span className="animate-wiggle inline-block" style={{ animationDelay: '0.1s' }}>Your</span>{' '}
              <span className="animate-wiggle inline-block" style={{ animationDelay: '0.2s' }}>Own</span>{' '}
              <span className="animate-wiggle inline-block" style={{ animationDelay: '0.3s' }}>Meme!</span>
            </h2>
            <button
              onClick={handleCustomizeClick}
              className="group bg-[#A4C639] hover:bg-[#B8DA4D] text-[#3E2F23] wallet-text 
                py-6 px-10 rounded-xl text-2xl font-bold transition-all duration-300 
                shadow-lg border-2 border-[#3E2F23] hover:scale-105 hover:-rotate-2
                hover:shadow-xl w-full max-w-md relative overflow-hidden"
            >
              <span className="relative z-10">Customize with LOU!</span>
              <div className="absolute inset-0 bg-[#D2A679] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            <p className="wallet-text text-[#3E2F23] mt-4 text-center text-lg animate-bounce">
              🎨 Join the fun and create your own LOU meme! 🐕
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}