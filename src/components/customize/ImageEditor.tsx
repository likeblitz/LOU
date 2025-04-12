import React from 'react';
import { Upload, X } from 'lucide-react';
import DraggableLou from './DraggableLou';
import { type ImageEditorProps } from './types';

export default function ImageEditor({
  uploadedImage,
  onUpload,
  onRemove,
  children
}: ImageEditorProps) {
  return (
    <div className="relative w-full aspect-video bg-white rounded-xl overflow-hidden border-2 border-white/20 shadow-lg">
      {!uploadedImage ? (
        <label className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 cursor-pointer group">
          <div className="p-6 rounded-full bg-[#CFD989] group-hover:bg-[#A6C368] transition-colors duration-300">
            <Upload className="w-8 h-8 text-[#3E2F23]" />
          </div>
          <p className="wallet-text text-lg text-center text-[#3E2F23]">
            Click to upload your image
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={onUpload}
            className="hidden"
          />
        </label>
      ) : (
        <>
          <img
            src={uploadedImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-contain"
          />
          <button
            onClick={onRemove}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300 border border-gray-200"
          >
            <X className="w-5 h-5 text-[#3E2F23]" />
          </button>
          {children}
        </>
      )}
    </div>
  );
}