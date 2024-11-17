import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { SlideshowContext } from "../context/SlideshowContext";
import GallerySlideNavigation from "./GallerySlideNavigation";
import ViewImageButton from "./ViewImageButton";
import GalleryLightbox from "./GalleryLightbox";

import resolveConfig from "tailwindcss/resolveConfig";
// @ts-expect-error ...
import tailwindConfig from "../../tailwind.config.js";
const { theme } = resolveConfig(tailwindConfig);

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction === 0 ? 0 : direction >= 0 ? "100%" : "-100%",
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? "100%" : "-100%",
  }),
};

export default function GallerySlide() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const {
    state: { galleryData, currentSlide, direction },
  } = useContext(SlideshowContext)!;

  const image = galleryData[currentSlide];

  return (
    <>
      {createPortal(
        <AnimatePresence>
          {lightboxOpen && (
            <GalleryLightbox
              image={image}
              onClose={() => setLightboxOpen(false)}
            />
          )}
        </AnimatePresence>,
        document.body,
      )}

      <motion.div
        className="relative mb-24 min-h-[1000px] overflow-x-clip md:min-h-[1100px] lg:min-h-[650px]"
        key="GallerySlide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AnimatePresence custom={direction}>
          <motion.article
            key={image.name}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="container absolute inset-x-0 mx-auto px-6 md:space-y-20 lg:grid lg:min-h-[624px] lg:grid-cols-[650px_auto] lg:gap-x-[30px] lg:space-y-0 xl:grid-cols-[855px_auto]"
          >
            <div className="relative h-[398px] md:h-auto">
              <div className="relative max-w-[475px]">
                <picture>
                  <source
                    srcSet={image.images.hero.large}
                    media={`(min-width: ${theme.screens.md})`}
                  />
                  <img className="" src={image.images.hero.small} alt="" />
                </picture>
                <ViewImageButton onClick={() => setLightboxOpen(true)} />
              </div>
              <div className="absolute -bottom-1 -left-1 md:-top-1 md:bottom-auto md:left-auto md:right-0 lg:flex lg:h-full lg:flex-col lg:justify-between">
                <div className="w-[280px] space-y-2 bg-white p-6 md:w-[445px] md:px-[65px] md:pb-[65px] md:pt-0 lg:pr-6">
                  <h1 className="text-heading2 md:text-heading1">
                    {image.name}
                  </h1>
                  <h2 className="text-subhead1 text-gray-500">
                    {image.artist.name}
                  </h2>
                </div>
                <div className="px-4 md:flex md:justify-end md:pr-[87px] lg:pr-0 xl:items-end xl:justify-start xl:pl-32">
                  <img
                    className="size-16 md:size-32"
                    src={image.artist.image}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="relative max-w-[572px]">
              <h3 className="absolute right-0 top-0 -translate-y-5 text-display2 text-gray-100 md:left-0 md:right-auto md:-translate-y-2 md:text-display1 lg:left-auto lg:right-0 lg:text-display2 xl:text-display1">
                {image.year}
              </h3>
              <div className="relative z-10 max-w-[457px] md:ml-auto lg:ml-0 lg:max-w-[350px]">
                <p className="py-20 text-gray-500 md:pb-10 md:pt-[75px] lg:py-20">
                  {image.description}
                </p>
                <a
                  className="text-link2 uppercase text-gray-500 underline transition duration-300 hover:text-black"
                  href={image.source}
                  target="_blank"
                >
                  Go to source
                </a>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </motion.div>
      <GallerySlideNavigation />
    </>
  );
}
