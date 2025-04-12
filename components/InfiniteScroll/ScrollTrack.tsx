import React from 'react';
import ScrollImage from './ScrollImage';
import { type ScrollTrackProps } from './types';

export default function ScrollTrack({ images }: ScrollTrackProps) {
  // Duplicate images array for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div className="flex gap-10 animate-scroll-horizontal">
      {duplicatedImages.map((image, index) => (
        <ScrollImage
          key={`${image}-${index}`}
          src={image}
          alt={`Scroll image ${index + 1}`}
        />
      ))}
    </div>
  );
}