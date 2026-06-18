import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const ScrollProgress = dynamic(
  () => import("@/components/motion/ScrollProgress")
);
const SmoothScroll = dynamic(
  () => import("@/components/scroll/LenisSmoothScroll")
);
const CustomCursor = dynamic(
  () => import("@/components/layout/Cursor/CustomCursor")
);
const GlobalBackground = dynamic(
  () => import("@/components/layout/GlobalBackground")
);

// Initialize fonts
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://zeeshan.dev";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zeeshan | Frontend Web Developer",
    template: "%s | Zeeshan",
  },
  description:
    "Portfolio of Zeeshan, a Frontend Web Developer crafting modern digital experiences with React, Next.js, and Framer Motion.",
  keywords: [
    "Web Developer",
    "Frontend",
    "React",
    "Next.js",
    "Framer Motion",
    "Portfolio",
    "Pakistan",
  ],
  authors: [{ name: "Zeeshan Ahmad" }],
  creator: "Zeeshan Ahmad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Zeeshan Portfolio",
    title: "Zeeshan | Frontend Web Developer",
    description:
      "Portfolio of Zeeshan, a Frontend Web Developer crafting modern digital experiences.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Zeeshan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeeshan | Frontend Web Developer",
    description:
      "Portfolio of Zeeshan, a Frontend Web Developer crafting modern digital experiences.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#040a06",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[99999] focus:rounded-xl focus:bg-[#4E8F63] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>

        <CustomCursor />

        <SmoothScroll>
          <GlobalBackground />
          <ScrollProgress />
          <main id="main-content" className="relative z-10">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}