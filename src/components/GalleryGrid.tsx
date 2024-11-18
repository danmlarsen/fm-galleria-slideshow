import { useContext } from "react";
import { motion } from "motion/react";

import GalleryGridImage from "./GalleryGridImage";
import { SlideshowContext } from "../context/SlideshowContext";

const containerVariants = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  hidden: {
    opacity: 0,
  },
};

export default function GalleryGrid() {
  const {
    state: { galleryData },
    dispatch,
  } = useContext(SlideshowContext)!;

  return (
    <motion.div
      key="GalleryGrid"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="container mx-auto grid grid-flow-dense auto-rows-[5px] justify-center gap-x-10 md:grid-cols-[repeat(auto-fill,19.375rem)]"
    >
      {galleryData.map((image, index) => (
        <GalleryGridImage
          key={image.name}
          image={image}
          onClick={() => dispatch({ type: "startSlideshow", payload: index })}
        />
      ))}
    </motion.div>
  );
}
