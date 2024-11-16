import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { SlideshowContext } from "../context/SlideshowContext";
import GallerySlideNavigation from "./GallerySlideNavigation";
import ViewImageButton from "./ViewImageButton";
import GalleryLightbox from "./GalleryLightbox";

export default function GallerySlide() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const {
    state: { galleryData, currentSlide },
  } = useContext(SlideshowContext)!;

  const image = galleryData[currentSlide];

  return (
    <>
      {lightboxOpen &&
        createPortal(
          <GalleryLightbox
            image={image}
            onClose={() => setLightboxOpen(false)}
          />,
          document.body,
        )}
      <article>
        <div className="container mx-auto grid px-6 md:space-y-20 xl:min-h-[624px] xl:grid-cols-[855px_auto] xl:gap-x-[30px]">
          <div className="relative min-h-[398px]">
            <div className="relative max-w-[475px]">
              <picture>
                <source
                  srcSet={image.images.hero.large}
                  media="(min-width: 768px)"
                />
                <img className="" src={image.images.hero.small} alt="" />
              </picture>
              <ViewImageButton onClick={() => setLightboxOpen(true)} />
            </div>
            <div className="absolute -left-1 bottom-0 md:-top-1 md:bottom-auto md:left-auto md:right-0 xl:flex xl:h-full xl:flex-col xl:justify-between">
              <div className="w-[280px] space-y-2 bg-white p-6 md:w-[445px] md:px-[65px] md:pb-[65px] md:pt-0 xl:w-auto xl:max-w-[445px] xl:pr-0">
                <h1 className="text-heading2 md:text-heading1">{image.name}</h1>
                <h2 className="text-subhead1 text-gray-500">
                  {image.artist.name}
                </h2>
              </div>
              <div className="px-4 md:flex md:justify-end md:pr-[87px] xl:items-end xl:justify-start xl:pl-32 xl:pr-0">
                <img
                  className="size-16 md:size-32"
                  src={image.artist.image}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="relative max-w-[572px]">
            <h3 className="absolute right-0 top-0 -translate-y-5 text-display2 text-gray-100 md:left-0 md:right-auto md:-translate-y-2 md:text-display1">
              {image.year}
            </h3>
            <div className="relative z-10 max-w-[457px] md:ml-auto">
              <p className="py-20 text-gray-500 md:pb-10 md:pt-[75px]">
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
        </div>
        <GallerySlideNavigation />
      </article>
    </>
  );
}
