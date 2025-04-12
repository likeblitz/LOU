import React, { useRef, useEffect } from 'react';
import { type CustomizeImageProps } from './types';
import { Upload } from 'lucide-react';

export default function CustomizeImage({ 
  uploadedImage,
  config,
  onImageUpload,
  onDragMove
}: CustomizeImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      e.preventDefault();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !container) return;

      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      
      onDragMove(x, y);
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [onDragMove]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video bg-white/90 rounded-xl overflow-hidden border-2 border-[#3E2F23] shadow-lg backdrop-blur-sm"
    >
      {!uploadedImage ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-8">
          <Upload className="w-12 h-12 text-[#3E2F23] opacity-50" />
          <p className="wallet-text text-lg text-center text-[#3E2F23] opacity-70">
            Drop your image here or click to upload
          </p>
        </div>
      ) : (
        <img
          src={uploadedImage}
          alt="Uploaded"
          className="absolute inset-0 w-full h-full object-contain"
        />
      )}

      {uploadedImage && (
        <div 
          className="absolute w-32 h-32 cursor-move"
          style={{
            left: `${config.position.x}%`,
            top: `${config.position.y}%`,
            transform: `
              translate(-50%, -50%)
              rotate(${config.rotation}deg)
              scale(${config.scale})
              scaleX(${config.isFlipped ? -1 : 1})
            `,
          }}
          onMouseDown={(e) => {
            isDraggingRef.current = true;
            e.preventDefault();
          }}
        >
          <img
            src="/images/logo.avif"
            alt="Lou Dog Overlay"
            className="w-full h-full object-contain"
            draggable={false}
          />
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        onChange={onImageUpload}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
    </div>
  );
}