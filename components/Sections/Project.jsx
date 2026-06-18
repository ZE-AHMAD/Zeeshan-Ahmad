"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "@/components/motion/Reveal";

const projects = [
  {
    title: "Zee Movie",
    description:
      "A high-performance, real-time platform for streaming movie trailers and thrilling content",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, interactive portfolio website built with React and Node.js, featuring smooth animations and a clean, responsive design",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
    github: "#",
  },
  {
    title: "ECommerce Website",
    description:
      "A headless e-commerce storefront engineered for speed and conversion, with optimized catalog rendering and seamless checkout",
    tags: ["Next.js", "Framer Motion", "Zustand"],
    link: "#",
    github: "#",
  },
  {
    title: "Burno Website Clone",
    description:
      "A pixel-perfect clone of the Burno website built with Express and PostgreSQL, featuring robust caching and rate limiting",
    tags: ["Express", "PostgreSQL", "Docker", "AWS"],
    link: "#",
    github: "#",
  },
];

function ProjectCard({ project, index }) {
  const isReverse = index % 2 !== 0;

  return (
    <Reveal
      delay={index * 0.08}
      duration={0.6}
      className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/45 p-6 backdrop-blur-sm"
    >
      <div className="pointer-events-none absolute -inset-px bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className={`relative z-10 grid items-center gap-8 lg:grid-cols-2 ${isReverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-emerald-500/15 via-zinc-900 to-black p-8">
          <span className="absolute right-5 top-4 text-6xl font-bold leading-none text-white/5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Featured Case Study</p>
          <h3 className="mt-3 text-3xl font-bold text-white md:text-4xl">{project.title}</h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base">
            {project.description}
          </p>
        </div>

        <div>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-700 bg-black/25 px-3 py-1 text-xs font-medium text-zinc-200 md:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href={project.link}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[#4E8F63] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#4E8F63]/20 transition-all duration-300 hover:bg-[#5BA46F] hover:shadow-[#4E8F63]/40"
            >
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              <span className="relative inline-flex items-center gap-2">
                Live Demo
                <FiArrowUpRight className="transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
              </span>
            </motion.a>

            <motion.a
              href={project.github}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              <FiGithub />
              GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

const Project = () => {
  return (
    <section id="projects" className="relative scroll-mt-28 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-6 flex items-center justify-center gap-3 text-4xl font-bold leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <Reveal delay={0.1} className="text-white">
            My
          </Reveal>
          <Reveal delay={0.15} className="bg-linear-to-r from-[#4E8F63] to-emerald-400 bg-clip-text text-transparent">
            Projects
          </Reveal>
        </h2>

        <Reveal delay={0.25} duration={0.6} className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-zinc-300 md:mb-14 md:text-lg">
          <p>Selected work focused on performance, thoughtful UX, and production-ready engineering.</p>
        </Reveal>

        <div className="space-y-6 md:space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
