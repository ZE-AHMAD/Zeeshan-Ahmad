"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasFinePointer) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest("a, button, [data-cursor='hover'], input, textarea, select, .project-card");
      const isText = target.closest("[data-cursor='text']");
      if (isText) setIsHovering("text");
      else if (isInteractive) setIsHovering("interactive");
      else setIsHovering(false);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY]);

  if (typeof window !== "undefined" && !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    return null;
  }

  return (
    <>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
          html, body, * { cursor: none !important; }
        }
      `}</style>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovering === "interactive" ? 0 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.1 }}
      >
        <div className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(78,143,99,0.5)]" />
      </motion.div>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99999] rounded-full border border-emerald-500/50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          backgroundColor: isHovering === "interactive" ? "rgba(78, 143, 99, 0.1)" : "transparent",
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          width: { type: "spring", damping: 20, stiffness: 300 },
          height: { type: "spring", damping: 20, stiffness: 300 },
          backgroundColor: { duration: 0.2 },
          scale: { duration: 0.1 },
        }}
      >
        {isHovering === "interactive" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-emerald-400"
          >
            View
          </motion.span>
        )}
      </motion.div>
    </>
  );
}
