import { useContext } from "react";
import GalleryGrid from "./components/GalleryGrid";
import Header from "./components/Header";
import { SlideshowContext } from "./context/SlideshowContext";
import GallerySlide from "./components/GallerySlide";

function App() {
  const {
    state: { slideshowStarted },
  } = useContext(SlideshowContext)!;

  return (
    <div className="">
      <div className="container mx-auto grid min-h-screen max-w-[1360px] grid-rows-[auto,1fr] bg-white text-body">
        <Header />
        {slideshowStarted ? <GallerySlide /> : <GalleryGrid />}
      </div>
    </div>
  );
}

export default App;
