"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  if (reduce) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 z-50 h-[2px] origin-left bg-copper"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
