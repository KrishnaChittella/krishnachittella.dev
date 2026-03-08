"use client";

import { motion } from "motion/react";
import HeroSection from "@/components/HeroSection";
import { projects, experiments, timeline } from "@/lib/data";
import Link from "next/link";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <HeroSection />

      {/* Stats strip */}
      <section className="border-y border-white/5 bg-panel/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Domains Explored", value: "3+" },
            { label: "Projects Built", value: `${projects.length}+` },
            { label: "Experiments Running", value: `${experiments.filter((e) => e.status !== "idea").length}` },
            { label: "Current Focus", value: "Full-Stack" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-orbitron text-2xl font-black text-neon-cyan mb-1 glow-cyan">
                {stat.value}
              </p>
              <p className="text-text-muted text-[10px] tracking-[0.2em] uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="font-orbitron text-xs font-semibold tracking-[0.25em] uppercase text-neon-cyan mb-2">
              Selected Work
            </p>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-text-primary">
              Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-2 text-sm text-text-muted hover:text-neon-cyan transition-colors duration-200"
          >
            View all →
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((project, i) => {
            const accentBorder = project.accent === "cyan"
              ? "hover:border-neon-cyan/40"
              : project.accent === "pink"
              ? "hover:border-neon-pink/40"
              : "hover:border-neon-yellow/40";
            const accentText = project.accent === "cyan"
              ? "text-neon-cyan"
              : project.accent === "pink"
              ? "text-neon-pink"
              : "text-neon-yellow";
            const dotColor = project.accent === "cyan"
              ? "bg-neon-cyan"
              : project.accent === "pink"
              ? "bg-neon-pink"
              : "bg-neon-yellow";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className={`group panel-base rounded-lg p-6 border border-white/6 transition-all duration-300 ${accentBorder}`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                  <span className={`font-orbitron text-[9px] font-bold tracking-[0.2em] uppercase ${accentText}`}>
                    {project.year}
                  </span>
                </div>
                <h3 className={`font-orbitron text-lg font-bold text-text-primary mb-0.5 group-hover:${accentText} transition-colors duration-200`}>
                  {project.title}
                </h3>
                <p className="text-text-muted text-xs mb-3 tracking-wide">{project.subtitle}</p>
                <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className={`tag text-[9px] border ${
                        project.accent === "cyan"
                          ? "text-neon-cyan border-neon-cyan/20 bg-neon-cyan/5"
                          : project.accent === "pink"
                          ? "text-neon-pink border-neon-pink/20 bg-neon-pink/5"
                          : "text-neon-yellow border-neon-yellow/20 bg-neon-yellow/5"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="tag text-[9px] border border-white/10 text-text-muted">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 sm:hidden">
          <Link href="/projects" className="text-sm text-text-muted hover:text-neon-cyan transition-colors duration-200">
            View all projects →
          </Link>
        </div>
      </section>

      {/* Journey teaser */}
      <section className="border-t border-white/5 bg-panel/20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-orbitron text-xs font-semibold tracking-[0.25em] uppercase text-neon-pink mb-3">
                The Journey
              </p>
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-text-primary mb-5 leading-tight">
                BTech → TCS → Master&apos;s
                <br />
                → Full-Stack
              </h2>
              <p className="text-text-muted text-base leading-relaxed mb-8">
                Not a straight line — a deliberate evolution through domains. Each chapter
                added depth: theory, production, research, and now shipping products.
              </p>
              <Link
                href="/journey"
                className="inline-flex items-center gap-2 text-sm font-medium text-neon-pink hover:gap-3 transition-all duration-200"
              >
                See the full timeline →
              </Link>
            </motion.div>

            <div className="space-y-2.5">
              {timeline.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-4 p-3.5 panel-base rounded-md border border-white/5 hover:border-white/10 transition-colors duration-200"
                >
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    entry.accent === "cyan" ? "bg-neon-cyan" : entry.accent === "pink" ? "bg-neon-pink" : "bg-neon-yellow"
                  }`} />
                  <div className="min-w-0 flex-1">
                    <p className="font-orbitron text-sm font-bold text-text-primary truncate">
                      {entry.title}
                    </p>
                    <p className="text-text-muted text-xs">{entry.period}</p>
                  </div>
                  <span className={`font-orbitron text-[9px] tracking-widest uppercase ml-auto flex-shrink-0 ${
                    entry.accent === "cyan" ? "text-neon-cyan" : entry.accent === "pink" ? "text-neon-pink" : "text-neon-yellow"
                  }`}>
                    {entry.era}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lab teaser */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative panel-base rounded-xl p-8 md:p-12 border border-neon-pink/15 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #14141C 0%, #1a0d1a 60%, #14141C 100%)" }}
        >
          <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{ backgroundImage: "repeating-linear-gradient(90deg, #FF2E88 0, #FF2E88 1px, transparent 0, transparent 50%)", backgroundSize: "40px 40px" }} />
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="font-orbitron text-xs font-semibold tracking-[0.25em] uppercase text-neon-pink mb-3">
                The Lab
              </p>
              <h2 className="font-orbitron text-3xl font-bold text-text-primary mb-4">
                Experiments &amp; Future Builds
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                PulseTrade, TaxForge, QuantMind AI, CodeArena — things being stress-tested
                before they become real products.
              </p>
              <Link
                href="/experiments"
                className="inline-flex items-center gap-2 px-6 py-3 font-orbitron text-[11px] font-bold tracking-[0.15em] uppercase border border-neon-pink/40 text-neon-pink bg-neon-pink/5 hover:bg-neon-pink/12 transition-colors duration-200"
              >
                Enter The Lab →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["PulseTrade", "TaxForge", "QuantMind AI", "CodeArena"].map((name, i) => (
                <div key={name} className="p-4 rounded-md bg-white/3 border border-neon-pink/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-pink/50 block mb-2" />
                  <p className="font-orbitron text-xs font-bold text-text-primary">{name}</p>
                  <p className="text-text-muted text-[10px] mt-1">Incoming</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative panel-base rounded-xl p-10 md:p-16 border border-white/6 overflow-hidden text-center"
        >
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(0, 240, 255, 0.05) 0%, transparent 70%)" }} />
          <p className="font-orbitron text-xs font-semibold tracking-[0.25em] uppercase text-neon-cyan mb-4 relative">
            Let&apos;s Connect
          </p>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-text-primary mb-5 relative">
            Building something interesting?
          </h2>
          <p className="text-text-muted text-base leading-relaxed max-w-xl mx-auto mb-8 relative">
            Open to collaborations, engineering roles, and conversations worth having.
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-8 py-3.5 font-orbitron text-xs font-semibold tracking-[0.15em] uppercase bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/18 transition-colors duration-200"
          >
            Contact Me →
          </Link>
        </motion.div>
      </section>
    </>
  );
}
