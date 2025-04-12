import React from 'react';

interface TokenomicsImageProps {
  isVisible: boolean;
}

export default function TokenomicsImage({ isVisible }: TokenomicsImageProps) {
  return (
    <div className={`w-full md:w-1/2 max-w-md transition-all duration-1000 transform
      ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
      style={{ transitionDelay: '400ms' }}>
      <div className="relative group">
        <div className="absolute inset-0 bg-[#3E2F23] rounded-2xl transform rotate-3 
          group-hover:rotate-6 transition-transform duration-300" />
        <img
          src="/images/tocken.avif"
          alt="Tokenomics Distribution"
          className="relative rounded-2xl shadow-xl transform group-hover:-rotate-3 
            transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}