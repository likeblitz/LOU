import React from 'react';
import { type SliderDotsProps } from './types';

export default function SliderDots({ total, current, onClick }: SliderDotsProps) {
  return (
    <div className="flex justify-center gap-3 mt-6">
      {[...Array(total)].map((_, index) => (
        <button
          key={index}
          onClick={() => onClick(index)}
          className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-[#3E2F23]
            hover:scale-125 ${
              index === current
                ? 'bg-[#A4C639] scale-110'
                : 'bg-[#D2A679] hover:bg-[#A4C639]'
            }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}