import React from 'react';
import ImageItem from './ImageItem';
import { type ScrollTrackProps } from './types';

export default function ScrollTrack({ images }: ScrollTrackProps) {
  // Duplicate images to create seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div className="flex gap-10 animate-scroll-horizontal">
      {duplicatedImages.map((image, index) => (
        <ImageItem
          key={`${image}-${index}`}
          src={image}
          alt={`Scrolling image ${index + 1}`}
        />
      ))}
    </div>
  );
}