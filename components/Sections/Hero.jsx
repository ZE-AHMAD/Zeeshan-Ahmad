"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-28 flex-col items-center justify-center overflow-hidden px-4 pb-24 pt-32 md:px-6 md:pb-28 md:pt-36"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-1.5 shadow-lg backdrop-blur-md md:mb-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium text-zinc-300">Available for Work</span>
        </motion.div>

        <h1 className="mb-6 text-4xl font-bold leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.9)] sm:text-5xl md:text-7xl lg:text-[7.5rem]">
          {["Frontend", "Website", "Developer"].map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
              className={`block ${
                index === 1
                  ? "bg-linear-to-r from-[#4E8F63] to-emerald-300 bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(0,0,0,1)]"
                  : ""
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-300 drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)] md:text-lg"
        >
          I craft modern digital experiences using React, Next.js, Framer Motion and clean
          design systems focused on performance, usability and motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="relative z-20 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-12"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-[#4E8F63] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4E8F63]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5BA46F] hover:shadow-[#4E8F63]/40"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2">
              Let&apos;s Talk
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </motion.a>

          <motion.a
            href="/projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-6 py-3 text-sm font-semibold text-zinc-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
          >
            View Projects
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 md:flex"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-linear-to-b from-zinc-500 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
