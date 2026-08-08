"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Carousel from "./Carousel3d";

function ThreeDPhotoCarousel() {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [isCarouselActive, setIsCarouselActive] = useState(true);
  const controls = useAnimation();

  const cards = useMemo(
    () => [
      "/app-carousel-guard/image1.png",
      "/app-carousel-guard/image2.png",
      "/app-carousel-guard/image3.png",
      "/app-carousel-guard/image4.png",
      "/app-carousel-guard/image5.png",
      "/app-carousel-guard/image6.png",
      "/app-carousel-guard/image7.png",
      "/app-carousel-guard/image8.png",
      "/app-carousel-guard/image9.png",
      "/app-carousel-guard/image10.png",
    ],
    []
  );

  const handleClick = (imgUrl: string) => {
    setActiveImg(imgUrl);
    setIsCarouselActive(false);
    controls.stop();
  };

  const handleClose = () => {
    setActiveImg(null);
    setIsCarouselActive(true);
  };

  useEffect(() => {
    document.body.style.overflow = activeImg ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeImg]);

  return (
    <motion.div layout className="relative">
      <AnimatePresence>
        {activeImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 flex mt-40 sm:mt-20 md:mt-5 justify-center z-50 p-5 md:p-24"
          >
            <motion.img
              layoutId={`img-${activeImg}`}
              src={activeImg}
              className="rounded-xl shadow-lg 
                max-w-[50vw] max-h-[40vh] 
                sm:max-w-[50vw] sm:max-h-[55vh] 
                md:max-w-[85vw] md:max-h-[60vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1.5 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[350px] sm:h-[500px] md:h-[650px] w-full overflow-hidden">
        <Carousel
          handleClick={handleClick}
          controls={controls}
          cards={cards}
          isCarouselActive={isCarouselActive}
        />
      </div>
    </motion.div>
  );
}

export default ThreeDPhotoCarousel;
