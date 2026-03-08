"use client";

import { motion } from "motion/react";
import { Project } from "@/lib/data";

const accentMap = {
  cyan: {
    border: "hover:border-neon-cyan/40",
    glow: "hover:shadow-[0_0_30px_rgba(0,240,255,0.12),inset_0_0_30px_rgba(0,240,255,0.03)]",
    tag: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20",
    dot: "bg-neon-cyan",
    link: "text-neon-cyan hover:text-neon-cyan/80",
  },
  pink: {
    border: "hover:border-neon-pink/40",
    glow: "hover:shadow-[0_0_30px_rgba(255,46,136,0.12),inset_0_0_30px_rgba(255,46,136,0.03)]",
    tag: "bg-neon-pink/10 text-neon-pink border-neon-pink/20",
    dot: "bg-neon-pink",
    link: "text-neon-pink hover:text-neon-pink/80",
  },
  yellow: {
    border: "hover:border-neon-yellow/40",
    glow: "hover:shadow-[0_0_30px_rgba(255,211,0,0.12),inset_0_0_30px_rgba(255,211,0,0.03)]",
    tag: "bg-neon-yellow/10 text-neon-yellow border-neon-yellow/20",
    dot: "bg-neon-yellow",
    link: "text-neon-yellow hover:text-neon-yellow/80",
  },
};

const statusLabel: Record<Project["status"], string> = {
  live: "Live",
  wip: "In Progress",
  upcoming: "Upcoming",
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const a = accentMap[project.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`group relative panel-base rounded-lg p-6 border border-white/6 transition-all duration-400 ${a.border} ${a.glow}`}
    >
      {/* Status badge */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
          <span className="text-text-muted text-xs font-medium tracking-wider uppercase">
            {statusLabel[project.status]}
          </span>
        </div>
        {/* Links */}
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-medium tracking-wide transition-colors duration-200 ${a.link}`}
            >
              GitHub →
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium tracking-wide text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              Live →
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-orbitron text-lg font-bold text-text-primary mb-0.5 leading-snug">
        {project.title}
      </h3>
      {project.subtitle && (
        <p className="text-text-muted text-xs tracking-wide mb-3">{project.subtitle}</p>
      )}

      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className={`tag ${a.tag}`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div
        className={`absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400 ${
          project.accent === "cyan"
            ? "bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent"
            : project.accent === "pink"
            ? "bg-gradient-to-r from-transparent via-neon-pink/40 to-transparent"
            : "bg-gradient-to-r from-transparent via-neon-yellow/40 to-transparent"
        }`}
      />
    </motion.div>
  );
}
