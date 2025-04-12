import React from 'react';
import FooterHeading from './FooterHeading';
import FooterSocials from './FooterSocials';

export default function FooterContent() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center gap-8 py-16 px-4">
      <FooterHeading />
      <FooterSocials />
    </div>
  );
}