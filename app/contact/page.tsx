"use client";

import { motion } from "motion/react";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import RotatingEmail from "@/components/RotatingEmail";

const contactLinks = [
  {
    platform: "GitHub",
    handle: "@KrishnaChittella",
    href: "https://github.com/KrishnaChittella",
    description: "Projects, code, and open source work.",
    accent: "cyan" as const,
    icon: "⬡",
  },
  {
    platform: "Instagram",
    handle: "@itsme_krishnachittella",
    href: "https://instagram.com/itsme_krishnachittella",
    description: "Personal side of things.",
    accent: "pink" as const,
    icon: "◈",
  },
];

const accentMap = {
  cyan: {
    border: "hover:border-neon-cyan/40",
    glow: "hover:shadow-[0_0_32px_rgba(0,240,255,0.1)]",
    platform: "text-neon-cyan",
    icon: "text-neon-cyan/40 group-hover:text-neon-cyan",
    arrow: "group-hover:text-neon-cyan",
  },
  pink: {
    border: "hover:border-neon-pink/40",
    glow: "hover:shadow-[0_0_32px_rgba(255,46,136,0.1)]",
    platform: "text-neon-pink",
    icon: "text-neon-pink/40 group-hover:text-neon-pink",
    arrow: "group-hover:text-neon-pink",
  },
  yellow: {
    border: "hover:border-neon-yellow/40",
    glow: "hover:shadow-[0_0_32px_rgba(255,211,0,0.1)]",
    platform: "text-neon-yellow",
    icon: "text-neon-yellow/40 group-hover:text-neon-yellow",
    arrow: "group-hover:text-neon-yellow",
  },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-24 max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="Let's Talk"
          title="Contact"
          subtitle="Open to interesting conversations — collaborations, engineering roles, and anything worth discussing."
          accent="cyan"
          centered
        />

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 panel-base rounded-full border border-green-400/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-text-muted text-sm">
              Open to <span className="text-text-primary font-medium">full-stack and data engineering</span> roles
            </span>
          </div>
        </motion.div>

        {/* Contact links */}
        <div className="space-y-4 mb-12">
          {contactLinks.map((contact, i) => {
            const a = accentMap[contact.accent];
            return (
              <motion.a
                key={contact.platform}
                href={contact.href}
                target={contact.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ x: 4 }}
                className={`group flex items-center justify-between p-7 panel-base rounded-lg border border-white/6 transition-all duration-300 ${a.border} ${a.glow}`}
              >
                <div className="flex items-center gap-5">
                  <span className={`font-orbitron text-xl transition-colors duration-200 ${a.icon}`}>
                    {contact.icon}
                  </span>
                  <div>
                    <p className={`font-orbitron text-xs font-semibold tracking-[0.2em] uppercase mb-1 ${a.platform}`}>
                      {contact.platform}
                    </p>
                    <p className="text-text-primary text-base font-medium mb-0.5">{contact.handle}</p>
                    <p className="text-text-muted text-sm">{contact.description}</p>
                  </div>
                </div>
                <span className={`text-text-muted/40 text-xl transition-all duration-200 group-hover:translate-x-2 ${a.arrow}`}>
                  →
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Rotating email section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 panel-base rounded-xl p-8 border border-neon-yellow/15 text-center"
          style={{ background: "linear-gradient(135deg, #14141C 0%, #1a1810 50%, #14141C 100%)" }}
        >
          <p className="font-orbitron text-xs font-semibold tracking-[0.25em] uppercase text-neon-yellow/60 mb-6">
            Email
          </p>
          <RotatingEmail />
        </motion.div>

        {/* Resume section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="panel-base rounded-xl p-8 border border-neon-yellow/15 text-center"
          style={{ background: "linear-gradient(135deg, #14141C 0%, #1a1810 50%, #14141C 100%)" }}
        >
          <p className="font-orbitron text-xs font-semibold tracking-[0.25em] uppercase text-neon-yellow mb-3">
            Resume
          </p>
          <p className="text-text-muted text-sm mb-6 max-w-md mx-auto">
            Available on request — email me directly and I&apos;ll send it over along with any
            additional context that&apos;s useful.
          </p>
          <a
            href="mailto:hello@krishnachittella.dev?subject=Resume Request"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-orbitron text-xs font-semibold tracking-[0.15em] uppercase border border-neon-yellow/40 text-neon-yellow bg-neon-yellow/5 hover:bg-neon-yellow/12 transition-colors duration-200"
          >
            Request Resume
            <span className="text-neon-yellow/60">→</span>
          </a>
        </motion.div>
      </div>
    </PageTransition>
  );
}
