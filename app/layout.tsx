import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krishna Chittella — Builder · Explorer · Engineer",
  description:
    "Personal site of Krishna Chittella. A curious technologist who moves across AI/ML, Data Engineering, and Full-Stack Development.",
  keywords: ["Krishna Chittella", "Full-Stack", "Data Engineering", "AI/ML", "Portfolio"],
  authors: [{ name: "Krishna Chittella" }],
  openGraph: {
    title: "Krishna Chittella — Builder · Explorer · Engineer",
    description: "Portfolio of Krishna Chittella — exploring AI/ML, Data Engineering & Full-Stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="font-inter bg-bg text-text-primary">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
