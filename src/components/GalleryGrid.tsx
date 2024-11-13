import galleryData from '../assets/data.json';

import GalleryGridImage from './GalleryGridImage';

export type GalleryDataArrayType = typeof galleryData;

export type GalleryDataType = GalleryDataArrayType[0];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(310px,1fr))] auto-rows-[10px] grid-flow-dense gap-10 justify-items-center">
      {galleryData.map(image => (
        <GalleryGridImage key={image.name} image={image} />
      ))}
    </div>
  );
}
