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
        <div className="grid min-h-[624px] gap-8 lg:grid-cols-[855px_auto]">
          <div className="relative flex items-start gap-8">
            <div className="absolute -top-1 right-0 z-10 w-[445px] space-y-6 bg-white px-16 pb-16">
              <h1 className="text-heading1">{image.name}</h1>
              <h2 className="text-subhead1 text-gray-500">
                {image.artist.name}
              </h2>
            </div>
            <div className="relative">
              <img
                className="h-[560px] w-[475px] object-cover"
                src={image.images.hero.large}
                alt={image.name}
              />
              <ViewImageButton onClick={() => setLightboxOpen(true)} />
            </div>
            <img
              className="self-end"
              src={image.artist.image}
              alt={`Image of the artist: ${image.artist.name}`}
            />
          </div>
          <div className="relative flex flex-col justify-center gap-20">
            <h3 className="absolute -top-4 right-0 text-display1 text-gray-100">
              {image.year}
            </h3>
            <p className="relative z-10 max-w-[350px] text-gray-500">
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
        <GallerySlideNavigation />
      </article>
    </>
  );
}
