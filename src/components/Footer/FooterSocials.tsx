import React from 'react';
import { Twitter, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from './constants';

export default function FooterSocials() {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'Twitter':
        return <Twitter className="w-6 h-6" />;
      case 'Telegram':
        return <MessageCircle className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-6">
      {SOCIAL_LINKS.map(({ platform, url, ariaLabel }) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center
            transition-all duration-300 hover:scale-110 hover:bg-white
            hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
            text-[#3E2F23]"
        >
          {getIcon(platform)}
        </a>
      ))}
    </div>
  );
}