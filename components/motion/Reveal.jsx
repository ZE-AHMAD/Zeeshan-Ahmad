"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

const directionVariants = {
  up: { y: 60 },
  down: { y: -60 },
  left: { x: -60 },
  right: { x: 60 },
  fade: {},
  scale: { scale: 0.85 },
  "zoom-in": { scale: 0.7 },
  "zoom-out": { scale: 1.3 },
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  once = true,
  margin = "-10% 0px -15% 0px",
  spring: useSpring = false,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin, once });
  const controls = useAnimation();
  const dir = directionVariants[direction] || directionVariants.up;

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: useSpring
          ? { type: "spring", stiffness: 90, damping: 22, delay }
          : { duration, delay, ease: [0.22, 1, 0.36, 1] },
      });
    }
  }, [isInView, controls, useSpring, duration, delay]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...dir }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
