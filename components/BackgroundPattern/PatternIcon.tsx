import React from 'react';
import { type PatternIcon } from './types';

export default function PatternIcon({ x, y, rotation, scale }: PatternIcon) {
  return (
    <div
      className="absolute w-8 h-8 transition-opacity duration-500"
      style={{
        top: `${y}%`,
        left: `${x}%`,
        transform: `
          rotate(${rotation}deg)
          scale(${scale})
        `,
        opacity: 0.1,
      }}
    >
      <img
        src="/images/logo.avif"
        alt=""
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}