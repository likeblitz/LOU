import React from 'react';
import { type StepBoxProps } from './types';

export default function StepBox({ step, title, description }: StepBoxProps) {
  return (
    <div className="group h-full p-6 sm:p-8 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-[#3E2F23] shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-1 flex flex-col">
      <div className="flex items-start gap-3 mb-4">
        <span className="wallet-text text-xl font-bold text-[#A4C639] shrink-0 pt-0.5">Step {step}</span>
        <h3 className="wallet-text text-base sm:text-lg font-bold text-[#3E2F23] truncate">{title}</h3>
      </div>
      <p className="wallet-text text-sm sm:text-base text-[#3E2F23] leading-relaxed flex-grow">{description}</p>
    </div>
  );
}