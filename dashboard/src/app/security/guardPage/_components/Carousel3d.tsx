"use client";

import { memo, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { PanInfo } from "framer-motion";

type AnimationControlsType = ReturnType<
  typeof import("framer-motion").useAnimation
>;

interface CarouselProps {
  handleClick: (imgUrl: string, index: number) => void;
  controls: AnimationControlsType;
  cards: string[];
  isCarouselActive: boolean;
}

const CarouselComponent = ({
  handleClick,
  controls,
  cards,
  isCarouselActive,
}: CarouselProps) => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth <= 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const cylinderWidth = isSmallScreen ? 1100 : 1800;
  const faceCount = Math.max(1, cards.length);
  const faceWidth = cylinderWidth / faceCount;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue<number>(0);
  const transform = useTransform(
    rotation,
    (value: number) => `rotate3d(0, 1, 0, ${value}deg)`
  );

  return (
    <div
      className="flex h-full items-center justify-center bg-mauve-dark-2"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <motion.div
        drag={isCarouselActive ? "x" : false}
        className="relative flex h-full origin-center justify-center"
        style={{
          transform,
          rotateY: rotation,
          width: cylinderWidth,
          transformStyle: "preserve-3d",
        }}
        onDrag={(event: PointerEvent, info: PanInfo) => {
          if (!isCarouselActive) return;
          rotation.set(rotation.get() + info.offset.x * 0.05);
        }}
        onDragEnd={(event: PointerEvent, info: PanInfo) => {
          if (!isCarouselActive) return;
          controls.start({
            rotateY: rotation.get() + info.velocity.x * 0.05,
          });
        }}
        animate={controls}
      >
        {cards.map((imgUrl, i) => (
          <motion.div
            key={`key-${imgUrl}-${i}`}
            className="absolute flex h-full origin-center items-center justify-center rounded-xl bg-mauve-dark-2 p-2"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${
                i * (360 / faceCount)
              }deg) translateZ(${radius}px)`,
            }}
            onClick={() => handleClick(imgUrl, i)}
          >
            <motion.img
              src={imgUrl}
              alt={`keyword_${i} ${imgUrl}`}
              layoutId={`img-${imgUrl}`}
              className={
                "pointer-events-none w-full rounded-xl object-cover " +
                "max-w-[50vw] max-h-[40vh] sm:max-w-[50vw] sm:max-h-[55vh] md:max-w-[85vw] md:max-h-[80vh]"
              }
              initial={{ opacity: 0.6, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Carousel = memo(CarouselComponent);
Carousel.displayName = "Carousel";

export default Carousel;
