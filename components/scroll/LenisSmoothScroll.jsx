"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import Lenis from "lenis";
import { useMotionValue } from "framer-motion";

const LenisScrollContext = createContext(null);

export function useLenisScrollProgress() {
  return useContext(LenisScrollContext);
}

export default function SmoothScroll({ children }) {
  const scrollProgress = useMotionValue(0);

  const value = useMemo(() => ({ scrollProgress }), [scrollProgress]);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.5,
      smoothWheel: true,
      syncTouch: true,
      anchors: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    const onScroll = ({ progress }) => {
      scrollProgress.set(progress);
    };

    lenis.on("scroll", onScroll);

    let rafId;

    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", onScroll);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [scrollProgress]);

  return (
    <LenisScrollContext.Provider value={value}>
      {children}
    </LenisScrollContext.Provider>
  );
}
