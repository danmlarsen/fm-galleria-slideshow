import { createContext, useState } from 'react';

type SlideshowContextType = {
  slideshowStarted: boolean;
  setSlideshowStarted: (value: boolean | ((prevState: boolean) => boolean)) => void;
  currentSlide: number;
  setCurrentSlide: (value: number | ((prevState: number) => number)) => void;
};

export const SlideshowContext = createContext<SlideshowContextType | null>(null);

export function SlideshowContextProvider({ children }: { children: React.ReactNode }) {
  const [slideshowStarted, setSlideshowStarted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(-1);

  return <SlideshowContext.Provider value={{ currentSlide, setCurrentSlide, slideshowStarted, setSlideshowStarted }}>{children}</SlideshowContext.Provider>;
}
