"use client";

import { motion } from "motion/react";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import { gameCategories } from "@/lib/data";

const accentMap = {
  cyan: {
    border: "border-neon-cyan/20 hover:border-neon-cyan/40",
    glow: "hover:shadow-[0_0_32px_rgba(0,240,255,0.1)]",
    label: "text-neon-cyan",
    dot: "bg-neon-cyan",
    game: "hover:text-neon-cyan",
    note: "text-neon-cyan/50",
    tag: "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20",
  },
  pink: {
    border: "border-neon-pink/20 hover:border-neon-pink/40",
    glow: "hover:shadow-[0_0_32px_rgba(255,46,136,0.1)]",
    label: "text-neon-pink",
    dot: "bg-neon-pink",
    game: "hover:text-neon-pink",
    note: "text-neon-pink/50",
    tag: "bg-neon-pink/10 text-neon-pink border-neon-pink/20",
  },
  yellow: {
    border: "border-neon-yellow/20 hover:border-neon-yellow/40",
    glow: "hover:shadow-[0_0_32px_rgba(255,211,0,0.1)]",
    label: "text-neon-yellow",
    dot: "bg-neon-yellow",
    game: "hover:text-neon-yellow",
    note: "text-neon-yellow/50",
    tag: "bg-neon-yellow/10 text-neon-yellow border-neon-yellow/20",
  },
};

export default function BeyondCodePage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-24 max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Identity"
          title="Beyond Code"
          subtitle="The games, ideas, and interests that shape how I think outside of engineering. Curiosity doesn't stay in its lane."
          accent="pink"
        />

        {/* Gaming hero banner */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden panel-base rounded-xl border border-neon-pink/20 p-10 md:p-14 mb-16"
          style={{
            background: "linear-gradient(135deg, #14141C 0%, #1a0814 40%, #0d0d1a 100%)",
            boxShadow: "0 0 80px rgba(255, 46, 136, 0.06), inset 0 0 80px rgba(255, 46, 136, 0.02)",
          }}
        >
          {/* Subtle neon grid texture */}
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(0deg, #FF2E88 0, #FF2E88 1px, transparent 0, transparent 60px), repeating-linear-gradient(90deg, #FF2E88 0, #FF2E88 1px, transparent 0, transparent 60px)",
            }}
          />

          {/* Ambient corner glows */}
          <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{ background: "radial-gradient(circle at top right, rgba(255,46,136,0.08) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 pointer-events-none"
            style={{ background: "radial-gradient(circle at bottom left, rgba(0,240,255,0.05) 0%, transparent 70%)" }} />

          <div className="relative">
            <p className="font-orbitron text-xs font-semibold tracking-[0.3em] uppercase text-neon-pink mb-4">
              In The Arena
            </p>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black text-text-primary mb-3 leading-tight"
              style={{ textShadow: "0 0 40px rgba(255,46,136,0.2)" }}>
              Gamer
            </h2>
            <p className="text-text-muted text-base leading-relaxed max-w-xl">
              Games aren&apos;t just entertainment — they&apos;re systems. The best ones reward understanding
              their internal logic: resource loops, risk/reward trade-offs, emergent behaviour under
              pressure. The same thinking that makes you good at Tarkov makes you better at designing
              software architectures.
            </p>
          </div>
        </motion.div>

        {/* Game categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {gameCategories.map((category, i) => {
            const a = accentMap[category.accent];
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`group panel-base rounded-xl p-7 border transition-all duration-300 ${a.border} ${a.glow}`}
              >
                {/* Category header */}
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                  <span className={`font-orbitron text-[10px] font-bold tracking-[0.25em] uppercase ${a.label}`}>
                    {category.label}
                  </span>
                </div>
                <p className="text-text-muted text-xs leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Game list */}
                <div className="space-y-3">
                  {category.games.map((game, j) => (
                    <motion.div
                      key={game.title}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.06, duration: 0.4 }}
                      className={`flex items-start justify-between gap-3 py-2.5 border-b border-white/4 last:border-0 group/game cursor-default`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-1 h-1 rounded-full flex-shrink-0 ${a.dot} opacity-50`} />
                        <span className={`font-inter text-sm font-medium text-text-primary transition-colors duration-150 ${a.game}`}>
                          {game.title}
                        </span>
                      </div>
                      {game.note && (
                        <span className={`text-[10px] ${a.note} flex-shrink-0 text-right leading-tight`}>
                          {game.note}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Steam Profile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <a
            href="https://steamcommunity.com/id/kickreaper/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-6 panel-base rounded-lg border border-neon-cyan/15 hover:border-neon-cyan/35 transition-all duration-300 hover:shadow-[0_0_32px_rgba(0,240,255,0.08)]"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
                <span className="text-neon-cyan font-orbitron text-xs font-bold">▶</span>
              </div>
              <div>
                <p className="font-orbitron text-xs font-semibold tracking-[0.2em] uppercase text-neon-cyan mb-1">
                  Steam Profile
                </p>
                <p className="text-text-primary text-sm font-medium">KickReaper</p>
                <p className="text-text-muted text-xs">steamcommunity.com/id/kickreaper</p>
              </div>
            </div>
            <span className="text-text-muted/40 text-lg group-hover:text-neon-cyan group-hover:translate-x-2 transition-all duration-200">
              →
            </span>
          </a>
        </motion.div>

        {/* Cyberpunk 2077 design callout */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden panel-base rounded-xl border border-neon-pink/15 p-8 md:p-12"
        >
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-orbitron text-xs font-semibold tracking-[0.25em] uppercase text-neon-pink mb-4">
                Visual Inspiration
              </p>
              <h2 className="font-orbitron text-2xl font-bold text-text-primary mb-4">
                Cyberpunk 2077 &amp; Night City
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-3">
                The visual language of this site is borrowed from Night City. Not the neon-drenched
                chaos of it — but the underlying philosophy: darkness that makes light intentional,
                contrast as communication, and interfaces that feel like they were built by people
                who cared about aesthetics.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                It&apos;s also just exceptional world-building. The density of its lore, the way it
                layers corporate dystopia with genuine human warmth — fiction that rewards attention.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: "What it gets right", value: "Atmosphere through restraint. Not everything needs to glow." },
                { label: "Design principle", value: "Dark backgrounds make neon feel earned, not decorative." },
                { label: "Applied here", value: "Sparse colour, intentional hierarchy, cinematic framing." },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-md bg-white/3 border border-neon-pink/10">
                  <p className="font-orbitron text-[9px] font-semibold tracking-[0.2em] uppercase text-neon-pink mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-text-muted text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center max-w-xl mx-auto"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent mx-auto mb-8" />
          <p className="text-text-muted text-sm leading-relaxed">
            The things you find interesting outside of work shape the quality of thinking you bring
            into it. Games teach systems thinking. Design teaches intentionality. Curiosity doesn&apos;t
            stay in its lane — and that&apos;s a feature.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}
