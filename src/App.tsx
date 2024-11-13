import GalleryGrid from './components/GalleryGrid';
import Header from './components/Header';
import { SlideshowContextProvider } from './context/SlideshowContext';

function App() {
  return (
    <SlideshowContextProvider>
      <div className="container max-w-[1360px] mx-auto min-h-screen bg-white">
        <Header />
        <GalleryGrid />
      </div>
    </SlideshowContextProvider>
  );
}

export default App;
