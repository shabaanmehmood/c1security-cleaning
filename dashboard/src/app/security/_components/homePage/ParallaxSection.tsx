"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import CustomCarousel from "./CustomCarousel";
import Footer from "../Footer";
import RealSolutionsSection from "./RealSolutionsSection";
import ForIndividualsSection from "./ForIndividualsSection";
import dynamic from "next/dynamic";

const AustraliaMap = dynamic(
  () => import("./AustraliaMap"),
  {
    ssr: false,
  }
);
const ParallaxSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative h-[200vh] bg-gray-100">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div className="absolute inset-0">
          <Image
            src="/sticky-image.png"
            alt="Parallax Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Overlay Content */}
        <motion.div className="relative z-10 max-w-2xl text-center text-white px-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl o-outfit font-semibold drop-shadow-lg">
            Real-Time Security Monitoring
          </h2>
          <p className="mt-6 text-lg md:text-xl drop-shadow-md">
            Stay in control with our smart tracking system that ensures every
            security operation runs smoothly, efficiently, and transparently
            anytime, anywhere.
          </p>
        </motion.div>
      </div>

      {/* Following Content */}
      <div className="relative z-20 bg-white rounded-t-[1rem] md:rounded-t-[2rem] overflow-hidden">
        <div className="max-w-5xl mt-20 mx-auto text-center px-6 md:px-16 space-y-20 text-gray-700">
          <div className="space-y-6">
            <h3 className="text-4xl sm:text-5xl md:text-6xl o-outfit  font-semibold text-blue-950 mt-10 mb-8 ">
              Our Mission
            </h3>
            <div className="w-20 h-1 bg-blue-950 mx-auto rounded-full"></div>
            <p className="text-lg md:text-2xl leading-relaxed">
              Our mission is to revolutionize the security industry by creating
              a reliable digital platform that seamlessly connects guards and
              contractors. We aim to simplify hiring, enhance transparency
              through real-time tracking, and ensure safety, trust, and
              efficiency in every security operation.
            </p>
          </div>

          {/* Vision Section */}
          <div className="space-y-6">
            <h3 className="text-4xl sm:text-5xl md:text-6xl o-outfit  font-semibold text-blue-950 mt-10 mb-8 ">
              Our Vision
            </h3>
            <div className="w-20 h-1 bg-blue-950 mx-auto rounded-full"></div>
            <p className="text-lg md:text-2xl leading-relaxed">
              Our vision is to become the leading digital solution for modern
              security management empowering guards with fair opportunities,
              enabling contractors with smarter control, and building a safer,
              more connected world through innovation and technology.
            </p>
          </div>
        </div>
        <div className="p-8">
          <AustraliaMap />
        </div>
        <RealSolutionsSection />
        <div className="mt-20">
          <CustomCarousel />
        </div>
        <div>
          <ForIndividualsSection />
        </div>
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
