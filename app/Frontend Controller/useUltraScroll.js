"use client";

import { useEffect, useRef } from "react";

export function useUltraScroll() {
  const data = useRef({
    progress: 0,
    target: 0,
    velocity: 0,
    direction: 1,
    lastScroll: 0,
  });

  useEffect(() => {
    let rafId;

    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      // direction detection
      data.current.direction =
        scrollTop > data.current.lastScroll ? 1 : -1;

      // velocity (how fast user scrolls)
      data.current.velocity =
        Math.abs(scrollTop - data.current.lastScroll);

      data.current.lastScroll = scrollTop;
      data.current.target = progress;
    };

    const animate = () => {
      // smooth interpolation (physics feel)
      data.current.progress +=
        (data.current.target - data.current.progress) * 0.08;

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", updateScroll, { passive: true });

    animate();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return data;
}