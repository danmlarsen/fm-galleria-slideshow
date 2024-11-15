import { GalleryDataType } from "../context/SlideshowContext";

type AppProps = {
  image: GalleryDataType;
  onClose: () => void;
};

export default function GalleryLightbox({ image, onClose }: AppProps) {
  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/85"></div>
      <div className="fixed inset-0 z-50 grid place-items-center">
        <div className="mx-6 space-y-10">
          <div className="flex justify-end">
            <button
              className="text-[14px] text-link1 uppercase text-white"
              onClick={onClose}
            >
              Close
            </button>
          </div>
          <div>
            <img src={image.images.gallery} alt={image.name} />
          </div>
        </div>
      </div>
    </>
  );
}
