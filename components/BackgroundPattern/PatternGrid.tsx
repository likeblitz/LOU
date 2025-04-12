import React from 'react';
import PatternIcon from './PatternIcon';
import { type PatternIcon as PatternIconType } from './types';

interface PatternGridProps {
  icons: PatternIconType[];
}

export default function PatternGrid({ icons }: PatternGridProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <PatternIcon key={icon.id} {...icon} />
      ))}
    </div>
  );
}