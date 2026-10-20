import type { Metadata } from "next";
import { Chivo, Geist, JetBrains_Mono } from "next/font/google";
import "./playground.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const chivo = Chivo({ subsets: ["latin"], variable: "--font-chivo", display: "swap" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Playground | Krishna Chittella",
  description: "Apps, tools and experiments by Krishna Chittella.",
  icons: { icon: "/favicon.svg" },
};

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${chivo.variable} ${geist.variable} ${mono.variable}`}>
      <body className="bg-vn-canvas font-geist text-[0.9375rem] leading-6 text-vn-text antialiased selection:bg-magenta selection:text-white">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
