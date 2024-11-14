import { useState } from "react";
import { GalleryDataType } from "../context/SlideshowContext";

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

    const rowSpan = Math.ceil(
      (img.naturalHeight + rowGap) / (rowHeight + rowGap),
    );
    setRowSpan(rowSpan);
  }

  return (
    <div
      className={`group col-span-1`}
      style={{ gridRowEnd: `span ${rowSpan}` }}
    >
      <figure
        className="relative h-full cursor-pointer overflow-hidden"
        onClick={onClick}
      >
        <div className="absolute -inset-1 z-10 bg-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <img
          className="h-full w-[327px] max-w-none object-cover transition duration-300 group-hover:scale-110"
          src={image.images.thumbnail}
          alt={`Thumbnail of image: ${image.name}`}
          onLoad={handleImageLoaded}
        />
        <figcaption className="absolute bottom-0 left-0 right-0 z-20 flex h-[170px] flex-col justify-end bg-gradient-to-t from-black/85 p-8 text-white">
          <h2 className="text-heading2">{image.name}</h2>
          <p className="text-subhead2 text-white/75">{image.artist.name}</p>
        </figcaption>
      </figure>
    </div>
  );
}
