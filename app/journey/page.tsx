import PageTransition from "@/components/PageTransition";
import SectionHeader from "@/components/SectionHeader";
import Timeline from "@/components/Timeline";
import { timeline } from "@/lib/data";

export const metadata = {
  title: "Journey — Krishna Chittella",
  description: "The technical evolution of Krishna Chittella: BTech → TCS → Master's → Full-Stack.",
};

export default function JourneyPage() {
  return (
    <PageTransition>
      <div className="pt-28 pb-24 max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Growth"
          title="The Journey"
          subtitle="Not a resume. A map of how curiosity moved across domains — and what each chapter left behind."
          accent="yellow"
          centered
        />

        <Timeline entries={timeline} />

        {/* Closing thought */}
        <div className="mt-24 max-w-2xl mx-auto text-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-neon-yellow/40 to-transparent mx-auto mb-8" />
          <p className="font-orbitron text-xs font-semibold tracking-[0.25em] uppercase text-neon-yellow mb-4">
            What&apos;s Next
          </p>
          <p className="text-text-muted text-base leading-relaxed">
            The next chapter is still being written. The pattern is clear — follow the most
            interesting problem available, stay long enough to understand it deeply, then carry
            that understanding forward. Chapter 06 is incoming.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
