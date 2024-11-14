import { useContext } from "react";
import MediaButton from "./MediaButton";
import { SlideshowContext } from "../context/SlideshowContext";

export default function GallerySlideButtons() {
  const {
    state: { galleryData, currentSlide },
    dispatch,
  } = useContext(SlideshowContext)!;

  return (
    <div className="flex gap-10">
      <MediaButton
        direction="back"
        onClick={() => dispatch({ type: "prevSlide" })}
        disabled={currentSlide <= 0}
      />
      <MediaButton
        direction="next"
        onClick={() => dispatch({ type: "nextSlide" })}
        disabled={currentSlide + 1 === galleryData.length}
      />
    </div>
  );
}
