"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiNodedotjs,
    SiGithub,
} from "react-icons/si";

const SkillCard = ({ skill, index }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, active: false });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            active: true,
        });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0, active: false });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: mousePosition.active
                        ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${skill.color}30, transparent 40%)`
                        : "none",
                }}
            />

            <div className="relative z-10">
                <div className="mb-4 flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300">
                        <skill.icon className="text-3xl" style={{ color: skill.color }} />
                    </div>
                    <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        {skill.category}
                    </span>
                </div>

                <h3 
                    className="mb-3 text-xl font-bold text-white transition-colors duration-300"
                    style={{ color: mousePosition.active ? skill.color : "white" }}
                >
                    {skill.name}
                </h3>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-400">Proficiency</span>
                        <span className="text-xs font-bold text-white">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 95, category: "Frontend" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 90, category: "Frontend" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 92, category: "Frontend" },
        { name: "React", icon: SiReact, color: "#61DAFB", level: 90, category: "Frontend" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 85, category: "Frontend" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", level: 95, category: "Styling" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 80, category: "Backend" },
        { name: "Express", icon: SiExpress, color: "#ffffff", level: 78, category: "Backend" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 75, category: "Database" },
        // { name: "GitHub", icon: SiGithub, color: "#ffffff", level: 88, category: "Tools" },
    ];

    const techStack = [
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#ffffff" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    ];

    const marqueeLoops = 4;
    const marqueeItems = Array.from({ length: marqueeLoops }, () => techStack).flat();

    return (
        <section id="skills" className="relative flex scroll-mt-28 items-center justify-center overflow-x-hidden px-4 py-20 md:px-6 md:py-24">
            <div className="w-full max-w-7xl">
                <h1 className="mb-6 flex items-center justify-center gap-3 text-4xl font-bold leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    <Reveal delay={0.1} className="text-white bg-clip-text">
                        My
                    </Reveal>
                    <Reveal delay={0.15} className="bg-linear-to-r from-[#4E8F63] to-emerald-400 bg-clip-text text-transparent">
                        Skills
                    </Reveal>
                </h1>
                <Reveal delay={0.3} duration={0.6} className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-zinc-300 md:text-lg">
                    <p>A curated stack of technologies I use to build fast, modern, and reliable web apps.</p>
                </Reveal>

                <div className="relative mt-12 w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        className="flex w-max gap-6 overflow-hidden py-2 md:gap-8"
                        animate={{ x: ["0%", "-25%"] }}
                        transition={{
                            duration: 28,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {marqueeItems.map((tech, index) => (
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

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;