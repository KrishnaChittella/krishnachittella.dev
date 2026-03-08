"use client";

import { motion } from "motion/react";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import { journalEntries } from "@/lib/data";

const typeConfig = {
  listening: {
    label: "Listening",
    dot: "bg-neon-cyan",
    accent: "text-neon-cyan",
    border: "hover:border-neon-cyan/30",
    tag: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20",
  },
  exploring: {
    label: "Exploring",
    dot: "bg-neon-yellow",
    accent: "text-neon-yellow",
    border: "hover:border-neon-yellow/30",
    tag: "bg-neon-yellow/10 text-neon-yellow border-neon-yellow/20",
  },
  writing: {
    label: "Writing",
    dot: "bg-neon-pink",
    accent: "text-neon-pink",
    border: "hover:border-neon-pink/30",
    tag: "bg-neon-pink/10 text-neon-pink border-neon-pink/20",
  },
};

const sections = [
  {
    type: "listening" as const,
    eyebrow: "Currently",
    heading: "Listening",
    desc: "Podcasts, talks, and audio worth paying attention to.",
  },
  {
    type: "exploring" as const,
    eyebrow: "Right Now",
    heading: "Exploring",
    desc: "Ideas and rabbit holes being chased. Not conclusions — directions.",
  },
  {
    type: "writing" as const,
    eyebrow: "Journal",
    heading: "Writing",
    desc: "Drafts, thoughts, and technical reflections. Infrequent. Intentional.",
  },
];

export default function JournalPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-24 max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="Tech Journal"
          title="Journal"
          subtitle="What I'm listening to, exploring, and thinking about. A live snapshot of the current intellectual orbit."
          accent="yellow"
        />

        {/* Status banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-3 mb-14 p-4 panel-base rounded-md border border-neon-yellow/15"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon-yellow animate-pulse" />
          <p className="text-text-muted text-sm">
            Updated regularly.{" "}
            <span className="text-neon-yellow">More writing dropping soon.</span>
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-20">
          {sections.map((section, si) => {
            const entries = journalEntries.filter((e) => e.type === section.type);
            const cfg = typeConfig[section.type];

            return (
              <div key={section.type}>
                {/* Section header */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mb-7"
                >
                  <p className={`font-orbitron text-[10px] font-bold tracking-[0.3em] uppercase mb-1 ${cfg.accent}`}>
                    {section.eyebrow}
                  </p>
                  <h2 className="font-orbitron text-2xl font-bold text-text-primary mb-2">
                    {section.heading}
                  </h2>
                  <div className={`h-px w-16 bg-gradient-to-r ${
                    section.type === "listening" ? "from-neon-cyan/50" : section.type === "exploring" ? "from-neon-yellow/50" : "from-neon-pink/50"
                  } to-transparent mb-2`} />
                  <p className="text-text-muted text-sm">{section.desc}</p>
                </motion.div>

                {/* Entries */}
                <div className="space-y-4">
                  {entries.map((entry, i) => (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ x: 3 }}
                      className={`group panel-base rounded-lg p-6 border border-white/6 transition-all duration-300 ${cfg.border}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className={`tag ${cfg.tag}`}>{cfg.label}</span>
                            {entry.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="tag bg-white/5 text-text-muted border-white/10">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Title */}
                          <h3 className={`font-orbitron text-base font-bold text-text-primary mb-0.5 leading-snug group-hover:${cfg.accent} transition-colors duration-200`}>
                            {entry.title}
                          </h3>
                          {entry.subtitle && (
                            <p className="text-text-muted text-xs mb-3 tracking-wide">{entry.subtitle}</p>
                          )}

                          {/* Body */}
                          <p className="text-text-muted text-sm leading-relaxed">{entry.body}</p>

                          {/* Link */}
                          {entry.link && (
                            <a
                              href={entry.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 mt-4 text-xs font-medium ${cfg.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
                            >
                              Listen / View
                              <span className="group-hover:translate-x-1 transition-transform duration-150">→</span>
                            </a>
                          )}
                        </div>

                        <div className="flex-shrink-0">
                          <span className="text-text-muted text-xs">{entry.date}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Placeholder for section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="flex items-center gap-3 p-4 panel-base rounded-md border border-dashed border-white/8"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} opacity-30`} />
                    <p className="text-text-muted/50 text-sm">More {section.heading.toLowerCase()} entries coming...</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
}
