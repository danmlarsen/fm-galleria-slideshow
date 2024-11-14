import { useContext } from "react";
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
    <div className="mt-20">
      <div className="h-[1px] bg-gray-300">
        <div
          className="h-[1px] bg-black transition-all duration-300"
          style={{ width: `${progressBarWidth}%` }}
        ></div>
      </div>
      <div className="flex items-center justify-between py-6">
        <div className="space-y-2">
          <h4 className="text-heading3">{image.name}</h4>
          <h5 className="text-subhead2">{image.artist.name}</h5>
        </div>
        <GallerySlideButtons />
      </div>
    </div>
  );
}
