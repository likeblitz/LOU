export interface SliderControlsProps {
  onPrev: () => void;
  onNext: () => void;
}

export interface SliderDotsProps {
  total: number;
  current: number;
  onClick: (index: number) => void;
}

export interface SliderImageProps {
  src: string;
  alt: string;
}