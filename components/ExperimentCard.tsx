"use client";

import { motion } from "motion/react";
import { Experiment } from "@/lib/data";

const accentMap = {
  cyan: {
    border: "hover:border-neon-cyan/40",
    glow: "hover:shadow-[0_0_24px_rgba(0,240,255,0.1)]",
    tag: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20",
    title: "group-hover:text-neon-cyan",
    status: "text-neon-cyan",
    icon: "text-neon-cyan/40 group-hover:text-neon-cyan/80",
  },
  pink: {
    border: "hover:border-neon-pink/40",
    glow: "hover:shadow-[0_0_24px_rgba(255,46,136,0.1)]",
    tag: "bg-neon-pink/10 text-neon-pink border-neon-pink/20",
    title: "group-hover:text-neon-pink",
    status: "text-neon-pink",
    icon: "text-neon-pink/40 group-hover:text-neon-pink/80",
  },
  yellow: {
    border: "hover:border-neon-yellow/40",
    glow: "hover:shadow-[0_0_24px_rgba(255,211,0,0.1)]",
    tag: "bg-neon-yellow/10 text-neon-yellow border-neon-yellow/20",
    title: "group-hover:text-neon-yellow",
    status: "text-neon-yellow",
    icon: "text-neon-yellow/40 group-hover:text-neon-yellow/80",
  },
};

const statusConfig: Record<
  Experiment["status"],
  { label: string; dot: string }
> = {
  active: { label: "Active", dot: "bg-green-400" },
  wip: { label: "In Progress", dot: "bg-neon-yellow" },
  idea: { label: "Concept", dot: "bg-text-muted" },
};

interface ExperimentCardProps {
  experiment: Experiment;
  index: number;
}

export default function ExperimentCard({ experiment, index }: ExperimentCardProps) {
  const a = accentMap[experiment.accent];
  const status = statusConfig[experiment.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.015 }}
      className={`group relative panel-base rounded-lg p-5 border border-white/6 transition-all duration-300 ${a.border} ${a.glow} cursor-default`}
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span
            className={`w-1.5 h-1.5 rounded-full ${status.dot} ${
              experiment.status === "active" ? "animate-pulse" : ""
            }`}
          />
          <span className={`font-orbitron text-[10px] font-semibold tracking-[0.2em] uppercase ${a.status}`}>
            {status.label}
          </span>
        </div>
        {experiment.link && (
          <a
            href={experiment.link}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-text-muted hover:text-text-primary text-xs"
          >
            ↗
          </a>
        )}
      </div>

      {/* Title */}
      <h3
        className={`font-orbitron text-base font-bold text-text-primary mb-2 transition-colors duration-200 ${a.title}`}
      >
        {experiment.title}
      </h3>

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed mb-4">
        {experiment.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {experiment.tags.map((tag) => (
          <span key={tag} className={`tag ${a.tag}`}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
