import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/motion/ScrollProgress";
import SmoothScroll from "@/components/scroll/LenisSmoothScroll";
import CustomCursor from "@/components/layout/Cursor/CustomCursor";
import GlobalBackground from "@/components/layout/GlobalBackground";

// Initialize fonts
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

// SEO Metadata (Updated for your portfolio)
export const metadata = {
  title: "Zeeshan | Frontend Web Developer",
  description: "Portfolio of Zeeshan, a Frontend Web Developer crafting modern digital experiences with React, Next.js, and Framer Motion.",
  keywords: ["Web Developer", "Frontend", "React", "Next.js", "Framer Motion", "Portfolio"],
};

// Viewport settings for dark mode consistency
export const viewport = {
  themeColor: "#050505",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        {/* Cursor stays outside SmoothScroll to prevent coordinate desync */}
        <CustomCursor />

        <SmoothScroll>
          <GlobalBackground />
          {/* Scroll progress and Navbar */}
          <ScrollProgress />
          {/* Semantic main wrapper for page content */}
          <main className="relative z-10">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}