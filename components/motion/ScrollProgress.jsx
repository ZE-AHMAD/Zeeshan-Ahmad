"use client";

import { useEffect, useRef } from "react";
import { useLenisScrollProgress } from "@/components/scroll/LenisSmoothScroll";

export default function ScrollProgress() {
  const barRef = useRef(null);
  const glowRef = useRef(null);
  const { scrollProgress } = useLenisScrollProgress() ?? {};

  useEffect(() => {
    if (!scrollProgress) return;

    const update = (latest) => {
      const p = latest * 100;

      if (barRef.current) {
        barRef.current.style.width = `${p}%`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform =
          p > (glowRef.current.dataset.prev ?? 0)
            ? "scaleX(1.02)"
            : "scaleX(0.98)";
        glowRef.current.dataset.prev = p;
      }
    };

    const unsubscribe = scrollProgress.on("change", update);
    return () => unsubscribe();
  }, [scrollProgress]);

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