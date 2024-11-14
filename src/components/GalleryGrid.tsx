import { useContext } from "react";

import GalleryGridImage from "./GalleryGridImage";
import { SlideshowContext } from "../context/SlideshowContext";

export default function GalleryGrid() {
  const {
    state: { galleryData },
    dispatch,
  } = useContext(SlideshowContext)!;

  return (
    <div className="grid grid-flow-dense auto-rows-[5px] grid-cols-[repeat(auto-fill,310px)] justify-center gap-10">
      {galleryData.map((image, index) => (
        <GalleryGridImage
          key={image.name}
          image={image}
          onClick={() => dispatch({ type: "startSlideshow", payload: index })}
        />
      ))}
    </div>
  );
}
