import { useState } from 'react';
import { GalleryDataType } from '../context/SlideshowContext';

type AppProps = {
  image: GalleryDataType;
  onClick: () => void;
};

export default function GalleryGridImage({ image, onClick }: AppProps) {
  const [rowSpan, setRowSpan] = useState(1);

  function handleImageLoaded(event: React.SyntheticEvent<HTMLImageElement>) {
    const img = event.target as HTMLImageElement;
    const rowHeight = 5;
    const rowGap = 40;

    const rowSpan = Math.ceil((img.naturalHeight + rowGap) / (rowHeight + rowGap));
    setRowSpan(rowSpan);
  }

  return (
    <div className={` col-span-1 group`} style={{ gridRowEnd: `span ${rowSpan}` }}>
      <figure className="overflow-hidden h-full relative cursor-pointer" onClick={onClick}>
        <div className="-inset-1 bg-white/50 absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
        <img
          className="object-cover h-full w-[327px] max-w-none group-hover:scale-110 transition duration-300"
          src={image.images.thumbnail}
          alt={`Thumbnail of image: ${image.name}`}
          onLoad={handleImageLoaded}
        />
        <figcaption className="absolute bottom-0 left-0 right-0 h-[170px] bg-gradient-to-t from-black/85 p-8 text-white flex flex-col justify-end z-20">
          <h2 className="text-heading2">{image.name}</h2>
          <p className="text-subhead2 text-white/75">{image.artist.name}</p>
        </figcaption>
      </figure>
    </div>
  );
}
