"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "@/components/motion/Reveal";

const contactInfo = [
  { icon: FiMail, label: "Email", value: "zeeshan7240054@gmail.com", href: "mailto:zeeshan7240054@gmail.com" },
  { icon: FiMapPin, label: "Location", value: "Pakistan" },
];

const socialLinks = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="relative scroll-mt-28 px-4 py-20 md:px-6 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <h1 className="mb-6 flex items-center justify-center gap-3 text-4xl font-bold leading-[0.9] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          <Reveal delay={0.1} className="text-white">
            Get In
          </Reveal>
          <Reveal delay={0.15} className="bg-linear-to-r from-[#4E8F63] to-emerald-400 bg-clip-text text-transparent">
            Touch
          </Reveal>
        </h1>

        <Reveal delay={0.25} duration={0.6} className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-zinc-300 md:text-lg">
          <p>Have a project in mind or just want to say hi? I&apos;d love to hear from you.</p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <Reveal direction="left" delay={0.3} duration={0.6} className="lg:col-span-2">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/45 p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700">
              <div className="pointer-events-none absolute -inset-px bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="mb-6 text-xl font-bold text-white">Contact Info</h3>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4E8F63]/20 text-[#4E8F63]">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-zinc-500">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-medium text-white transition-colors hover:text-emerald-400">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-white">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 text-zinc-400 transition-all duration-300 hover:border-emerald-500/30 hover:text-emerald-400"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.35} duration={0.6} className="lg:col-span-3">
            <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/45 p-8 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700">
              <div className="pointer-events-none absolute -inset-px bg-linear-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="mb-6 text-xl font-bold text-white">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    aria-label="Your Name"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors duration-300 focus:border-[#4E8F63]"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    aria-label="Your Email"
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors duration-300 focus:border-[#4E8F63]"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  aria-label="Subject"
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors duration-300 focus:border-[#4E8F63]"
                />
                <textarea
                  placeholder="Your Message"
                  aria-label="Your Message"
                  rows={5}
                  className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition-colors duration-300 focus:border-[#4E8F63]"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[#4E8F63] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4E8F63]/20 transition-all duration-300 hover:bg-[#5BA46F] hover:shadow-[#4E8F63]/40"
                >
                  <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative flex items-center gap-2">
                    Send Message
                    <FiSend className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
