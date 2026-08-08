"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface Section {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  reverse: boolean;
}

const sections: Section[] = [
  {
    id: 1,
    title: "Security Workforce Management",
    description:
      "Our platform simplifies guard management by allowing contractors to post jobs, assign shifts, and track every movement in real time. Manage your entire security workforce from a single, easy-to-use dashboard.",
    imageUrl: "/image1.png",
    reverse: false,
  },
  {
    id: 2,
    title: "Seamless Hiring and Job Applications",
    description:
      "Contractors can quickly hire reliable guards for any project, while guards can browse and apply for verified job posts directly through the app. The hiring process has never been faster or more transparent.",
    imageUrl: "/image2.png",
    reverse: true,
  },
  {
    id: 3,
    title: "Real-Time Guard Tracking",
    description:
      "With our integrated GPS tracking system, contractors can monitor guards’ locations, activity, and performance in real time. Stay informed, improve accountability, and ensure every site is always secure.",
    imageUrl: "/image3.png",
    reverse: false,
  },
  {
    id: 4,
    title: "Secure Communication and Reporting",
    description:
      "The app provides built-in communication and reporting tools so that guards and contractors stay connected. Share updates, incident reports, and shift details instantly for better coordination and safety.",
    imageUrl: "/image4.png",
    reverse: true,
  },
  {
    id: 5,
    title: "Efficiency Through Technology",
    description:
      "Our mission is to transform the security industry with technology that enhances trust and efficiency. From hiring to tracking, every feature is designed to make security management simpler and smarter.",
    imageUrl: "/image5.png",
    reverse: false,
  },
];

const ScrollSection = ({ section }: { section: Section }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  // Motion transforms
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );
  const translateY = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <div
      ref={ref}
      className={`h-auto min-h-screen flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-32 py-16 ${
        section.reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <motion.div style={{ y: translateY }} className="max-w-xl">
        <h2 className="text-3xl md:text-5xl text-blue-950 font-semibold text-center o-outfit lg:text-left">
          {section.title}
        </h2>
        <motion.p
          style={{ y: translateY }}
          className="text-gray-700 text-base mt-10 md:text-lg  leading-relaxed text-center lg:text-left"
        >
          {section.description}
        </motion.p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        style={{ opacity, clipPath }}
        className="relative flex justify-center lg:justify-start"
      >
        <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
          <Image
            src={section.imageUrl}
            width={500}
            height={500}
            alt={`Section ${section.id}`}
            className="rounded-2xl object-fill w-72 h-72 md:w-[500px] md:h-[400px]"
          />
        </div>
      </motion.div>
    </div>
  );
};

/* ✅ Parent component */
export const Component = () => {
  return (
    <div className="flex flex-col px-6 md:px-10">
      {sections.map((section) => (
        <ScrollSection key={section.id} section={section} />
      ))}
    </div>
  );
};
