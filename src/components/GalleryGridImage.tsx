import { useState } from "react";
import { motion } from "motion/react";
import { GalleryDataType } from "../context/SlideshowContext";

const itemVariant = {
  hidden: { opacity: 0, y: "20px" },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

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
      (img.naturalHeight + rowGap) / rowHeight,
      // (img.naturalHeight + rowGap) / (rowHeight + rowGap),
    );
    setRowSpan(rowSpan);
  }

  let colStart;
  if (image.name === "The Sleeping Gypsy") {
    colStart = " xl:col-start-4";
  }
  if (image.name === "The Great Wave off Kanagawa") {
    colStart = " lg:col-start-2";
  }
  if (image.name === "Van Gogh Self-portrait") {
    colStart = " xl:col-start-3";
  }
  if (image.name === "Lady with an Ermine") {
    colStart = "md:col-start-1";
  }
  if (image.name === "The Night Café") {
    colStart = "md:col-start-2";
  }
  if (image.name === "The Basket of Apples") {
    colStart = " xl:col-start-4";
  }
  if (image.name === "The Boy in the Red Vest") {
    colStart = " lg:col-start-1";
  }
  if (image.name === "Arnolfini Portrait") {
    colStart = " lg:col-start-2";
  }

  return (
    <motion.div
      key={image.name}
      variants={itemVariant}
      className={`col-span-1 pb-10 ${colStart ? `${colStart}` : ""}`}
      style={{ gridRowEnd: `span ${rowSpan}` }}
    >
      <figure
        className="group relative h-full cursor-pointer overflow-hidden"
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
    </motion.div>
  );
}
