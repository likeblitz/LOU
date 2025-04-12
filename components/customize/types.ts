export interface Position {
  x: number;
  y: number;
}

export interface ImageConfig {
  position: Position;
  rotation: number;
  scale: number;
  isFlipped: boolean;
}

export interface ImageEditorProps {
  uploadedImage: string | null;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove: () => void;
  children: React.ReactNode;
}

export interface DraggableLouProps extends ImageConfig {
  onMove: (x: number, y: number) => void;
  onRotate: (angle: number) => void;
  onResize: (scale: number) => void;
}

export interface ActionButtonsProps {
  onFlip: () => void;
  onSave: () => void;
}