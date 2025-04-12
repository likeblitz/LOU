import React from 'react';
import FooterBackground from './FooterBackground';
import FooterContent from './FooterContent';

export default function Footer() {
  return (
    <footer className="relative w-full min-h-[300px] overflow-hidden">
      <FooterBackground />
      <FooterContent />
    </footer>
  );
}