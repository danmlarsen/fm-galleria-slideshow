import { useContext } from "react";
import { AnimatePresence, motion } from "motion/react";

import { SlideshowContext } from "../context/SlideshowContext";
import GallerySlideButtons from "./GallerySlideButtons";

export default function GallerySlideNavigation() {
  const {
    state: { galleryData, currentSlide },
  } = useContext(SlideshowContext)!;

  const image = galleryData[currentSlide];

  const galleryNumItems = galleryData.length;
  const progressBarWidth = ((currentSlide + 1) / galleryNumItems) * 100;

  return (
    <div className="max-w-8xl container fixed inset-x-0 bottom-0 z-20 mx-auto w-full bg-white">
      <div className="h-[1px] bg-gray-300">
        <div
          className="h-[1px] bg-black transition-all duration-300"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>
      <div className="flex min-h-[4.5rem] items-center justify-between px-6 py-4 md:min-h-24 md:px-10 md:py-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={image.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-2"
          >
            <h4 className="text-[0.875rem] leading-4 md:text-heading3">
              {image.name}
            </h4>
            <h5 className="text-[0.625rem] leading-3 md:text-subhead2">
              {image.artist.name}
            </h5>
          </motion.div>
        </AnimatePresence>

        <GallerySlideButtons />
      </div>
    </div>
  );
}
