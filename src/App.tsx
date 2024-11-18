import { useContext } from "react";
import GalleryGrid from "./components/GalleryGrid";
import Header from "./components/Header";
import { SlideshowContext } from "./context/SlideshowContext";
import GallerySlide from "./components/GallerySlide";
import { AnimatePresence } from "motion/react";

function App() {
  const {
    state: { slideshowStarted },
  } = useContext(SlideshowContext)!;

  return (
    <div>
      <div className="max-w-8xl container mx-auto grid min-h-screen grid-rows-[auto,1fr] bg-white text-body">
        <Header />
        <AnimatePresence mode="wait">
          {slideshowStarted ? <GallerySlide /> : <GalleryGrid />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
