import { useContext } from 'react';
import { SlideshowContext } from '../context/SlideshowContext';

export default function SlideshowButton() {
  const {
    state: { slideshowStarted, currentSlide },
    dispatch,
  } = useContext(SlideshowContext)!;

  function toggleSlideshow() {
    if (slideshowStarted) dispatch({ type: 'stopSlideshow' });
    if (!slideshowStarted && currentSlide === -1) dispatch({ type: 'startSlideshow', payload: 0 });
    if (!slideshowStarted && currentSlide >= 0) dispatch({ type: 'startSlideshow' });
  }

  return (
    <button className="uppercase text-link1 text-gray-500 min-h-12" onClick={() => toggleSlideshow()}>
      {slideshowStarted ? 'Stop slideshow' : 'Start slideshow'}
    </button>
  );
}
