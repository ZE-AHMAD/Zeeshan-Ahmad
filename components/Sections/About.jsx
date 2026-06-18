"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiZap, FiAward, FiSmile, FiMonitor, FiWind, FiGrid } from "react-icons/fi";
import Reveal from "@/components/motion/Reveal";

const stats = [
  { icon: FiCode, label: "Years Coding", value: "1+" },
  { icon: FiZap, label: "Projects Built", value: "15+" },
  { icon: FiSmile, label: "Happy Clients", value: "3+" },
  { icon: FiAward, label: "Technologies", value: "8+" },
];

export const About = () => {
  return (
    <section id="about" className="relative scroll-mt-28 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="mb-6 flex items-center justify-center gap-3 text-4xl font-bold leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <Reveal delay={0.1} className="text-white bg-clip-text">
            About
          </Reveal>
          <Reveal delay={0.15} className="bg-linear-to-r from-[#4E8F63] to-emerald-400 bg-clip-text text-transparent">
            Me
          </Reveal>
        </h1>

        <Reveal delay={0.25} duration={0.6} className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-zinc-300 md:text-lg">
          <p>Passionate about crafting clean, performant web experiences with modern technologies and a keen eye for detail.</p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal direction="left" delay={0.3} duration={0.6} className="lg:col-span-3">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/45 p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700">
              <div className="pointer-events-none absolute -inset-px bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="mb-4 text-2xl font-bold text-white">Who I Am</h3>
              <div className="space-y-4 leading-relaxed text-zinc-300">
                <p>
                  A Frontend Web Developer based in Pakistan with a deep passion for building modern,
                  accessible, and high-performance web applications. My journey started with curiosity
                  and grew into crafting digital experiences that make a difference.
                </p>
                <p>
                  Specializing in React, Next.js, and Tailwind CSS, I focus on clean, maintainable code
                  while pushing the boundaries of what the web can do. I believe great design is not just
                  about how things look, but how they feel and perform.
                </p>
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
                  <span className="mt-1 text-xs uppercase tracking-wider text-zinc-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.45} duration={0.6} className="mt-12">
          <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/45 p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700">
            <div className="pointer-events-none absolute -inset-px bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <h3 className="mb-6 text-xl font-bold text-white">What I Do</h3>
              <div className="grid gap-5 sm:grid-cols-3">
                {[
                  { icon: FiMonitor, title: "Frontend Development", desc: "Building responsive, accessible UIs with React, Next.js, and modern CSS architecture." },
                  { icon: FiWind, title: "Motion & Interaction", desc: "Adding life to interfaces with Framer Motion animations and thoughtful micro-interactions." },
                  { icon: FiGrid, title: "Clean Architecture", desc: "Writing maintainable, scalable code with component-driven design and best practices." },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-xl border border-white/5 bg-white/3 p-5"
                  >
                    <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#4E8F63]/20 text-[#4E8F63]">
                      <item.icon size={17} />
                    </span>
                    <h4 className="mb-2 font-semibold text-white">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-zinc-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
