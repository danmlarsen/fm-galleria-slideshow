import { useContext } from 'react';
import { SlideshowContext } from '../context/SlideshowContext';

export default function SlideshowButton() {
  const { slideshowStarted, setSlideshowStarted } = useContext(SlideshowContext)!;

  return (
    <button className="uppercase text-link1 text-gray-500 min-h-12" onClick={() => setSlideshowStarted(prev => !prev)}>
      {slideshowStarted ? 'Stop slideshow' : 'Start slideshow'}
    </button>
  );
}
