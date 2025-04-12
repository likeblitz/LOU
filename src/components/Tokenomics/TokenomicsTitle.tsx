import React from 'react';

interface TokenomicsTitleProps {
  isVisible: boolean;
}

export default function TokenomicsTitle({ isVisible }: TokenomicsTitleProps) {
  return (
    <h2 className={`hero-title mb-12 text-center text-5xl font-bold text-[#3E2F23] transition-all duration-700 transform
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      Tokenomics
    </h2>
  );
}