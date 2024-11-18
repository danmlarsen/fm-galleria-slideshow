import { useContext } from "react";
import { SlideshowContext } from "../context/SlideshowContext";

export default function SlideshowButton() {
  const {
    state: { slideshowStarted, currentSlide },
    dispatch,
  } = useContext(SlideshowContext)!;

  function toggleSlideshow() {
    if (slideshowStarted) dispatch({ type: "stopSlideshow" });
    if (!slideshowStarted && currentSlide === -1)
      dispatch({ type: "startSlideshow", payload: 0 });
    if (!slideshowStarted && currentSlide >= 0)
      dispatch({ type: "startSlideshow" });
  }

  return (
    <button
      className="min-h-12 text-link1 uppercase text-gray-500 transition duration-300 hover:text-black focus:text-black focus:outline-none focus:ring-black focus-visible:ring-2 focus-visible:ring-offset-4"
      onClick={() => toggleSlideshow()}
    >
      {slideshowStarted ? "Stop slideshow" : "Start slideshow"}
    </button>
  );
}
