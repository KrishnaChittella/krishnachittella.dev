import HeroSection from "@/components/HeroSection";
import { projects, experiments, timeline } from "@/lib/data";
import Link from "next/link";

// Minimal teaser sections on home — drive to dedicated pages
export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.status === "live").slice(0, 3);
  const latestEra = timeline[timeline.length - 1];

  return (
    <>
      <HeroSection />

      {/* Quick stats / identity strip */}
      <section className="border-y border-white/5 bg-panel/40">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Domains Explored", value: "3+" },
            { label: "Projects Built", value: `${projects.length}+` },
            { label: "Experiments Running", value: `${experiments.filter((e) => e.status === "active" || e.status === "wip").length}` },
            { label: "Current Focus", value: "Full-Stack" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-orbitron text-2xl font-bold text-neon-cyan mb-1">{stat.value}</p>
              <p className="text-text-muted text-xs tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects teaser */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-10">
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
            className="text-sm text-text-muted hover:text-neon-cyan transition-colors duration-200 hidden sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featuredProjects.map((project, i) => {
            const accentBorder =
              project.accent === "cyan"
                ? "hover:border-neon-cyan/40"
                : project.accent === "pink"
                ? "hover:border-neon-pink/40"
                : "hover:border-neon-yellow/40";
            const accentText =
              project.accent === "cyan"
                ? "text-neon-cyan"
                : project.accent === "pink"
                ? "text-neon-pink"
                : "text-neon-yellow";

            return (
              <div
                key={project.id}
                className={`panel-base rounded-lg p-6 border border-white/6 transition-all duration-300 ${accentBorder}`}
              >
                <h3 className="font-orbitron text-lg font-bold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className={`tag border-current/20 ${accentText} bg-current/5`}
                      style={{ borderColor: "currentColor", opacity: 1 }}
                    >
                      {t}
                    </span>
                  ))}
                  {project.stack.length > 3 && (
                    <span className="tag border-white/10 text-text-muted">
                      +{project.stack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/projects"
            className="text-sm text-text-muted hover:text-neon-cyan transition-colors duration-200"
          >
            View all projects →
          </Link>
        </div>
      </section>

      {/* Journey teaser */}
      <section className="border-t border-white/5 bg-panel/20">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-orbitron text-xs font-semibold tracking-[0.25em] uppercase text-neon-pink mb-3">
                The Journey
              </p>
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-text-primary mb-5 leading-tight">
                AI → Data → Full-Stack
              </h2>
              <p className="text-text-muted text-base leading-relaxed mb-8">
                Not a straight line — a deliberate exploration. Each domain taught a different
                way of thinking about problems. The evolution continues.
              </p>
              <Link
                href="/journey"
                className="inline-flex items-center gap-2 text-sm font-medium text-neon-pink hover:gap-3 transition-all duration-200"
              >
                See the full timeline →
              </Link>
            </div>

            <div className="space-y-3">
              {timeline.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-center gap-4 p-4 panel-base rounded-md border border-white/5"
                >
                  <div
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      entry.accent === "cyan"
                        ? "bg-neon-cyan"
                        : entry.accent === "pink"
                        ? "bg-neon-pink"
                        : "bg-neon-yellow"
                    }`}
                  />
                  <div className="min-w-0">
                    <p className="font-orbitron text-sm font-bold text-text-primary truncate">
                      {entry.title}
                    </p>
                    <p className="text-text-muted text-xs">{entry.period}</p>
                  </div>
                  <span
                    className={`font-orbitron text-[10px] tracking-widest uppercase ml-auto flex-shrink-0 ${
                      entry.accent === "cyan"
                        ? "text-neon-cyan"
                        : entry.accent === "pink"
                        ? "text-neon-pink"
                        : "text-neon-yellow"
                    }`}
                  >
                    {entry.era}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA strip */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative panel-base rounded-xl p-10 md:p-16 border border-white/6 overflow-hidden text-center">
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(0, 240, 255, 0.06) 0%, transparent 70%)",
            }}
          />
          <p className="font-orbitron text-xs font-semibold tracking-[0.25em] uppercase text-neon-cyan mb-4 relative">
            Let&apos;s Connect
          </p>
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold text-text-primary mb-5 relative">
            Building something interesting?
          </h2>
          <p className="text-text-muted text-base leading-relaxed max-w-xl mx-auto mb-8 relative">
            Always open to interesting conversations — collaborations, opportunities, or just
            talking about systems design and good coffee.
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 px-8 py-3.5 font-orbitron text-xs font-semibold tracking-[0.15em] uppercase bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan hover:bg-neon-cyan/20 transition-colors duration-200"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </>
  );
}
