"use client";

import { motion } from "motion/react";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import { interests } from "@/lib/data";

const accentMap = {
  cyan: {
    icon: "text-neon-cyan",
    border: "hover:border-neon-cyan/30",
    glow: "hover:shadow-[0_0_24px_rgba(0,240,255,0.08)]",
  },
  pink: {
    icon: "text-neon-pink",
    border: "hover:border-neon-pink/30",
    glow: "hover:shadow-[0_0_24px_rgba(255,46,136,0.08)]",
  },
  yellow: {
    icon: "text-neon-yellow",
    border: "hover:border-neon-yellow/30",
    glow: "hover:shadow-[0_0_24px_rgba(255,211,0,0.08)]",
  },
};

export default function BeyondCodePage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-24 max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Identity"
          title="Beyond Code"
          subtitle="The things that shape how I think, build, and see the world. Mostly unrelated to engineering. Mostly."
          accent="pink"
        />

        {/* Interests grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {interests.map((interest, i) => {
            const a = accentMap[interest.accent];
            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className={`group panel-base rounded-lg p-6 border border-white/6 transition-all duration-300 ${a.border} ${a.glow}`}
              >
                <div className={`font-orbitron text-2xl mb-4 ${a.icon}`}>
                  {interest.icon}
                </div>
                <h3 className="font-orbitron text-lg font-bold text-text-primary mb-3">
                  {interest.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {interest.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Cyberpunk 2077 feature callout */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden panel-base rounded-xl border border-neon-pink/20 p-10 md:p-14"
          style={{
            background:
              "linear-gradient(135deg, #14141C 0%, #1a0d1a 50%, #14141C 100%)",
            boxShadow: "0 0 60px rgba(255, 46, 136, 0.06), inset 0 0 60px rgba(255, 46, 136, 0.03)",
          }}
        >
          {/* Background texture */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, #FF2E88 0, #FF2E88 1px, transparent 0, transparent 50%)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-orbitron text-xs font-semibold tracking-[0.25em] uppercase text-neon-pink mb-4">
                Visual Inspiration
              </p>
              <h2 className="font-orbitron text-3xl font-bold text-text-primary mb-5 leading-tight">
                Cyberpunk 2077 &amp; Night City
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                The visual language of this site is directly borrowed from Night City. Not the
                neon-drenched chaos of it — but the underlying design philosophy: contrast as
                communication, darkness that makes light feel intentional, and interfaces that
                feel like they were built in the future by people who cared about aesthetics.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                Cyberpunk 2077 is also just exceptional world-building. The density of its
                lore, the layering of corporate dystopia and human warmth — it&apos;s the kind of
                fiction that rewards attention.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  label: "What the game gets right",
                  value: "Atmosphere through restraint. Not everything needs to glow.",
                },
                {
                  label: "Design lesson",
                  value: "Dark backgrounds make neon feel earned, not decorative.",
                },
                {
                  label: "Applied here",
                  value: "Sparse color, intentional hierarchy, cinematic framing.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-md bg-white/3 border border-neon-pink/10"
                >
                  <p className="font-orbitron text-[10px] font-semibold tracking-[0.2em] uppercase text-neon-pink mb-1">
                    {item.label}
                  </p>
                  <p className="text-text-muted text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-neon-pink/40 to-transparent mx-auto mb-8" />
          <p className="text-text-muted text-sm leading-relaxed">
            The things you find interesting outside of work shape the quality of thinking you
            bring into it. Curiosity doesn&apos;t stay in its lane.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}
