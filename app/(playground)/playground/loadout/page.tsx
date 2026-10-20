import type { Metadata } from "next";
import FeaturedGame from "@/components/FeaturedGame";
import { creator, gameCategories } from "@/lib/data";

export const metadata: Metadata = { title: "Loadout | Playground" };

const look = {
  pink: { bar: "from-[#ffb1c5] via-magenta to-vcyan", text: "text-[#ff9ec0]", dot: "bg-magenta shadow-[0_0_12px_rgba(255,42,133,0.8)]" },
  cyan: { bar: "from-vcyan via-[#00d8e7] to-magenta", text: "text-vcyan", dot: "bg-vcyan shadow-[0_0_12px_rgba(5,217,232,0.8)]" },
  yellow: { bar: "from-amber via-coral to-vcyan", text: "text-amber", dot: "bg-amber shadow-[0_0_12px_rgba(255,122,0,0.8)]" },
};

const social = {
  magenta: { card: "hover:border-magenta/60 hover:shadow-[0_12px_32px_rgba(255,42,133,0.2)]", text: "group-hover:text-[#ff9ec0]" },
  cyan: { card: "hover:border-vcyan/60 hover:shadow-[0_12px_32px_rgba(5,217,232,0.2)]", text: "group-hover:text-vcyan" },
  amber: { card: "hover:border-amber/60 hover:shadow-[0_12px_32px_rgba(255,122,0,0.2)]", text: "group-hover:text-amber" },
};

export default function Loadout() {
  return (
    <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-12 px-5 py-12 lg:px-16">
      <section className="flex flex-col gap-6">
        <p className="font-mono text-[0.6875rem] font-bold tracking-[0.14em] text-vcyan">PLAYER PROFILE // GAMES</p>
        <h1 className="bg-gradient-to-r from-magenta via-[#ff9ec0] to-vcyan bg-clip-text font-chivo text-[2.375rem] font-black uppercase leading-[2.75rem] tracking-[-0.02em] text-transparent drop-shadow-[0_0_35px_rgba(255,42,133,0.35)] sm:text-[4rem] sm:leading-[4.5rem]">
          Loadout
        </h1>
        <p className="max-w-2xl text-lg leading-[1.875rem] text-vn-sub">
          The games I play, and what keeps me coming back to them.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {gameCategories.map((cat, i) => {
          const l = look[cat.accent];
          return (
            <section
              key={cat.id}
              aria-labelledby={`cat-${cat.id}`}
              className="relative overflow-hidden rounded-xl bg-vn-2/70 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:p-8"
            >
              <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${l.bar}`} aria-hidden="true" />
              <p className="font-mono text-[0.6875rem] font-semibold tracking-[0.14em] text-vn-sub">
                SLOT_{String(i + 1).padStart(2, "0")}
              </p>
              <div className="mt-2 flex items-center gap-3">
                <span className={`h-3 w-3 rounded-sm ${l.dot}`} aria-hidden="true" />
                <h2 id={`cat-${cat.id}`} className={`font-chivo text-2xl font-bold tracking-tight ${l.text}`}>
                  {cat.label}
                </h2>
              </div>
              <p className="mt-2 text-vn-sub">{cat.description}</p>
              <ul className="mt-6 flex flex-col gap-4">
                {cat.games.map((g) => (
                  <li key={g.title} className="rounded-lg bg-vn-canvas/70 p-4">
                    <p className="font-chivo text-lg font-semibold">{g.title}</p>
                    {g.note && <p className="text-sm text-vn-sub">{g.note}</p>}
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <FeaturedGame />

      <section aria-labelledby="creator-title" className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[0.6875rem] font-bold tracking-[0.14em] text-vcyan">CREATOR CORNER</p>
          <h2 id="creator-title" className="font-chivo text-[2rem] font-bold uppercase leading-10 tracking-tight">
            {creator.name}
          </h2>
          <p className="max-w-xl text-vn-sub">Find me as {creator.name} on these channels.</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-3">
          {creator.links.map((l) => {
            const look = social[l.accent];
            return (
              <li key={l.platform}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${creator.name} on ${l.platform}, ${l.handle} (opens in a new tab)`}
                  className={`group flex h-full flex-col gap-2 rounded-xl border border-white/10 bg-vn-2/70 p-5 backdrop-blur-xl transition-all duration-200 hover:-translate-y-1 motion-reduce:hover:translate-y-0 ${look.card}`}
                >
                  <span className="font-mono text-[0.6875rem] font-semibold tracking-[0.14em] text-vn-sub">
                    {l.platform.toUpperCase()}
                  </span>
                  <span className={`flex items-center justify-between gap-3 font-chivo text-xl font-bold transition-colors ${look.text}`}>
                    {l.handle}
                    <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
