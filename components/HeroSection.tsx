import React from 'react';
import SocialIcons from './SocialIcons';
import HeroButton from './HeroButton';
import BackgroundPattern from './BackgroundPattern';
import { colors } from '../utils/colors';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#D2A679] relative overflow-hidden">
      <BackgroundPattern />
      
      <div className="container mx-auto flex flex-col items-start px-8 pt-24 relative z-10">
        <h1 className="hero-title text-8xl md:text-9xl mb-12 text-[#3E2F23]">
          <span className="animate-wiggle inline-block">L</span>
          <span className="animate-wiggle inline-block" style={{ animationDelay: '0.1s' }}>O</span>
          <span className="animate-wiggle inline-block" style={{ animationDelay: '0.2s' }}>U</span>
        </h1>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-12 w-full max-w-md shadow-lg border-2 border-[#3E2F23] animate-drop-in animation-delay-200">
          <p className="wallet-text text-sm text-[#3E2F23] truncate">
            5DQSDg6SGkbsbykq4mQstpcL4d5raEHc6rY7LgBwpump
          </p>
        </div>

        <div className="flex gap-4 mb-16 animate-drop-in animation-delay-400">
          <HeroButton />
        </div>

        <div className="animate-drop-in animation-delay-600">
          <SocialIcons />
        </div>
      </div>

      <div className="absolute right-0 top-24 w-2/5">
        <div className="w-full animate-float">
          <img 
            src="/images/logo.avif" 
            alt="Lou Dog" 
            className="w-full h-auto object-contain rotate-90"
          />
        </div>
      </div>
    </div>
  );
}