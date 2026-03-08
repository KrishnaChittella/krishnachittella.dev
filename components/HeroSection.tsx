"use client";

import { motion } from "motion/react";
import Link from "next/link";
import AnimatedGrid from "./AnimatedGrid";
import FloatingProjectCards from "./FloatingProjectCards";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const identityWords = ["Code", "Systems", "Curiosity"];

const ctaButtons = [
  {
    label: "View Projects",
    href: "/projects",
    style: "primary-cyan",
  },
  {
    label: "Enter The Lab",
    href: "/experiments",
    style: "primary-pink",
  },
  {
    label: "Read Journal",
    href: "/journal",
    style: "ghost",
  },
  {
    label: "Contact Me",
    href: "/contact",
    style: "ghost",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      {/* Animated background */}
      <AnimatedGrid />

      {/* Left ambient glow */}
      <div
        className="absolute top-1/3 -left-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0, 240, 255, 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Right ambient glow */}
      <div
        className="absolute top-1/2 -right-40 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 46, 136, 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent, #0B0B0F)" }}
      />

      {/* Main layout: two columns on large screens */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          {/* Left: Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            {/* Top eyebrow */}
            <motion.div variants={item} className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-neon-cyan/60" />
              <span className="font-orbitron text-[10px] font-bold tracking-[0.35em] uppercase text-neon-cyan">
                Portfolio
              </span>
            </motion.div>

            {/* Main name */}
            <motion.h1
              variants={item}
              className="font-orbitron font-black leading-[0.95] tracking-tight mb-3"
            >
              <span className="block text-5xl sm:text-6xl md:text-7xl text-text-primary">
                Krishna
              </span>
              <span
                className="block text-5xl sm:text-6xl md:text-7xl"
                style={{
                  background: "linear-gradient(90deg, #00F0FF 0%, #0080FF 60%, #00F0FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  textShadow: "none",
                  filter: "drop-shadow(0 0 20px rgba(0, 240, 255, 0.4))",
                }}
              >
                Chittella
              </span>
            </motion.h1>

            {/* Full name subtitle */}
            <motion.p
              variants={item}
              className="font-inter text-xs text-text-muted/60 tracking-[0.15em] mb-7 uppercase"
            >
              Lakshmi Varaha Krishna Chittella
            </motion.p>

            {/* Identity line */}
            <motion.div
              variants={item}
              className="flex items-center gap-3 mb-8"
            >
              {identityWords.map((word, i) => (
                <span key={word} className="flex items-center gap-3">
                  <span className="font-orbitron text-sm font-semibold tracking-[0.2em] uppercase text-text-muted">
                    {word}
                  </span>
                  {i < identityWords.length - 1 && (
                    <span className="text-neon-cyan/30 text-[10px]">◆</span>
                  )}
                </span>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-text-muted text-base leading-[1.8] max-w-lg mb-10"
            >
              A curious engineer who moves across domains. Started with{" "}
              <span className="text-neon-cyan/80">AI&nbsp;&amp;&nbsp;ML</span>, shifted into{" "}
              <span className="text-neon-pink/80">Data Engineering</span>, and now building
              full-stack products end to end. The thread running through it all is the same:
              understand the system, then build something useful with it.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-3"
            >
              {ctaButtons.map((btn) => {
                if (btn.style === "primary-cyan") {
                  return (
                    <Link
                      key={btn.label}
                      href={btn.href}
                      className="group relative inline-flex items-center gap-2 px-6 py-3 font-orbitron text-[11px] font-bold tracking-[0.15em] uppercase overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-neon-cyan/10 border border-neon-cyan/50 group-hover:bg-neon-cyan/18 group-hover:border-neon-cyan transition-all duration-300" />
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ boxShadow: "inset 0 0 20px rgba(0,240,255,0.08)" }} />
                      <span className="relative text-neon-cyan">{btn.label}</span>
                      <span className="relative text-neon-cyan/50 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </Link>
                  );
                }
                if (btn.style === "primary-pink") {
                  return (
                    <Link
                      key={btn.label}
                      href={btn.href}
                      className="group relative inline-flex items-center gap-2 px-6 py-3 font-orbitron text-[11px] font-bold tracking-[0.15em] uppercase overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-neon-pink/8 border border-neon-pink/40 group-hover:bg-neon-pink/15 group-hover:border-neon-pink/60 transition-all duration-300" />
                      <span className="relative text-neon-pink">{btn.label}</span>
                      <span className="relative text-neon-pink/50 group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </Link>
                  );
                }
                return (
                  <Link
                    key={btn.label}
                    href={btn.href}
                    className="group inline-flex items-center gap-2 px-6 py-3 font-orbitron text-[11px] font-bold tracking-[0.15em] uppercase border border-white/10 hover:border-white/20 text-text-muted hover:text-text-primary transition-all duration-200"
                  >
                    {btn.label}
                    <span className="text-text-muted/40 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                );
              })}
            </motion.div>

            {/* Domain badges */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-2 mt-10"
            >
              {["AI / ML", "Data Engineering", "Full-Stack Dev"].map((domain, i) => {
                const colors = ["text-neon-cyan border-neon-cyan/20 bg-neon-cyan/5",
                  "text-neon-pink border-neon-pink/20 bg-neon-pink/5",
                  "text-neon-yellow border-neon-yellow/20 bg-neon-yellow/5"];
                return (
                  <span
                    key={domain}
                    className={`font-orbitron text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 border rounded-sm ${colors[i]}`}
                  >
                    {domain}
                  </span>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Floating project cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <FloatingProjectCards />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="font-orbitron text-[8px] tracking-[0.3em] uppercase text-text-muted/40">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-neon-cyan/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
