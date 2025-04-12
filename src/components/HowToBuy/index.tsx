import React from 'react';
import StepBox from './StepBox';
import { STEPS } from './constants';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export default function HowToBuy() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#D2A679] py-16">
      <div className="container mx-auto px-4">
        <h2 className={`hero-title mb-12 text-center text-4xl font-bold text-[#3E2F23] transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          How to Buy
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3 auto-rows-fr">
          {STEPS.map((step, index) => (
            <div
              key={index}
              className={`transform transition-all duration-500 h-full ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${0.2 * index}s`,
              }}
            >
              <StepBox
                step={index + 1}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}