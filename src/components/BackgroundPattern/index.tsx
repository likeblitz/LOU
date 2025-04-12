import React, { useMemo } from 'react';
import PatternGrid from './PatternGrid';
import { type PatternIcon } from './types';

export default function BackgroundPattern() {
  // Memoize the pattern icons to prevent hydration mismatches
  const icons: PatternIcon[] = useMemo(() => {
    const rows = 8;
    const cols = 12;
    const spacing = 100; // percentage units
    const patterns: PatternIcon[] = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        patterns.push({
          id: `icon-${row}-${col}`,
          x: (col * spacing) / cols,
          y: (row * spacing) / rows,
          rotation: Math.random() * 360,
          scale: 0.8 + Math.random() * 0.4,
        });
      }
    }

    return patterns;
  }, []); // Empty dependency array ensures the patterns are generated only once

  return <PatternGrid icons={icons} />;
}