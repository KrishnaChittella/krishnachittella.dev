"use client";

import { motion } from "motion/react";
import { TimelineEntry } from "@/lib/data";

const accentMap = {
  cyan: {
    node: "bg-neon-cyan shadow-[0_0_12px_rgba(0,240,255,0.8)]",
    era: "text-neon-cyan",
    border: "border-neon-cyan/20",
    glow: "hover:shadow-[0_0_32px_rgba(0,240,255,0.08)]",
    tag: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20",
    line: "from-neon-cyan/60 to-neon-cyan/5",
  },
  pink: {
    node: "bg-neon-pink shadow-[0_0_12px_rgba(255,46,136,0.8)]",
    era: "text-neon-pink",
    border: "border-neon-pink/20",
    glow: "hover:shadow-[0_0_32px_rgba(255,46,136,0.08)]",
    tag: "bg-neon-pink/10 text-neon-pink border-neon-pink/20",
    line: "from-neon-pink/60 to-neon-pink/5",
  },
  yellow: {
    node: "bg-neon-yellow shadow-[0_0_12px_rgba(255,211,0,0.8)]",
    era: "text-neon-yellow",
    border: "border-neon-yellow/20",
    glow: "hover:shadow-[0_0_32px_rgba(255,211,0,0.08)]",
    tag: "bg-neon-yellow/10 text-neon-yellow border-neon-yellow/20",
    line: "from-neon-yellow/60 to-neon-yellow/5",
  },
};

interface TimelineProps {
  entries: TimelineEntry[];
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical connecting line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/6 -translate-x-1/2 hidden md:block" />

      <div className="space-y-16">
        {entries.map((entry, i) => {
          const a = accentMap[entry.accent];
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: isEven ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col md:flex-row items-start gap-8 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Content card */}
              <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`panel-base rounded-lg p-6 border transition-all duration-300 ${a.border} ${a.glow}`}
                >
                  <div
                    className={`flex items-center gap-3 mb-4 ${
                      isEven ? "md:flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <span className={`font-orbitron text-xs font-bold tracking-[0.2em] uppercase ${a.era}`}>
                      {entry.era}
                    </span>
                    <span className="text-text-muted text-xs">{entry.period}</span>
                  </div>

                  <h3 className="font-orbitron text-xl font-bold text-text-primary mb-1">
                    {entry.title}
                  </h3>
                  {entry.highlight && (
                    <p className={`font-orbitron text-[10px] font-semibold tracking-[0.18em] uppercase mb-4 ${a.era}`}>
                      {entry.highlight}
                    </p>
                  )}

                  <p className="text-text-muted text-sm leading-relaxed mb-5">{entry.body}</p>

                  <div
                    className={`flex flex-wrap gap-2 ${
                      isEven ? "md:justify-end" : "justify-start"
                    }`}
                  >
                    {entry.tags.map((tag) => (
                      <span key={tag} className={`tag ${a.tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Timeline node (center) */}
              <div className="relative hidden md:flex items-center justify-center w-8 flex-shrink-0 self-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2, type: "spring", bounce: 0.4 }}
                  className={`w-3 h-3 rounded-full ${a.node} z-10`}
                />
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
