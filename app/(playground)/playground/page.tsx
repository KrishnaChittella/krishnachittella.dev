import Link from "next/link";
import AppLibrary from "@/components/AppLibrary";
import { apps } from "@/lib/data";

export default function Library() {
  return (
    <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-24 px-5 py-12 lg:px-16">
      <section className="flex flex-col gap-6">
        <p
          className="enter inline-flex w-fit items-center gap-2 rounded-full bg-vn-3/90 px-4 py-1 font-mono text-[0.6875rem] font-bold tracking-[0.14em] text-[#ff9ec0] shadow-[0_0_20px_rgba(255,42,133,0.25)]"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          <span className="h-2 w-2 animate-ping rounded-full bg-magenta motion-reduce:animate-none" aria-hidden="true" />
          {apps.length} PROJECTS // COVER NEXT IS LIVE
        </p>
        <h1
          className="enter bg-gradient-to-r from-magenta via-[#ff9ec0] to-vcyan bg-clip-text font-chivo text-[2.375rem] font-black uppercase leading-[2.75rem] tracking-[-0.02em] text-transparent drop-shadow-[0_0_35px_rgba(255,42,133,0.35)] sm:text-[4rem] sm:leading-[4.5rem] sm:tracking-[-0.03em]"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          Playground
        </h1>
        <p className="enter max-w-2xl text-lg leading-[1.875rem] text-vn-sub" style={{ "--i": 2 } as React.CSSProperties}>
          Apps and experiments I build outside work. Open a card to see how it works. Cover Next is live; the rest are still in development.
        </p>
      </section>

      <section aria-labelledby="library-title" className="flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-sm bg-magenta shadow-[0_0_12px_rgba(255,42,133,0.8)]" aria-hidden="true" />
          <h2 id="library-title" className="font-chivo text-[2rem] font-bold uppercase leading-10 tracking-tight">
            App library
          </h2>
        </div>
        <AppLibrary />
      </section>

      <section className="relative overflow-hidden rounded-xl bg-gradient-to-r from-vn-1 via-vn-2 to-vn-1 p-8 shadow-[0_20px_45px_rgba(0,0,0,0.5)] lg:p-10">
        <div className="relative flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="flex max-w-2xl flex-col gap-2 text-center lg:text-left">
            <span className="font-mono text-[0.6875rem] font-bold tracking-[0.14em] text-vcyan">FOR RECRUITERS</span>
            <h2 className="font-chivo text-[2rem] font-bold leading-10 tracking-tight">Reviewing for a role?</h2>
            <p className="text-vn-sub">
              Work history, education, skills and a résumé are on the light portfolio.
            </p>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-[#e4e1f0] px-8 py-4 font-chivo font-semibold text-[#12121d] transition-all hover:bg-white active:scale-95"
          >
            Open the portfolio <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
