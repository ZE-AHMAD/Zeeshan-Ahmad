"use client";

import { useEffect, useRef, useState } from "react";

const dirToTransform = {
  up: "translateY(60px)",
  down: "translateY(-60px)",
  left: "translateX(-60px)",
  right: "translateX(60px)",
  fade: "none",
  scale: "scale(0.85)",
  "zoom-in": "scale(0.7)",
  "zoom-out": "scale(1.3)",
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
  once = true,
  margin = "-10% 0px -15% 0px",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin: margin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, margin]);

  const transform = dirToTransform[direction] || dirToTransform.up;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : transform,
        transition: `opacity ${duration}s ${delay}s cubic-bezier(0.22, 1, 0.36, 1), transform ${duration}s ${delay}s cubic-bezier(0.22, 1, 0.36, 1)`,
      }}
    >
      {children}
    </div>
  );
}
