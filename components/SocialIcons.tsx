import React from 'react';
import { Twitter, MessageCircle, BarChart3, PieChart } from 'lucide-react';

const socialLinks = [
  {
    Icon: Twitter,
    href: 'https://x.com/Loucoincto',
    label: 'Twitter',
  },
  {
    Icon: MessageCircle,
    href: 'https://t.me/Loucoinsol',
    label: 'Telegram',
  },
  {
    Icon: BarChart3,
    href: 'https://dexscreener.com/solana/47hs9pp9f5thzhgkhaehfpywsz8wb1r2wrros9becgjz',
    label: 'DexScreen',
  },
  {
    Icon: PieChart,
    href: 'https://www.dextools.io/app/en/token/lou?t=1734866919683',
    label: 'DexTool',
  },
];

export default function SocialIcons() {
  return (
    <div className="flex gap-4">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#A4C639] hover:bg-[#B8DA4D] flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-[#3E2F23]"
          aria-label={label}
        >
          <Icon className="w-6 h-6 text-[#3E2F23]" />
        </a>
      ))}
    </div>
  );
}