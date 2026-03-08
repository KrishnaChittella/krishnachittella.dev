"use client";

import { motion } from "motion/react";
import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import { blogPosts } from "@/lib/data";
import Link from "next/link";

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-24 max-w-4xl mx-auto px-6">
        <SectionHeader
          eyebrow="Writing"
          title="Blog"
          subtitle="Occasional writing on engineering, process, and ideas. Infrequent. Always intentional."
          accent="yellow"
        />

        {/* Coming soon notice */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-3 mb-12 p-4 panel-base rounded-md border border-neon-yellow/15"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neon-yellow animate-pulse" />
          <p className="text-text-muted text-sm">
            Blog is actively being written.{" "}
            <span className="text-neon-yellow">Articles dropping soon.</span>
          </p>
        </motion.div>

        {/* Article list */}
        <div className="space-y-5">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 4 }}
              className="group panel-base rounded-lg p-7 border border-white/6 hover:border-neon-yellow/30 transition-all duration-300 cursor-pointer"
            >
              {/* Future: Link to post page */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag bg-neon-yellow/10 text-neon-yellow border-neon-yellow/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-orbitron text-lg font-bold text-text-primary mb-3 group-hover:text-neon-yellow transition-colors duration-200 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-text-muted text-sm leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-3 sm:gap-1 flex-shrink-0">
                  <span className="text-text-muted text-xs">{post.date}</span>
                  <span className="text-text-muted text-xs">{post.readTime}</span>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-neon-yellow text-xs font-medium">Read article</span>
                <span className="text-neon-yellow text-xs group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty state / future articles hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 p-5 panel-base rounded-lg border border-dashed border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <p className="text-text-muted text-sm">More articles being drafted...</p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
