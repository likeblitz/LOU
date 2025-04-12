import React from 'react';
import PartnerLogo from './PartnerLogo';
import { PARTNERS } from './constants';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function CexPartners() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className="bg-[#CFD989] py-16"
    >
      <div className="container mx-auto px-4">
        <h2 className={`hero-title mb-12 text-center text-4xl font-bold text-[#3E2F23] transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          CEX Partners
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNERS.map((partner, index) => (
            <div 
              key={partner.name} 
              className={`transform transition-all duration-500 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${0.2 * index}s`,
              }}
            >
              <PartnerLogo {...partner} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}