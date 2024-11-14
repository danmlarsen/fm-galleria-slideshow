import { createContext, Dispatch, useReducer } from 'react';

import galleryData from '../assets/data.json';

export type GalleryDataArrayType = typeof galleryData;
export type GalleryDataType = GalleryDataArrayType[0];

const initialState = {
  currentSlide: -1,
  slideshowStarted: false,
  galleryData,
};

type SlideshowContextType = {
  state: typeof initialState;
  dispatch: Dispatch<SlideshowAction>;
};

type SlideshowAction = { type: 'startSlideshow'; payload?: number } | { type: 'stopSlideshow' } | { type: 'nextSlide' } | { type: 'prevSlide' };

function reducer(state: typeof initialState, action: SlideshowAction) {
  switch (action.type) {
    case 'startSlideshow':
      console.log(action.payload);

      return { ...state, currentSlide: action.payload ?? state.currentSlide, slideshowStarted: true };
    case 'stopSlideshow':
      return { ...state, slideshowStarted: false };
    case 'nextSlide':
      return { ...state, currentSlide: state.currentSlide >= state.galleryData.length ? state.currentSlide : state.currentSlide + 1 };
    case 'prevSlide':
      return { ...state, currentSlide: state.currentSlide <= 0 ? 0 : state.currentSlide - 1 };
    default:
      return state;
  }
}

export const SlideshowContext = createContext<SlideshowContextType | null>(null);

export function SlideshowContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <SlideshowContext.Provider value={{ state, dispatch }}>{children}</SlideshowContext.Provider>;
}
