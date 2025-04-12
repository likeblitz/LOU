import React from 'react';

export default function CustomizeButton() {
  return (
    <a
      href="/customize"
      className="bg-[#CFD989] hover:bg-[#A6C368] text-[#0D0D0D] wallet-text 
        py-4 px-8 rounded-xl text-xl font-bold transition-all duration-300 
        shadow-lg border-2 border-[#3E2F23] hover:scale-105 
        animate-drop-in animation-delay-500"
    >
      Customize with LOU!
    </a>
  );
}