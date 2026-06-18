"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useLenisScrollProgress } from "@/components/scroll/LenisSmoothScroll";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";

const particles = [
  { id: 0, x: 15, y: 8, size: 2.5, duration: 12, delay: 2, drift: 12, distance: 50 },
  { id: 1, x: 35, y: 18, size: 1.5, duration: 10, delay: 4, drift: -8, distance: 40 },
  { id: 2, x: 55, y: 12, size: 2, duration: 14, delay: 1, drift: 15, distance: 55 },
  { id: 3, x: 75, y: 22, size: 1.8, duration: 11, delay: 6, drift: -10, distance: 35 },
  { id: 4, x: 25, y: 28, size: 1.2, duration: 13, delay: 3, drift: 8, distance: 45 },
  { id: 5, x: 65, y: 10, size: 2.2, duration: 9, delay: 5, drift: -14, distance: 50 },
  { id: 6, x: 45, y: 25, size: 1.6, duration: 12, delay: 7, drift: 10, distance: 40 },
  { id: 7, x: 85, y: 15, size: 1.3, duration: 11, delay: 0, drift: -6, distance: 45 },
];

export default function GlobalBackground() {
  const ctx = useLenisScrollProgress();
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const rawProgress = ctx?.scrollProgress;

  const scrollProgress = useSpring(rawProgress ?? 0, {
    stiffness: 60,
    damping: 24,
    restDelta: 0.001,
  });

  const yImage = useTransform(scrollProgress, [0, 0.4, 1], [0, -80, -220]);
  const xImage = useTransform(scrollProgress, [0, 1], [0, 28]);
  const scale = useTransform(scrollProgress, [0, 0.5, 1], [1, 1.08, 1.2]);
  const rotate = useTransform(scrollProgress, [0, 1], [0, -3]);
  const opacity = useTransform(scrollProgress, [0, 0.6, 1], [0.5, 0.34, 0.16]);
  const blur = useTransform(scrollProgress, [0, 1], [0, 2.8]);
  const blurFilter = useTransform(blur, (v) => `blur(${v}px)`);
  const scrimStrength = useTransform(scrollProgress, [0, 1], [0, 0.35]);
  const radialStrength = useTransform(scrollProgress, [0, 1], [0, 0.3]);

  useEffect(() => {
    let rafId;
    const handleMouse = (e) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setMouse({ x: e.clientX / innerWidth, y: e.clientY / innerHeight });
      });
    };
    addEventListener("mousemove", handleMouse, { passive: true });
    return () => {
      removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const glowStyle = useMemo(
    () => ({
      background: `radial-gradient(500px at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(78, 143, 99, 0.06), transparent 70%)`,
    }),
    [mouse]
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-linear-to-bl from-emerald-950 to-black" />

      <div
        className="absolute inset-0 transition-[background] duration-[1200ms] ease-out will-change-[background]"
        style={glowStyle}
      />

      <div
        className="absolute bottom-[10%] left-1/2 h-[45vh] w-[50vw] -translate-x-1/2 rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(78, 143, 99, 0.06), transparent 70%)",
          animation: "breathe 6s ease-in-out infinite",
        }}
      />

      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-emerald-400/20"
          style={{
            left: `${p.x}%`,
            bottom: `${p.y}%`,
            width: p.size,
            height: p.size,
            "--rise": `${-p.distance}px`,
            "--drift": `${p.drift}px`,
            animation: `particle-rise ${p.duration}s ${p.delay}s linear infinite`,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0 flex items-end justify-center"
        style={{ x: xImage, y: yImage, scale, rotate, opacity, filter: blurFilter }}
      >
        <div className="relative h-[50vh] w-auto max-w-[90vw] aspect-[5/7] sm:h-[58vh] md:h-[68vh] lg:max-h-[720px]">
          <Image
            src="/Ninja.png"
            alt=""
            fill
            priority
            className="object-contain object-bottom"
            sizes="(max-width: 768px) 90vw, 50vw"
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(0,0,0,0.55),transparent)]" />

      <motion.div
        className="absolute inset-0 bg-linear-to-b from-black/60 via-black/30 to-black/90"
        style={{ opacity: scrimStrength }}
      />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(0,0,0,0.7),transparent)]"
        style={{ opacity: radialStrength }}
      />
    </div>
  );
}
