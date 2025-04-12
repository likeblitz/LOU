import React from 'react';
import { type ImageItemProps } from './types';

export default function ImageItem({ src, alt }: ImageItemProps) {
  return (
    <div className="flex-shrink-0 h-[150px] w-auto">
      <img
        src={src}
        alt={alt}
        className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
        loading="lazy"
      />
    </div>
  );
}