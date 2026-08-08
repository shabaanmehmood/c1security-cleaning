"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface HeroAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HeroAnimation({
  children,
  delay = 0,
  className,
}: HeroAnimationProps) {
  return (
    <motion.div
      custom={delay}
      variants={variants}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}