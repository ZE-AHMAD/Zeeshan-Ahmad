"use client";

import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { FiHome, FiZap, FiFolder } from "react-icons/fi";

const navLinks = [
  { icon: FiHome, label: "Home", href: "#home" },
  { icon: FiZap, label: "Skills", href: "#skills" },
  { icon: FiFolder, label: "Projects", href: "#projects" },
];

const socialLinks = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email", isMail: true },
];

const Footer = () => {
  return (
    <footer className="px-4 pb-4 md:px-6">
      <Reveal duration={0.8} className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/3 backdrop-blur-xl">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="relative z-10 p-10 md:p-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-5xl font-black tracking-tight text-white md:text-7xl">ZEESHAN</h2>
              <p className="mt-3 text-lg text-emerald-400">Frontend Developer</p>
            </div>
            <p className="max-w-md leading-relaxed text-zinc-400">
              Crafting modern interfaces with React, Next.js, Tailwind CSS and Framer Motion.
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="relative z-10 flex flex-col gap-8 p-10 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white"
              >
                <link.icon size={13} className="text-zinc-500" />
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-zinc-400 transition-all duration-300 hover:border-emerald-500/30 hover:text-emerald-400"
              >
                <social.icon size={social.isMail ? 17 : 18} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 px-10 py-6 text-center text-sm text-zinc-500">
          &copy; 2026 Zeeshan Ahmad &mdash; Designed &amp; Developed with &hearts;
        </div>
      </Reveal>
    </footer>
  );
};

export default Footer;
