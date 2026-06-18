"use client";

import { About } from "@/components/Sections/About";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Project";
import Skills from "@/components/Sections/Skills";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}