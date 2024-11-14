import { createContext, useState } from 'react';

import galleryData from '../assets/data.json';

type SlideshowContextType = {
  galleryData: GalleryDataArrayType;
  slideshowStarted: boolean;
  setSlideshowStarted: (value: boolean | ((prevState: boolean) => boolean)) => void;
  currentSlide: number;
  setCurrentSlide: (value: number | ((prevState: number) => number)) => void;
  nextSlide: () => void;
  prevSlide: () => void;
};

export type GalleryDataArrayType = typeof galleryData;
export type GalleryDataType = GalleryDataArrayType[0];

export const SlideshowContext = createContext<SlideshowContextType | null>(null);

export function SlideshowContextProvider({ children }: { children: React.ReactNode }) {
  const [slideshowStarted, setSlideshowStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(-1);

  function nextSlide() {
    if (currentSlide >= galleryData.length) return;
    setCurrentSlide(prev => prev + 1);
  }

  function prevSlide() {
    if (currentSlide === 0) return;
    setCurrentSlide(prev => prev - 1);
  }

  return (
    <SlideshowContext.Provider value={{ galleryData, currentSlide, setCurrentSlide, slideshowStarted, setSlideshowStarted, nextSlide, prevSlide }}>
      {children}
    </SlideshowContext.Provider>
  );
}
