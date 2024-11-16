import { useRef } from "react";
import { GalleryDataType } from "../context/SlideshowContext";

type AppProps = {
  image: GalleryDataType;
  onClose: () => void;
};

export default function GalleryLightbox({ image, onClose }: AppProps) {
  const imgRef = useRef(null);

  function handleClick(e: React.SyntheticEvent<HTMLElement>) {
    if (e.target !== imgRef.current) {
      onClose();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/85"
      onClick={handleClick}
    >
      <div className="mx-6 space-y-10">
        <div className="flex justify-end">
          <button
            className="text-[14px] text-link1 uppercase text-white"
            onClick={handleClick}
          >
            Close
          </button>
        </div>
        <div>
          <img ref={imgRef} src={image.images.gallery} alt={image.name} />
        </div>
      </div>
    </div>
  );
}
