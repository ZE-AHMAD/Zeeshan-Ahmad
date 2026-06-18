"use client";

import { useEffect, useRef } from "react";
import { useUltraScroll } from "@/app/Frontend Controller/useUltraScroll";

export default function ScrollProgress() {
  const barRef = useRef(null);
  const glowRef = useRef(null);

  const scroll = useUltraScroll();

  useEffect(() => {
    let rafId;

    const animate = () => {
      const p = scroll.current.progress;
      const v = scroll.current.velocity;

      // MAIN BAR
      if (barRef.current) {
        barRef.current.style.width = `${p}%`;
      }

      // GLOW INTENSITY BASED ON SPEED
      const glow = Math.min(v * 0.8, 25);

      if (glowRef.current) {
        glowRef.current.style.opacity = 0.3 + glow / 50;
        glowRef.current.style.transform =
          scroll.current.direction === 1
            ? "scaleX(1.02)"
            : "scaleX(0.98)";
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(rafId);
  }, [scroll]);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] bg-zinc-900/40 overflow-hidden">

      {/* glow layer */}
      <div
        ref={glowRef}
        className="
          absolute inset-0
          bg-gradient-to-r from-emerald-700/10 via-emerald-800/20 to-emerald-900/10
          blur-sm
          transition-transform
        "
      />

      {/* main bar */}
      <div
        ref={barRef}
        className="
          h-full
          bg-gradient-to-r from-emerald-300 to-emerald-400
          shadow-[0_0_25px_rgba(78,143,99,0.6)]
          will-change-[width]
        "
        style={{ width: "0%" }}
      />
    </div>
  );
}