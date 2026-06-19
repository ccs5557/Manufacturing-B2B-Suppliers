import type { Metadata } from "next";
import { Archivo, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Brand } from "@/components/site/Brand";
import { SideNav } from "@/components/site/SideNav";
import { MobileNav } from "@/components/site/MobileNav";
import { Footer } from "@/components/site/Footer";
import { MotionProvider } from "@/components/motion/MotionProvider";

// Synchronous, before-paint: enable motion whenever JS runs. Animations are
// forced on (per product decision) — the gate is JS-only, so no-JS still shows
// fully-visible content.
const MOTION_GATE = `try{document.documentElement.classList.add('motion')}catch(e){}`;

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://geometrix.io"),
  title: {
    default: "GEOMETRIX — Precision Engineered Components & Materials",
    template: "%s — GEOMETRIX",
  },
  description:
    "Premium B2B supply of engineered components and high-performance materials. Built in Sitiawan, Perak — trusted worldwide. ISO 9001 / AS9100D / NADCAP certified.",
  keywords: [
    "precision components Malaysia",
    "B2B engineered components",
    "high-performance materials supplier",
    "CNC manufacturing Sitiawan Perak",
    "AS9100D NADCAP supplier",
  ],
  openGraph: {
    title: "GEOMETRIX — Precision Engineered Components & Materials",
    description:
      "Premium B2B supply of engineered components and high-performance materials. Built in Sitiawan, Perak — trusted worldwide.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${archivo.variable} ${inter.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-surface text-ink">
        <script dangerouslySetInnerHTML={{ __html: MOTION_GATE }} />
        <MotionProvider />
        <MobileNav />
        <Brand />
        <SideNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
