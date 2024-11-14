import { useContext } from 'react';
import { SlideshowContext } from '../context/SlideshowContext';

export default function SlideshowButton() {
  const { currentSlide, setCurrentSlide } = useContext(SlideshowContext)!;

  const slideshowStarted = currentSlide !== -1;

  function handleClick() {
    if (currentSlide === -1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(-1);
    }
  }

  return (
    <button className="uppercase text-link1 text-gray-500 min-h-12" onClick={handleClick}>
      {slideshowStarted ? 'Stop slideshow' : 'Start slideshow'}
    </button>
  );
}
