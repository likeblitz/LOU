import React from 'react';
import { type ScrollImageProps } from './types';

export default function ScrollImage({ src, alt }: ScrollImageProps) {
  return (
    <div className="flex-shrink-0 px-5">
      <img
        src={src}
        alt={alt}
        className="h-[150px] w-auto object-contain transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}