import React from 'react';
import { RotateCw, Maximize, FlipHorizontal, Save, RefreshCw } from 'lucide-react';
import { type CustomizeControlsProps } from './types';

export default function CustomizeControls({
  config,
  onChange,
  onReset,
  onSave
}: CustomizeControlsProps) {
  return (
    <div className="mt-8 p-6 bg-white/90 rounded-xl border-2 border-[#3E2F23] shadow-lg backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <label className="block">
            <div className="flex items-center gap-2 mb-2">
              <RotateCw className="w-5 h-5 text-[#3E2F23]" />
              <span className="wallet-text text-[#3E2F23]">Rotation</span>
            </div>
            <input
              type="range"
              min="-180"
              max="180"
              value={config.rotation}
              onChange={(e) => onChange({ ...config, rotation: Number(e.target.value) })}
              className="w-full accent-[#A4C639]"
            />
          </label>

          <label className="block">
            <div className="flex items-center gap-2 mb-2">
              <Maximize className="w-5 h-5 text-[#3E2F23]" />
              <span className="wallet-text text-[#3E2F23]">Size</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={config.scale}
              onChange={(e) => onChange({ ...config, scale: Number(e.target.value) })}
              className="w-full accent-[#A4C639]"
            />
          </label>
        </div>

        <div className="flex flex-wrap items-end gap-4">
          <button
            onClick={() => onChange({ ...config, isFlipped: !config.isFlipped })}
            className="flex items-center gap-2 px-4 py-2 bg-[#CFD989] hover:bg-[#A6C368] rounded-lg 
              text-[#3E2F23] wallet-text transition-all duration-300 border-2 border-[#3E2F23]"
          >
            <FlipHorizontal className="w-5 h-5" />
            <span>Flip</span>
          </button>

          <button
            onClick={onReset}
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 rounded-lg 
              text-[#3E2F23] wallet-text transition-all duration-300 border-2 border-[#3E2F23]"
          >
            <RefreshCw className="w-5 h-5" />
            <span>Reset</span>
          </button>

          {onSave && (
            <button
              onClick={onSave}
              className="flex items-center gap-2 px-4 py-2 bg-[#A4C639] hover:bg-[#B8DA4D] rounded-lg 
                text-[#3E2F23] wallet-text transition-all duration-300 border-2 border-[#3E2F23] ml-auto"
            >
              <Save className="w-5 h-5" />
              <span>Save Image</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}