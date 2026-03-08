"use client";

import { motion } from "motion/react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accent?: "cyan" | "pink" | "yellow";
  centered?: boolean;
}

const accentClasses = {
  cyan: "text-neon-cyan",
  pink: "text-neon-pink",
  yellow: "text-neon-yellow",
};

const dividerClasses = {
  cyan: "from-neon-cyan/60 via-neon-cyan/20 to-transparent",
  pink: "from-neon-pink/60 via-neon-pink/20 to-transparent",
  yellow: "from-neon-yellow/60 via-neon-yellow/20 to-transparent",
};

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  accent = "cyan",
  centered = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <p
          className={`font-orbitron text-xs font-semibold tracking-[0.25em] uppercase mb-3 ${accentClasses[accent]}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-text-primary mb-4 leading-tight">
        {title}
      </h2>
      <div
        className={`h-px w-24 bg-gradient-to-r ${dividerClasses[accent]} ${centered ? "mx-auto" : ""} mb-4`}
      />
      {subtitle && (
        <p className={`text-text-muted text-base leading-relaxed max-w-xl ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
