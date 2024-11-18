import React, { useState } from "react";
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
  rowHeight?: number;
  rowGap?: number;
};

export default function GalleryGridImage({
  image,
  onClick,
  rowHeight = 5,
  rowGap = 40,
}: AppProps) {
  const [rowSpan, setRowSpan] = useState(50);

  function handleImageLoaded(event: React.SyntheticEvent<HTMLImageElement>) {
    const img = event.target as HTMLImageElement;

    const rowSpan = Math.ceil(
      (img.naturalHeight + rowGap) / rowHeight,
      // (img.naturalHeight + rowGap) / (rowHeight + rowGap),
    );
    setRowSpan(rowSpan);
  }

  function handleClick(event: React.SyntheticEvent) {
    if (event.type === "click") onClick();
  }

  function handleKeydown(event: React.KeyboardEvent) {
    if (
      (event.type === "keydown" && event.code === "Space") ||
      (event.type === "keydown" && event.code === "Enter")
    ) {
      event.preventDefault();
      onClick();
    }
  }

  let colStart;
  if (image.name.toLocaleLowerCase() === "The Sleeping Gypsy".toLowerCase()) {
    colStart = " xl:col-start-4";
  }
  if (
    image.name.toLocaleLowerCase() ===
    "The Great Wave off Kanagawa".toLowerCase()
  ) {
    colStart = " lg:col-start-2";
  }
  if (
    image.name.toLocaleLowerCase() === "Van Gogh self-portrait".toLowerCase()
  ) {
    colStart = " xl:col-start-3";
  }
  if (image.name.toLocaleLowerCase() === "Lady with an Ermine".toLowerCase()) {
    colStart = "md:col-start-1";
  }
  if (image.name.toLocaleLowerCase() === "The Night Café".toLowerCase()) {
    colStart = "md:col-start-2";
  }
  if (image.name.toLocaleLowerCase() === "The Basket of Apples".toLowerCase()) {
    colStart = " xl:col-start-4";
  }
  if (
    image.name.toLocaleLowerCase() === "The Boy in the Red Vest".toLowerCase()
  ) {
    colStart = " lg:col-start-1";
  }
  if (image.name.toLocaleLowerCase() === "Arnolfini Portrait".toLowerCase()) {
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
        className="group relative h-full cursor-pointer overflow-hidden transition-shadow duration-300 focus:text-black focus:outline-none focus:ring-black focus-visible:ring-2 focus-visible:ring-offset-4"
        onClick={handleClick}
        onKeyDown={handleKeydown}
        tabIndex={0}
        role="button"
      >
        <div className="absolute -inset-1 z-10 bg-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        <img
          className="h-full object-cover transition duration-300 group-hover:scale-110"
          src={image.images.thumbnail}
          alt={`Thumbnail of image: ${image.name}`}
          onLoad={handleImageLoaded}
        />
        <figcaption className="absolute bottom-0 left-0 right-0 z-20 flex h-[10.625rem] flex-col justify-end gap-[0.375rem] bg-gradient-to-t from-black/85 px-8 pb-8 text-white">
          <h2 className="text-heading2">{image.name}</h2>
          <p className="text-subhead2 text-white/75">{image.artist.name}</p>
        </figcaption>
      </figure>
    </motion.div>
  );
}
