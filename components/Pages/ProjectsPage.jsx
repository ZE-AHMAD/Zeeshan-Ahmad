"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Image from "next/image";
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

const [featured, ...rest] = projects;

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={index * 0.08} duration={0.6} className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/45 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700">
      <div className="pointer-events-none absolute -inset-px bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between">
          <span className="rounded-full border border-zinc-700 bg-black/25 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
            Project {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-zinc-400">{project.description}</p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-zinc-700 bg-black/25 px-2.5 py-0.5 text-[11px] font-medium text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <motion.a
            href={project.link}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[#4E8F63] px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-[#4E8F63]/20 transition-all duration-300 hover:bg-[#5BA46F] hover:shadow-[#4E8F63]/40"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
            <span className="relative inline-flex items-center gap-1.5">
              Live Demo <FiArrowUpRight />
            </span>
          </motion.a>
          <motion.a
            href={project.github}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-xs font-semibold text-zinc-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            <FiGithub /> Source
          </motion.a>
        </div>
      </div>
    </Reveal>
  );
}

const ProjectsPage = () => {
  return (
    <div className="relative min-h-screen text-white">
      <section id="projects" className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-4 pb-8 pt-36 md:px-6 md:pt-44">
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <Reveal delay={0.1} duration={0.6} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-1.5 text-xs font-medium text-zinc-300 shadow-lg backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Portfolio
            </span>
          </Reveal>

          <h1 className="mb-6 text-5xl font-bold leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.9)] sm:text-6xl md:text-8xl lg:text-[8rem]">
            {["Featured", "Work"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`block ${i === 1 ? "bg-linear-to-r from-[#4E8F63] to-emerald-300 bg-clip-text text-transparent" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <Reveal delay={0.5} duration={0.6}>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
              A curated selection of projects that showcase my expertise in building modern, performant, and visually compelling web applications.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-4 pb-6 md:px-6">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal delay={0.6} duration={0.7}>
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/45 backdrop-blur-sm transition-all duration-500 hover:border-zinc-700">
              <div className="pointer-events-none absolute -inset-px bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 p-8 md:p-12">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                  <div>
                    <span className="mb-4 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                      Featured Project
                    </span>
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">{featured.title}</h2>
                    <p className="mb-6 text-sm leading-relaxed text-zinc-300 md:text-base">{featured.description}</p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {featured.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-zinc-700 bg-black/30 px-3 py-1 text-xs font-medium text-zinc-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href={featured.link}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[#4E8F63] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4E8F63]/20 transition-all duration-300 hover:bg-[#5BA46F] hover:shadow-[#4E8F63]/40"
                      >
                        <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                        <span className="relative inline-flex items-center gap-2">
                          View Live <FiArrowUpRight />
                        </span>
                      </motion.a>
                      <motion.a
                        href={featured.github}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-6 py-3 text-sm font-semibold text-zinc-200 transition-all duration-300 hover:bg-white/10 hover:text-white"
                      >
                        <FiGithub /> Source Code
                      </motion.a>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-emerald-500/20 via-zinc-900 to-black">
                    <Image
                      src="/Movie.png"
                      alt="Zee Movie project screenshot"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal delay={0.2} duration={0.6} className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">Other Projects</h2>
            <p className="text-sm text-zinc-400">More work I&apos;ve done recently</p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
