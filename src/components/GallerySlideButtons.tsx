import { useContext } from 'react';
import MediaButton from './MediaButton';
import { SlideshowContext } from '../context/SlideshowContext';

export default function GallerySlideButtons() {
  const { galleryData, currentSlide, nextSlide, prevSlide } = useContext(SlideshowContext)!;

  return (
    <div className="flex gap-10">
      <MediaButton direction="back" onClick={() => prevSlide()} disabled={currentSlide <= 0} />
      <MediaButton direction="next" onClick={() => nextSlide()} disabled={currentSlide + 1 === galleryData.length} />
    </div>
  );
}
