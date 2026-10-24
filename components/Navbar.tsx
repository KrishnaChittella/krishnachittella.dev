"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { apps } from "@/lib/data";

const links = [
  { href: "/playground", label: "Library" },
  { href: "/playground/loadout", label: "Loadout" },
  { href: "/", label: "Portfolio ↗" },
];

export default function Navbar() {
  const pathname = usePathname().replace(/\/$/, "") || "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-vn-1/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between gap-2 px-4 sm:gap-4 sm:px-5 lg:px-16">
        <Link href="/playground" className="flex flex-col leading-none">
          <span className="flex items-center gap-2">
            <span
              className="h-2 w-2 animate-pulse rounded-full bg-vcyan shadow-[0_0_10px_rgba(5,217,232,0.8)] motion-reduce:animate-none"
              aria-hidden="true"
            />
            <span className="whitespace-nowrap font-chivo text-lg font-extrabold uppercase tracking-tight">
              KC // Play<span className="hidden sm:inline">ground</span>
            </span>
            <span className="hidden rounded-sm bg-magenta px-1.5 py-0.5 font-mono text-[0.6875rem] font-semibold tracking-[0.08em] text-[#2a0014] sm:inline">
              SANDBOX
            </span>
          </span>
          <span className="mt-1.5 hidden font-mono text-[0.6875rem] font-semibold tracking-[0.14em] text-vcyan sm:block">
            STATUS: BUILDING // {apps.filter((a) => a.href).length} LIVE // {apps.filter((a) => !a.href).length} IN DEVELOPMENT
          </span>
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-1">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded px-2 py-1.5 font-chivo text-sm font-semibold transition-all sm:px-3 sm:text-[0.9375rem] ${
                  active
                    ? "bg-magenta/20 text-[#ff9ec0] shadow-[0_0_16px_rgba(255,42,133,0.25)]"
                    : "text-vn-sub hover:bg-vn-3 hover:text-vn-text"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
