import { useRef } from "react";
import { motion } from "motion/react";

import { GalleryDataType } from "../context/SlideshowContext";

type AppProps = {
  image: GalleryDataType;
  onClose: () => void;
};

export default function GalleryLightbox({ image, onClose }: AppProps) {
  const imgRef = useRef(null);

  function handleClick(e: React.SyntheticEvent<HTMLElement>) {
    if (e.target !== imgRef.current) {
      onClose();
    }
  }

  return (
    <>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-30 bg-black/85"
      ></motion.div>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 grid place-items-center"
        onClick={handleClick}
      >
        <div className="m-6 grid max-h-dvh grid-rows-[auto,1fr] gap-10">
          <div className="flex justify-end">
            <button
              className="text-[0.875rem] text-link1 uppercase text-white transition-opacity duration-300 hover:opacity-25 focus:text-black focus:outline-none focus:ring-black focus-visible:ring-2 focus-visible:ring-offset-4"
              onClick={handleClick}
            >
              Close
            </button>
          </div>
          <div className="flex">
            <img
              className="h-full max-h-[85vh] w-auto object-cover"
              ref={imgRef}
              src={image.images.gallery}
              alt={image.name}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}
