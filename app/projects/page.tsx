import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Krishna Chittella",
  description: "AI/ML, data science, and full-stack projects by Krishna Chittella.",
};

const incomingBuilds = [
  {
    title: "Incoming Build",
    hint: "A full-stack product in active development. Details soon.",
    accent: "cyan" as const,
  },
  {
    title: "Incoming Build",
    hint: "Something in the data space. Architecture phase.",
    accent: "pink" as const,
  },
];

export default function ProjectsPage() {
  const liveProjects = projects.filter((p) => p.status === "live");
  const wipProjects = projects.filter((p) => p.status === "wip");

  return (
    <PageTransition>
      <div className="pt-28 pb-24 max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Work"
          title="Projects"
          subtitle="Real builds — from ML models and data science to full-stack applications. Each one a step toward understanding a domain more completely."
          accent="cyan"
        />

        {/* Live projects */}
        <div className="mb-16">
          <p className="font-orbitron text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-6">
            Shipped
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {liveProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* WIP */}
        {wipProjects.length > 0 && (
          <div className="mb-16">
            <p className="font-orbitron text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-6">
              In Progress
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {wipProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Incoming builds — intentional placeholders */}
        <div>
          <p className="font-orbitron text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-6">
            Incoming Builds
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {incomingBuilds.map((slot, i) => (
              <div
                key={i}
                className="relative panel-base rounded-lg p-6 border border-dashed border-white/8 group hover:border-white/15 transition-colors duration-300"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className={`w-1.5 h-1.5 rounded-full opacity-40 ${
                    slot.accent === "cyan" ? "bg-neon-cyan" : "bg-neon-pink"
                  }`} />
                  <span className="text-text-muted/60 text-[10px] font-orbitron tracking-[0.2em] uppercase">
                    Upcoming
                  </span>
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white/15 mb-3">
                  {slot.title}
                </h3>
                <p className="text-text-muted/50 text-sm italic">{slot.hint}</p>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className={`font-orbitron text-[9px] tracking-[0.2em] uppercase ${
                    slot.accent === "cyan" ? "text-neon-cyan/40" : "text-neon-pink/40"
                  }`}>Soon</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
