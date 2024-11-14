import { useContext } from 'react';

import GalleryGridImage from './GalleryGridImage';
import { SlideshowContext } from '../context/SlideshowContext';

export default function GalleryGrid() {
  const { galleryData, setCurrentSlide } = useContext(SlideshowContext)!;

  return (
    <div className="grid grid-cols-[repeat(auto-fill,310px)] auto-rows-[5px] gap-10 grid-flow-dense justify-center ">
      {galleryData.map((image, index) => (
        <GalleryGridImage key={image.name} image={image} onClick={() => setCurrentSlide(index)} />
      ))}
    </div>
  );
}
