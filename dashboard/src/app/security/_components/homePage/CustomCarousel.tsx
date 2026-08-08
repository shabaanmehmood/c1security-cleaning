"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const CustomCarousel: React.FC = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const images: string[] = [
    "/home-carousel/carousal-image-1.jpg",
    "/home-carousel/carousal-image-2.jpg",
    "/home-carousel/carousal-image-3.jpg",
    "/home-carousel/carousal-image-4.jpg",
    "/home-carousel/carousal-image-5.jpg",
    "/home-carousel/carousal-image-6.jpg",
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex mb-20 flex-col items-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-center sm:text-5xl md:text-6xl font-semibold text-blue-950 mt-10 mb-8 sm:mb-12 md:mb-20 o-outfit"
      >
        Our Web App Showcase
      </motion.h2>

      {/* Carousel Container */}
      <div className="relative w-full h-64 md:h-80 lg:h-[420px] bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl overflow-hidden shadow-md">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          loop={true}
          navigation={false}
          speed={600}
          onSwiper={(sw: SwiperClass) => (swiperRef.current = sw)}
          onSlideChange={(sw: SwiperClass) => setActiveIndex(sw.realIndex)}
          className="h-full"
        >
          {images.map((src: string, i: number) => (
            <SwiperSlide
              key={i}
              className="h-full flex items-center justify-center transition-all duration-700 ease-in-out"
            >
              <motion.div
                key={i}
                initial={{ opacity: 0.6, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full h-full flex items-center justify-center p-4"
              >
                <img
                  src={src}
                  alt={`slide-${i}`}
                  className="max-h-full max-w-full w-auto h-auto rounded-xl shadow-sm"
                  draggable={false}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-5 flex items-center justify-center gap-6">
        <button
          aria-label="Previous slide"
          onClick={() => swiperRef.current?.slidePrev()}
          className="px-5 py-2 rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-blue-400 text-sm font-medium shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Previous
        </button>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="font-semibold text-blue-700">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>
          <span>/</span>
          <span className="opacity-80">
            {String(images.length).padStart(2, "0")}
          </span>
        </div>

        <button
          aria-label="Next slide"
          onClick={() => swiperRef.current?.slideNext()}
          className="px-5 py-2 rounded-lg border border-gray-200 bg-gradient-to-br from-blue-50 via-white to-blue-400 text-sm font-medium shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;
