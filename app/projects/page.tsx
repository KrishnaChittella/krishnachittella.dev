import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Krishna Chittella",
  description: "Selected projects across AI/ML, Data Engineering, and Full-Stack Development.",
};

const upcomingSlots = [
  {
    title: "Untitled Project",
    hint: "Something in distributed systems. In the research phase.",
    accent: "pink" as const,
  },
  {
    title: "Untitled Project",
    hint: "Exploring applied AI at the product layer. Early concept.",
    accent: "yellow" as const,
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
          subtitle="Things built with intent. Each one a step toward understanding a domain more completely."
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

        {/* WIP projects */}
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

        {/* Upcoming slots — intentional placeholders */}
        <div>
          <p className="font-orbitron text-xs font-semibold tracking-[0.2em] uppercase text-text-muted mb-6">
            On the Horizon
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingSlots.map((slot, i) => (
              <div
                key={i}
                className="relative panel-base rounded-lg p-6 border border-dashed border-white/10"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      slot.accent === "pink" ? "bg-neon-pink/40" : "bg-neon-yellow/40"
                    }`}
                  />
                  <span className="text-text-muted text-xs tracking-wider uppercase">
                    Upcoming
                  </span>
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white/20 mb-3">
                  {slot.title}
                </h3>
                <p className="text-text-muted/60 text-sm italic">{slot.hint}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
