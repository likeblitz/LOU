import React from 'react';
import TokenomicsTitle from './TokenomicsTitle';
import TokenomicsItem from './TokenomicsItem';
import TokenomicsImage from './TokenomicsImage';
import { TOKENOMICS_ITEMS } from './constants';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function Tokenomics() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#CFD989] py-24 border-y-2 border-[#3E2F23]">
      <div className="container mx-auto px-4">
        <TokenomicsTitle isVisible={isVisible} />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="grid grid-cols-1 gap-8 flex-1">
            {TOKENOMICS_ITEMS.map((item, index) => (
              <div
                key={item.label}
                className={`transform transition-all duration-700 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${200 * index}ms` }}>
                <TokenomicsItem
                  label={item.label}
                  value={item.value}
                  delay={200 * index}
                />
              </div>
            ))}
          </div>

          <TokenomicsImage isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
}