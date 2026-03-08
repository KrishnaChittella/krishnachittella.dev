"use client";

import { motion } from "motion/react";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import ExperimentCard from "@/components/ExperimentCard";
import { experiments } from "@/lib/data";

export default function ExperimentsPage() {
  const active = experiments.filter((e) => e.status === "active");
  const wip = experiments.filter((e) => e.status === "wip");
  const ideas = experiments.filter((e) => e.status === "idea");

  return (
    <PageTransition>
      <div className="pt-28 pb-24 max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="The Lab"
          title="Experiments"
          subtitle="Works in progress, proofs of concept, and ideas being stress-tested. This is where things are allowed to be unfinished."
          accent="pink"
        />

        {/* Lab status banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-14 p-5 panel-base rounded-lg border border-neon-pink/15"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-orbitron text-xs font-semibold tracking-[0.2em] uppercase text-neon-pink">
              Lab Status: Active
            </span>
          </div>
          <div className="flex gap-6 text-sm">
            <span className="text-text-muted">
              <span className="text-green-400 font-semibold">{active.length}</span> Active
            </span>
            <span className="text-text-muted">
              <span className="text-neon-yellow font-semibold">{wip.length}</span> In Progress
            </span>
            <span className="text-text-muted">
              <span className="text-text-muted/60 font-semibold">{ideas.length}</span> Concepts
            </span>
          </div>
        </motion.div>

        {/* Active */}
        {active.length > 0 && (
          <div className="mb-12">
            <p className="font-orbitron text-xs font-semibold tracking-[0.2em] uppercase text-green-400 mb-5">
              Currently Active
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {active.map((exp, i) => (
                <ExperimentCard key={exp.id} experiment={exp} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* WIP */}
        {wip.length > 0 && (
          <div className="mb-12">
            <p className="font-orbitron text-xs font-semibold tracking-[0.2em] uppercase text-neon-yellow mb-5">
              In Progress
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {wip.map((exp, i) => (
                <ExperimentCard key={exp.id} experiment={exp} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Ideas / Concepts */}
        {ideas.length > 0 && (
          <div className="mb-12">
            <p className="font-orbitron text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-5">
              Concepts / Ideas
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ideas.map((exp, i) => (
                <ExperimentCard key={exp.id} experiment={exp} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Philosophy note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 panel-base rounded-lg border border-white/5 max-w-2xl"
        >
          <p className="font-orbitron text-xs font-semibold tracking-[0.2em] uppercase text-neon-pink mb-3">
            On Experiments
          </p>
          <p className="text-text-muted text-sm leading-relaxed">
            Not everything here is finished. That&apos;s the point. An experiment that never
            shipped still taught something — about the problem, the tools, or whether the idea
            was worth pursuing at all. This page stays honest about the process.
          </p>
        </motion.div>
      </div>
    </PageTransition>
  );
}
