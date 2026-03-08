"use client";

import { motion } from "motion/react";
import Link from "next/link";
import AnimatedGrid from "./AnimatedGrid";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg">
      {/* Animated background grid */}
      <AnimatedGrid />

      {/* Radial center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(0, 240, 255, 0.04) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0B0B0F)",
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Eyebrow label */}
        <motion.div variants={item} className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-neon-cyan/50" />
          <span className="font-orbitron text-xs font-semibold tracking-[0.3em] uppercase text-neon-cyan">
            Portfolio
          </span>
          <span className="h-px w-12 bg-neon-cyan/50" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          variants={item}
          className="font-orbitron text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[1.05] tracking-tight mb-4"
        >
          Krishna
          <br />
          <span className="text-gradient-cyan">Chittella</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div variants={item} className="mb-8 flex items-center justify-center gap-3 sm:gap-4">
          {["Builder", "Explorer", "Engineer"].map((word, i) => (
            <span key={word} className="flex items-center gap-3 sm:gap-4">
              <span className="font-orbitron text-sm sm:text-base font-medium tracking-widest text-text-muted uppercase">
                {word}
              </span>
              {i < 2 && (
                <span className="text-neon-cyan/40 text-xs">◆</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12"
        >
          A curious technologist who moves across domains. Started with AI&nbsp;&amp;&nbsp;ML,
          moved into Data Engineering, and now building full-stack products. Each chapter
          adds a different lens — the goal is to keep moving toward the interesting.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 font-orbitron text-xs font-semibold tracking-[0.15em] uppercase overflow-hidden"
          >
            <span className="absolute inset-0 border border-neon-cyan/50 group-hover:border-neon-cyan transition-colors duration-300" />
            <span className="absolute inset-0 bg-neon-cyan/5 group-hover:bg-neon-cyan/10 transition-colors duration-300" />
            <span className="relative text-neon-cyan">View Projects</span>
            <span className="relative text-neon-cyan/60 group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>

          <Link
            href="/experiments"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 font-orbitron text-xs font-semibold tracking-[0.15em] uppercase"
          >
            <span className="absolute inset-0 border border-white/10 group-hover:border-neon-pink/40 transition-colors duration-300" />
            <span className="absolute inset-0 bg-transparent group-hover:bg-neon-pink/5 transition-colors duration-300" />
            <span className="relative text-text-muted group-hover:text-neon-pink transition-colors duration-200">
              Explore Experiments
            </span>
            <span className="relative text-text-muted/50 group-hover:text-neon-pink/60 group-hover:translate-x-1 transition-all duration-200">
              →
            </span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-neon-cyan/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
