import React from 'react';

export default function ScrollingBanner() {
  const bannerContent = (
    <div className="flex items-center gap-4 px-4">
      <span className="banner-text text-xl text-[#3E2F23] font-bold uppercase tracking-wider">I'm just a cute dog</span>
      <img src="/images/logo.avif" alt="Lou Dog" className="w-8 h-8 object-cover rounded-full" />
    </div>
  );

  return (
    <div className="w-full bg-[#CFD989] border-y border-[#3E2F23] overflow-hidden fixed top-0 z-50">
      <div className="flex whitespace-nowrap animate-scroll py-3">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="animate-scroll">
            {bannerContent}
          </div>
        ))}
      </div>
    </div>
  );
}