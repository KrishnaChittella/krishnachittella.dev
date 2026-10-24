"use client";

import { useId, useMemo, useState } from "react";
import { apps, type App } from "@/lib/data";

const filters = ["All", ...Array.from(new Set(apps.map((a) => a.kind)))] as const;

const look = {
  magenta: {
    bar: "from-[#ffb1c5] via-magenta to-vcyan",
    btn: "from-magenta to-coral text-[#2a0014] shadow-[0_0_24px_rgba(255,42,133,0.35)]",
    text: "text-[#ff9ec0]",
    glow: "hover:shadow-[0_20px_50px_rgba(255,42,133,0.15)]",
  },
  cyan: {
    bar: "from-vcyan via-[#00d8e7] to-magenta",
    btn: "from-[#00d8e7] to-[#6ff2ff] text-[#002022] shadow-[0_0_24px_rgba(5,217,232,0.35)]",
    text: "text-vcyan",
    glow: "hover:shadow-[0_20px_50px_rgba(5,217,232,0.15)]",
  },
};

function Card({ app, index, open, onToggle }: { app: App; index: number; open: boolean; onToggle: () => void }) {
  const l = look[app.accent];
  const id = useId();
  const panel = `${id}-panel`;
  return (
    <article
      className={`relative overflow-hidden rounded-xl bg-vn-2/70 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-shadow duration-300 lg:p-10 ${l.glow}`}
    >
      <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${l.bar}`} aria-hidden="true" />

      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[0.6875rem] font-semibold tracking-[0.14em]">
          <span className={`rounded-sm bg-vn-3 px-2 py-0.5 ${l.text}`}>
            {`APP_${String(index + 1).padStart(2, "0")} // ${app.status.toUpperCase()}`}
          </span>
          <span className="text-vn-sub">{app.kind.toUpperCase()}</span>
          <span
            className={`h-2 w-2 animate-pulse rounded-full motion-reduce:animate-none ${
              app.href ? "bg-[#22e57a] shadow-[0_0_8px_rgba(34,229,122,0.8)]" : "bg-amber shadow-[0_0_8px_rgba(255,122,0,0.8)]"
            }`}
            aria-hidden="true"
          />
        </div>

        <h3 className="font-chivo text-[1.5rem] font-bold leading-8 tracking-[-0.01em]">{app.title}</h3>
        <p className="font-geist text-lg leading-[1.75rem] text-vn-text">{app.tagline}</p>
        <p className="max-w-3xl text-vn-sub">{app.description}</p>

        <ul className="flex flex-wrap gap-2">
          {app.tags.map((t) => (
            <li key={t} className="rounded-full bg-vn-3 px-3 py-1 font-mono text-[0.6875rem] font-semibold tracking-[0.08em] text-vn-text">
              {t}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panel}
            onClick={onToggle}
            className={`flex items-center gap-2 rounded-md bg-gradient-to-r px-6 py-2.5 font-chivo font-semibold tracking-wide transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 motion-reduce:hover:translate-y-0 ${l.btn}`}
          >
            {open ? "Hide details" : "Open details"}
            <span aria-hidden="true" className={`transition-transform ${open ? "rotate-180" : ""}`}>
              ▾
            </span>
          </button>
          {app.href ? (
            <a
              href={app.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[#22e57a]/50 bg-vn-2 px-4 py-2.5 font-mono text-[0.8125rem] font-medium text-[#22e57a] transition-colors hover:bg-vn-3"
            >
              Visit live site <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="rounded-md border border-vcyan/30 bg-vn-2 px-4 py-2.5 font-mono text-[0.8125rem] font-medium text-vcyan/60"
            >
              Not public yet
            </button>
          )}
        </div>
      </div>

      <div
        id={panel}
        role="region"
        aria-label={`${app.title} details`}
        className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 gap-6 pt-8 lg:grid-cols-12 lg:gap-8" inert={!open}>
            <div className="min-w-0 lg:col-span-7">
              <h4 className="font-mono text-[0.6875rem] font-bold tracking-[0.14em] text-vn-sub">WHAT IT DOES</h4>
              <ul className="mt-3 flex flex-col gap-3">
                {app.facts.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-sm ${app.accent === "magenta" ? "bg-magenta" : "bg-vcyan"}`} aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0 rounded-xl bg-vn-canvas/90 p-5 shadow-inner lg:col-span-5">
              <p className={`mb-3 font-mono text-[0.8125rem] font-medium ${l.text}`}>SPEC // {app.title.toUpperCase()}</p>
              <dl>
                {app.specs.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-t border-white/5 py-2 font-mono text-xs">
                    <dt className="shrink-0 tracking-[0.08em] text-vn-sub">{k}</dt>
                    <dd className="min-w-0 break-words text-right text-vn-text">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function AppLibrary() {
  const [filter, setFilter] = useState<string>("All");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>(apps[0]?.id ?? null);
  const searchId = useId();

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return apps.filter(
      (a) =>
        (filter === "All" || a.kind === filter) &&
        (!q || [a.title, a.tagline, a.description, ...a.tags].join(" ").toLowerCase().includes(q)),
    );
  }, [filter, query]);

  const count = (f: string) => (f === "All" ? apps.length : apps.filter((a) => a.kind === f).length);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-stretch justify-between gap-4 rounded-xl bg-vn-1/70 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.4)] backdrop-blur-md lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter apps">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-1.5 font-mono text-[0.6875rem] font-semibold tracking-[0.08em] transition-all ${
                filter === f
                  ? "bg-magenta text-[#2a0014] shadow-[0_0_16px_rgba(255,42,133,0.45)]"
                  : "bg-vn-3 text-vn-sub hover:text-vn-text"
              }`}
            >
              {f === "All" ? "ALL SYSTEMS" : f.toUpperCase()} ({count(f)})
            </button>
          ))}
        </div>
        <div className="relative flex min-w-[260px] items-center lg:w-80">
          <label htmlFor={searchId} className="sr-only">
            Search the app library
          </label>
          <span className="pointer-events-none absolute left-3 font-mono text-sm text-vcyan" aria-hidden="true">
            &gt;_
          </span>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search apps or tech"
            className="w-full rounded-lg bg-vn-canvas py-2 pl-9 pr-3 font-mono text-[0.8125rem] text-vn-text shadow-inner placeholder:text-vn-sub/70 focus:outline-none focus:ring-1 focus:ring-magenta"
          />
        </div>
      </div>

      <p className="font-mono text-[0.6875rem] font-semibold tracking-[0.14em] text-vcyan" role="status" aria-live="polite">
        SHOWING {shown.length} OF {apps.length}
      </p>

      <div className="flex flex-col gap-10">
        {shown.map((a) => (
          <Card
            key={a.id}
            app={a}
            index={apps.indexOf(a)}
            open={openId === a.id}
            onToggle={() => setOpenId(openId === a.id ? null : a.id)}
          />
        ))}
        {shown.length === 0 && (
          <p className="rounded-xl bg-vn-1/70 p-8 font-mono text-sm text-vn-sub">
            NO MATCH. Clear the search or pick another filter.
          </p>
        )}
      </div>
    </div>
  );
}
