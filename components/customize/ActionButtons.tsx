import React from 'react';
import { FlipHorizontal, Save } from 'lucide-react';
import { type ActionButtonsProps } from './types';

export default function ActionButtons({ onFlip, onSave }: ActionButtonsProps) {
  return (
    <div className="flex justify-end gap-4 mt-4">
      <button
        onClick={onFlip}
        className="flex items-center gap-2 px-4 py-2 bg-[#CFD989] hover:bg-[#A6C368] rounded-lg 
          text-[#3E2F23] wallet-text transition-all duration-300 border border-white/20"
      >
        <FlipHorizontal className="w-5 h-5" />
        <span>Flip</span>
      </button>

      <button
        onClick={onSave}
        className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 rounded-lg 
          text-[#3E2F23] wallet-text transition-all duration-300 border border-white/20"
      >
        <Save className="w-5 h-5" />
        <span>Save Image</span>
      </button>
    </div>
  );
}