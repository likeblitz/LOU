import React, { useState, useCallback } from 'react';
import { ArrowLeft } from 'lucide-react';
import ImageEditor from './ImageEditor';
import DraggableLou from './DraggableLou';
import ActionButtons from './ActionButtons';
import { type ImageConfig } from './types';

export default function CustomizePage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [config, setConfig] = useState<ImageConfig>({
    position: { x: 50, y: 50 },
    rotation: 0,
    scale: 1,
    isFlipped: false
  });

  const handleUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleRemove = useCallback(() => {
    setUploadedImage(null);
    setConfig({
      position: { x: 50, y: 50 },
      rotation: 0,
      scale: 1,
      isFlipped: false
    });
  }, []);

  const handleSave = useCallback(() => {
    if (!uploadedImage) return;

    const tempImg = new Image();
    tempImg.src = uploadedImage;
    tempImg.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = tempImg.naturalWidth;
      canvas.height = tempImg.naturalHeight;
      ctx.drawImage(tempImg, 0, 0);

      const overlay = new Image();
      overlay.src = '/logo.avif';
      overlay.onload = () => {
        const overlaySize = Math.min(canvas.width, canvas.height) * 0.4;
        const scaledSize = overlaySize * config.scale;
        const x = (config.position.x / 100) * canvas.width;
        const y = (config.position.y / 100) * canvas.height;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate((config.rotation * Math.PI) / 180);
        ctx.scale(config.isFlipped ? -1 : 1, 1);
        ctx.drawImage(
          overlay,
          -scaledSize / 2,
          -scaledSize / 2,
          scaledSize,
          scaledSize
        );
        ctx.restore();

        const link = document.createElement('a');
        link.download = 'lou-meme.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
      };
    };
  }, [uploadedImage, config]);

  return (
    <div className="min-h-screen bg-[#D2A679] py-16 px-4">
      <div className="container mx-auto">
        <a 
          href="/"
          className="inline-flex items-center gap-2 text-white mb-8 hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="wallet-text text-lg">Back to Home</span>
        </a>

        <h1 className="hero-title text-4xl md:text-5xl text-center text-white mb-12 animate-drop-in">
          Create Your Meme with LOU!
        </h1>

        <div className="max-w-4xl mx-auto bg-white/10 p-8 rounded-2xl backdrop-blur-sm border-2 border-white/20">
          <ImageEditor
            uploadedImage={uploadedImage}
            onUpload={handleUpload}
            onRemove={handleRemove}
          >
            {uploadedImage && (
              <DraggableLou
                {...config}
                onMove={(x, y) => setConfig({ ...config, position: { x, y } })}
                onRotate={(rotation) => setConfig({ ...config, rotation })}
                onResize={(scale) => setConfig({ ...config, scale })}
              />
            )}
          </ImageEditor>

          {uploadedImage && (
            <ActionButtons
              onFlip={() => setConfig({ ...config, isFlipped: !config.isFlipped })}
              onSave={handleSave}
            />
          )}
        </div>
      </div>
    </div>
  );
}