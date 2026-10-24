"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "additional", label: "Additional" },
  { id: "contact", label: "Contact" },
];

export default function PortfolioHeader() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.isIntersecting));
        setActive(links.find((l) => seen.get(l.id))?.id ?? "");
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-20 lg:px-12">
        <a href="#top" className="group flex flex-col leading-tight">
          <span className="font-geist text-base font-semibold tracking-[-0.015em] transition-colors group-hover:text-indigo-700 sm:text-xl">
            {profile.name}
          </span>
          <span className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-slate-500">
            Data engineer
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 rounded-xl border border-slate-200 bg-slate-100 p-1 lg:flex"
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              aria-current={active === l.id ? "true" : undefined}
              className={`rounded px-4 py-1 font-mono text-[0.8125rem] font-medium transition-all ${
                active === l.id
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/playground"
            className="hidden items-center gap-1.5 rounded border border-teal-200 bg-teal-50 px-4 py-1.5 font-mono text-[0.8125rem] font-semibold text-teal-800 transition-colors hover:bg-teal-100 sm:inline-flex"
          >
            Playground <span aria-hidden="true">↗</span>
          </Link>
          <a
            href={profile.resume}
            className="hidden rounded border border-slate-200 bg-white px-4 py-1.5 font-mono text-[0.8125rem] text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-indigo-700 sm:inline-block"
          >
            Résumé
          </a>
          <button
            type="button"
            className="rounded border border-slate-200 px-3 py-1.5 font-mono text-[0.8125rem] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-slate-200 bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {[...links.map((l) => ({ href: `#${l.id}`, label: l.label })), { href: profile.resume, label: "Résumé (PDF)" }].map(
              (l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-2.5 font-mono text-[0.9375rem] text-slate-700">
                    {l.label}
                  </a>
                </li>
              ),
            )}
            <li>
              <Link href="/playground" className="block py-2.5 font-mono text-[0.9375rem] font-semibold text-teal-800">
                Playground ↗
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
