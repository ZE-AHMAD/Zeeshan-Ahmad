"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiUser, FiMenu, FiX, FiHome, FiFolder, FiInfo } from "react-icons/fi";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { name: "Home", href: "/", icon: FiHome },
    { name: "About", href: "/about", icon: FiInfo },
    { name: "Projects", href: "/projects", icon: FiFolder },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-3 z-50 px-4 md:top-4 md:px-6"
    >
      
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-4 py-3 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-300 hover:border-white/20 hover:shadow-[0_8px_40px_0_rgba(0,0,0,0.45)] md:px-6 md:py-3.5">
        
        {/* Logo Section */}
        <motion.div whileHover={{ scale: 1.02 }} className="shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#4E8F63] shadow-lg shadow-[#4E8F63]/20 transition-colors duration-300 hover:bg-[#5BA46F]">
              {/* Subtle shine effect on logo */}
              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 hover:translate-x-full" />
              <span className="relative text-lg font-bold text-white">Z</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold tracking-tight text-white">
                Zeeshan
              </h1>
              <p className="text-xs font-medium text-zinc-400">
                Web Developer
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {navlinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 transition-colors duration-300 hover:text-white"
            >
              <link.icon size={15} className="transition-colors duration-300 group-hover:text-[#4E8F63]" />
              {link.name}
              <span className="absolute bottom-0 left-4 h-0.5 w-0 rounded-full bg-[#4E8F63] transition-all duration-300 group-hover:w-[calc(100%-2rem)]" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          {/* Desktop CTA Button */}
          <Link
            href="/contact"
            className="group relative hidden items-center gap-2 overflow-hidden rounded-xl bg-[#4E8F63] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#4E8F63]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5BA46F] hover:shadow-[#4E8F63]/40 md:inline-flex"
          >
            {/* Shine effect on hover */}
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative flex items-center gap-2">
              Let&apos;s Talk
              <FiUser className="text-lg transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-4 right-4 top-20 z-40 overflow-hidden rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col p-4">
              {navlinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    <link.icon size={16} className="text-zinc-500" />
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navlinks.length * 0.1 }}
                className="mt-2"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#4E8F63] px-4 py-3 text-base font-semibold text-white shadow-lg shadow-[#4E8F63]/20 transition-colors hover:bg-[#5BA46F]"
                >
                  Let&apos;s Talk
                  <FiUser className="text-lg" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;