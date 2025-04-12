import React from 'react';

export default function FooterBackground() {
  return (
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-90"
      style={{ 
        backgroundImage: 'url(/images/foot.jpg)',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
      }}
    />
  );
}