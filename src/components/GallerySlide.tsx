import { useContext } from 'react';
import { SlideshowContext } from '../context/SlideshowContext';
import GallerySlideNavigation from './GallerySlideNavigation';

export default function GallerySlide() {
  const { galleryData, currentSlide } = useContext(SlideshowContext)!;

  const image = galleryData[currentSlide];

  return (
    <article>
      <div className="grid grid-cols-[855px_auto] gap-8 min-h-[624px]">
        <div className="relative flex items-start gap-8">
          <div className="w-[445px] absolute -top-1 right-0 px-16 pb-16 bg-white space-y-6">
            <h1 className="text-heading1">{image.name}</h1>
            <h2 className="text-gray-500 text-subhead1">{image.artist.name}</h2>
          </div>
          <img className="w-[475px] h-[560px] object-cover" src={image.images.gallery} alt={image.name} />
          <img className="self-end" src={image.artist.image} alt={`Image of the artist: ${image.artist.name}`} />
        </div>
        <div className="relative flex flex-col justify-center gap-20">
          <h3 className="text-display1 text-gray-100 absolute -top-4 right-0">{image.year}</h3>
          <p className="z-10 relative text-gray-500 max-w-[350px]">{image.description}</p>
          <a className="uppercase text-link2 text-gray-500 underline" href={image.source} target="_blank">
            Go to source
          </a>
        </div>
      </div>
      <GallerySlideNavigation />
    </article>
  );
}
