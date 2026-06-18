"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiZap, FiAward, FiSmile, FiArrowRight, FiMonitor, FiWind, FiGrid } from "react-icons/fi";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from "react-icons/si";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const stats = [
  { icon: FiCode, label: "Years Coding", value: "3+" },
  { icon: FiZap, label: "Projects Built", value: "15+" },
  { icon: FiSmile, label: "Happy Clients", value: "10+" },
  { icon: FiAward, label: "Technologies", value: "8+" },
];

const milestones = [
  { year: "2023", title: "Started the Journey", desc: "Began exploring web development through HTML, CSS, and JavaScript. Built first static websites." },
  { year: "2024", title: "Full-Stack Foundations", desc: "Dove into React, Node.js, and databases. Built full-stack applications and learned REST APIs." },
  { year: "2025", title: "Specialization & Polish", desc: "Focused on the Next.js ecosystem, Framer Motion, and crafting polished, production-ready UIs." },
  { year: "2026", title: "Current & Beyond", desc: "Building modern, performant web experiences and pushing the boundaries of frontend development." },
];

const services = [
  { icon: FiMonitor, title: "Frontend Development", desc: "Building responsive, accessible UIs with React, Next.js, and modern CSS architecture." },
  { icon: FiWind, title: "Motion & Interaction", desc: "Adding life to interfaces with Framer Motion animations and thoughtful micro-interactions." },
  { icon: FiGrid, title: "Clean Architecture", desc: "Writing maintainable, scalable code with component-driven design and best practices." },
];

const techStack = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
];

const AboutPage = () => {
  return (
    <div className="relative min-h-screen text-white">
      <section id="about" className="relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-4 pb-8 pt-36 md:px-6 md:pt-44">
        <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
          <Reveal delay={0.1} duration={0.6} className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/35 px-4 py-1.5 text-xs font-medium text-zinc-300 shadow-lg backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              About
            </span>
          </Reveal>

          <h1 className="mb-6 text-5xl font-bold leading-[0.95] tracking-tight text-white drop-shadow-[0_4px_32px_rgba(0,0,0,0.9)] sm:text-6xl md:text-8xl lg:text-[8rem]">
            {["Who", "I Am"].map((word, i) => (
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
              A Frontend Web Developer passionate about crafting modern, accessible, and high-performance digital experiences.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-4 py-10 md:px-6 md:py-14">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <Reveal direction="left" delay={0.3} duration={0.6} className="lg:col-span-3">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/45 p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 md:p-12">
                <div className="pointer-events-none absolute -inset-px bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <span className="mb-3 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
                    Background
                  </span>
                  <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">The Short Story</h2>
                  <div className="space-y-5 leading-relaxed text-zinc-300">
                    <p>
                      Based in Pakistan, my journey into web development began with pure curiosity — inspecting
                      websites, tweaking styles, and wondering how things worked under the hood. That curiosity
                      quickly turned into a full-blown passion for building things on the web.
                    </p>
                    <p>
                      Today, I specialize in React, Next.js, and Tailwind CSS, focusing on writing clean,
                      maintainable code while pushing the boundaries of what the web can do. I believe great
                      design is not just about how things look, but how they feel and perform.
                    </p>
                    <p>
                      When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to
                      open-source projects, or finding new ways to make the web a better place.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="group/inline mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    Let&apos;s work together <FiArrowRight className="transition-transform duration-300 group-hover/inline:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.35} duration={0.6} className="lg:col-span-2">
              <div className="grid h-full grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="group flex flex-col items-center justify-center rounded-2xl border border-zinc-800/90 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700"
                  >
                    <stat.icon className="mb-2 text-2xl text-[#4E8F63]" />
                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                    <span className="mt-1 text-center text-xs uppercase tracking-wider text-zinc-500">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal delay={0.2} duration={0.6} className="mb-14 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">My Journey</h2>
            <p className="text-sm text-zinc-400">The path that brought me here</p>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[19px] top-0 h-full w-px bg-zinc-800 md:left-1/2 md:-translate-x-px" />

            <div className="space-y-10 md:space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex flex-col gap-4 md:flex-row md:items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="hidden flex-1 md:block" />

                  <div className="relative z-10 flex shrink-0 items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-xs font-bold text-emerald-400 shadow-lg shadow-emerald-500/10">
                      {milestone.year.slice(2)}
                    </div>
                  </div>

                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <div className="group rounded-2xl border border-zinc-800 bg-zinc-900/45 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 md:p-7">
                      <span className="mb-1 inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400/80">
                        {milestone.year}
                      </span>
                      <h3 className="mb-2 text-lg font-bold text-white">{milestone.title}</h3>
                      <p className="text-sm leading-relaxed text-zinc-400">{milestone.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal delay={0.15} duration={0.6} className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">Technologies I Use</h2>
            <p className="text-sm text-zinc-400">Tools and technologies I work with daily</p>
          </Reveal>

          <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex w-max gap-6 overflow-hidden py-2 md:gap-8"
              animate={{ x: ["0%", "-25%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            >
              {Array.from({ length: 4 }, () => techStack).flat().map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex shrink-0 items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-zinc-200 backdrop-blur-sm"
                  aria-hidden={index >= techStack.length * 2}
                >
                  <tech.icon className="size-6" style={{ color: tech.color }} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto w-full max-w-7xl">
          <Reveal delay={0.2} duration={0.6} className="mb-12 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl">What I Do</h2>
            <p className="text-sm text-zinc-400">How I can help bring your ideas to life</p>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={0.3 + index * 0.08} duration={0.6}>
                <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/45 p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700">
                  <div className="pointer-events-none absolute -inset-px bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#4E8F63]/20 text-lg text-[#4E8F63]">
                      <service.icon size={20} />
                    </span>
                    <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-zinc-400">{service.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
