import React from 'react';
import { type PartnerLogoProps } from './types';

export default function PartnerLogo({ name, logo, url }: PartnerLogoProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="overflow-hidden rounded-xl border-2 border-[#3E2F23] bg-white/90 p-4 shadow-md backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1">
        <img
          src={logo}
          alt={`${name} logo`}
          className="h-24 w-full object-contain transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
    </a>
  );
}