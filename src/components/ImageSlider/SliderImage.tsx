import React from 'react';
import { type SliderImageProps } from './types';

export default function SliderImage({ src, alt }: SliderImageProps) {
  return (
    <div className="aspect-[4/3] w-full relative overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}