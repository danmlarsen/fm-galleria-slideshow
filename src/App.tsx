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
    <div className="">
      <div className="container mx-auto grid min-h-screen max-w-[1360px] grid-rows-[auto,1fr] overflow-hidden bg-white text-body">
        <Header />
        <AnimatePresence mode="wait">
          {slideshowStarted ? <GallerySlide /> : <GalleryGrid />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
