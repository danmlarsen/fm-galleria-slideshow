import resolveConfig from "tailwindcss/resolveConfig";
// @ts-expect-error ...
import tailwindConfig from "../../tailwind.config.js";
import { useEffect, useState } from "react";
import { GalleryDataType } from "../context/SlideshowContext.js";
const { theme } = resolveConfig(tailwindConfig);

import { useMediaQuery } from "react-responsive";

type AppProps = {
  image: GalleryDataType;
};

export default function ProgressiveImage({ image }: AppProps) {
  const [imgSrc, setImgSrc] = useState(image.images.thumbnail);
  const [isLoading, setIsLoading] = useState(true);

  const isTabletOrLarger = useMediaQuery({
    query: `(min-width: ${theme.screens.md})`,
  });

  useEffect(() => {
    setIsLoading(true);
    const img = new Image();
    const src = isTabletOrLarger
      ? image.images.hero.large
      : image.images.hero.small;

    img.src = src;
    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
    };
  }, [image, isTabletOrLarger]);

  return (
    <img
      className={`h-[17.5rem] w-full object-cover transition duration-200 ease-linear md:h-[35rem] md:w-[29.6875rem] ${isLoading ? "blur-sm" : ""}`}
      src={imgSrc}
      alt={`Painting: ${image.name}`}
    />
  );
}
