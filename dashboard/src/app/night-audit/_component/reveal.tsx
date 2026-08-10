import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  index?: number;
  from?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  as?: "div" | "li" | "section";
};

const offsets = {
  up: { y: 1, x: 0 },
  down: { y: -1, x: 0 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Fades + slides content into place the first time it enters the viewport.
 * Respects prefers-reduced-motion by disabling the transform entirely.
 */
export default function Reveal({
  children,
  index = 0,
  from = "up",
  distance = 28,
  className,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = offsets[from];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : offset.x * distance,
      y: reduceMotion ? 0 : offset.y * distance,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.7,
        delay: reduceMotion ? 0 : index * 0.09,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px 0px -80px 0px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}