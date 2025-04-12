import React, { useRef, useEffect } from 'react';
import { RotateCw } from 'lucide-react';
import { type DraggableLouProps } from './types';
import { calculateRotation } from './utils';

export default function DraggableLou({
  position,
  rotation,
  scale,
  isFlipped,
  onMove,
  onRotate,
  onResize
}: DraggableLouProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<'move' | 'rotate' | 'resize' | null>(null);
  const startPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current?.parentElement;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      switch (isDraggingRef.current) {
        case 'move':
          onMove(x, y);
          break;
        case 'rotate':
          const angle = calculateRotation(position, { x, y });
          onRotate(angle);
          break;
        case 'resize':
          const distance = Math.hypot(x - position.x, y - position.y);
          const newScale = Math.max(0.5, Math.min(2, distance / 25));
          onResize(newScale);
          break;
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = null;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [position, onMove, onRotate, onResize]);

  return (
    <div
      ref={containerRef}
      className="absolute w-32 h-32 cursor-move"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `
          translate(-50%, -50%)
          rotate(${rotation}deg)
          scale(${scale})
          scaleX(${isFlipped ? -1 : 1})
        `
      }}
    >
      {/* Main image */}
      <div
        className="w-full h-full"
        onMouseDown={(e) => {
          isDraggingRef.current = 'move';
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

      {/* Rotation handle */}
      <div
        className="absolute -top-8 left-1/2 w-6 h-6 -translate-x-1/2 cursor-pointer"
        onMouseDown={(e) => {
          isDraggingRef.current = 'rotate';
          e.preventDefault();
        }}
      >
        <div className="w-1 h-8 bg-[#3E2F23] mx-auto mb-1" />
        <div className="w-6 h-6 rounded-full bg-white border-2 border-[#3E2F23] flex items-center justify-center">
          <RotateCw className="w-4 h-4 text-[#3E2F23]" />
        </div>
      </div>

      {/* Resize handles */}
      {['nw', 'ne', 'se', 'sw'].map((position) => (
        <div
          key={position}
          className={`absolute w-4 h-4 bg-white border-2 border-[#3E2F23] rounded-full cursor-nwse-resize
            ${position.includes('n') ? '-top-2' : '-bottom-2'}
            ${position.includes('w') ? '-left-2' : '-right-2'}`}
          onMouseDown={(e) => {
            isDraggingRef.current = 'resize';
            e.preventDefault();
          }}
        />
      ))}
    </div>
  );
}