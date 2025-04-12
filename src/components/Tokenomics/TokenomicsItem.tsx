import React from 'react';
import { type TokenomicsItemProps } from './types';

export default function TokenomicsItem({ label, value, delay }: TokenomicsItemProps) {
  return (
    <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl border-2 border-[#3E2F23] shadow-lg 
      hover:transform hover:scale-105 transition-all duration-300"
      style={{ transitionDelay: `${delay}ms` }}>
      <span className="wallet-text text-3xl font-bold text-[#3E2F23] block mb-2">
        {label}
      </span>
      <span className="wallet-text text-2xl font-bold text-white block">
        {value}
      </span>
    </div>
  );
}