import { useState } from 'react';
import { GalleryDataType } from './GalleryGrid';

type AppProps = {
  image: GalleryDataType;
};

export default function GalleryGridImage({ image }: AppProps) {
  const [rowSpan, setRowSpan] = useState(1);

  function handleImageLoaded(event: React.SyntheticEvent<HTMLImageElement>) {
    const img = event.target as HTMLImageElement;
    const rowHeight = 10;
    const rowGap = 40;

    // const rowSpan = Math.ceil((img.naturalHeight / img.naturalWidth) * (310 / rowHeight));
    const rowSpan = Math.ceil((img.naturalHeight + rowGap) / (rowHeight + rowGap));
    setRowSpan(rowSpan);
  }

  return (
    <div className={` col-span-1 overflow-hidden`} style={{ gridRowEnd: `span ${rowSpan}` }}>
      <img className="object-cover h-full w-auto" src={image.images.thumbnail} alt="" onLoad={handleImageLoaded} />

      {/* <figure>
        <img className="" src={image.images.thumbnail} alt="" onLoad={handleImageLoaded} />
      </figure> */}
    </div>
  );
}
