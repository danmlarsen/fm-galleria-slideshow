import { useContext } from 'react';
import GalleryGrid from './components/GalleryGrid';
import Header from './components/Header';
import { SlideshowContext } from './context/SlideshowContext';
import GallerySlide from './components/GallerySlide';

function App() {
  const { currentSlide } = useContext(SlideshowContext)!;

  return (
    <div className="container max-w-[1360px] mx-auto min-h-screen bg-white text-body grid grid-rows-[auto,1fr]">
      <Header />
      {currentSlide === -1 ? <GalleryGrid /> : <GallerySlide />}
    </div>
  );
}

export default App;
