import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type SliderControlsProps } from './types';

export default function SliderControls({ onPrev, onNext }: SliderControlsProps) {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
          bg-[#A4C639] hover:bg-[#B8DA4D] transition-all duration-300 
          border-2 border-[#3E2F23] shadow-lg hover:scale-110"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6 text-[#3E2F23]" />
      </button>
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
          bg-[#A4C639] hover:bg-[#B8DA4D] transition-all duration-300 
          border-2 border-[#3E2F23] shadow-lg hover:scale-110"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6 text-[#3E2F23]" />
      </button>
    </>
  );
}