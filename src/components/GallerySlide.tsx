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

      <motion.main
        className="relative mb-24 min-h-[62.5rem] overflow-x-clip md:min-h-[68.75rem] lg:min-h-[40.625rem]"
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
            className="container absolute inset-x-0 mx-auto grid h-full grid-rows-[auto,1fr] px-6 md:space-y-20 lg:h-auto lg:min-h-[39rem] lg:grid-cols-[40.625rem_auto] lg:grid-rows-none lg:gap-x-[1.875rem] lg:space-y-0 xl:grid-cols-[53.4375rem_auto] xl:px-0"
          >
            <div className="relative h-[24.875rem] md:h-auto">
              <div className="relative max-w-[29.6875rem]">
                <picture>
                  <source
                    srcSet={image.images.hero.large}
                    media={`(min-width: ${theme.screens.md})`}
                  />
                  <img
                    className="object-cover md:h-[35rem] md:w-[29.6875rem]"
                    src={image.images.hero.small}
                    alt={`Painting: ${image.name}`}
                  />
                </picture>
                <ViewImageButton onClick={() => setLightboxOpen(true)} />
              </div>
              <div className="absolute -bottom-1 -left-1 md:-top-1 md:bottom-auto md:left-auto md:right-0 lg:flex lg:h-full lg:flex-col lg:justify-between">
                <div className="w-[17.5rem] space-y-2 bg-white p-6 md:w-[27.8125rem] md:px-[4.0625rem] md:pb-[4.0625rem] md:pt-0 lg:pr-6">
                  <h2 className="text-heading2 md:text-heading1 lg:text-heading2 xl:text-heading1">
                    {image.name}
                  </h2>
                  <h3 className="text-subhead1 text-gray-500">
                    {image.artist.name}
                  </h3>
                </div>
                <div className="px-4 md:flex md:justify-end md:pr-[5.4375rem] lg:pr-0 xl:items-end xl:justify-start xl:pl-32">
                  <img
                    className="size-16 object-cover md:size-32"
                    src={image.artist.image}
                    alt={`Picture of ${image.artist.name}`}
                  />
                </div>
              </div>
            </div>

            <div className="relative max-w-[35.75rem]">
              <h2 className="absolute right-0 top-0 -translate-y-5 text-display2 text-gray-100 md:left-0 md:right-auto md:-translate-y-2 md:text-display1 lg:left-auto lg:right-0 lg:text-display2 xl:text-display1">
                {image.year}
              </h2>
              <div className="relative z-10 flex h-full max-w-[28.5625rem] flex-col items-start justify-between gap-4 pb-14 pt-[6.5625rem] md:ml-auto lg:ml-0 lg:max-w-[21.875rem]">
                <p className="text-gray-500">{image.description}</p>
                <a
                  className="text-link2 uppercase text-gray-500 underline transition duration-300 hover:text-black focus:outline-none focus:ring-black focus-visible:ring-2 focus-visible:ring-offset-4"
                  href={image.source}
                  target="_blank"
                >
                  Go to source
                </a>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </motion.main>
      <GallerySlideNavigation />
    </>
  );
}
