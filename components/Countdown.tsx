"use client";

import { useEffect, useState } from "react";

const pad = (n: number, len = 2) => String(n).padStart(len, "0");

// Whole seconds left, never negative.
export function secondsLeft(target: number, now: number) {
  return Math.max(0, Math.floor((target - now) / 1000));
}

export default function Countdown({ target }: { target: string }) {
  // null until mounted: the server and first client render match, then the real clock takes over.
  const [now, setNow] = useState<number | null>(null);
  const end = new Date(target).getTime();

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    // Recomputed from the clock on every tick, so background tabs and sleep never drift.
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (Number.isNaN(end)) return null;

  const left = now === null ? null : secondsLeft(end, now);
  const done = left === 0;
  const parts =
    left === null
      ? ["--", "--", "--", "--"]
      : [
          pad(Math.floor(left / 86400)),
          pad(Math.floor((left % 86400) / 3600)),
          pad(Math.floor((left % 3600) / 60)),
          pad(left % 60),
        ];
  const names = ["DAYS", "HOURS", "MINUTES", "SECONDS"];
  const date = new Date(end).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <div className="flex flex-col gap-3">
      {done ? (
        <p
          role="status"
          className="bg-gradient-to-r from-magenta via-[#ff9ec0] to-vcyan bg-clip-text font-chivo text-4xl font-black uppercase tracking-tight text-transparent sm:text-5xl"
        >
          IT&apos;S HERE!
        </p>
      ) : (
        <div
          role="timer"
          aria-label={
            left === null
              ? `Countdown to ${date}`
              : `${parts[0]} days, ${parts[1]} hours, ${parts[2]} minutes and ${parts[3]} seconds until ${date}`
          }
          className="grid w-full max-w-[30rem] grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-start gap-x-1.5 sm:gap-x-3"
        >
          {parts.map((p, i) => (
            <div key={names[i]} className="contents">
              {i > 0 && (
                <span aria-hidden="true" className="pt-0.5 font-chivo text-2xl font-black text-vcyan/60 sm:text-4xl">
                  :
                </span>
              )}
              <div className="flex flex-col items-center gap-1 rounded-lg bg-vn-canvas/80 px-1 py-2.5 shadow-inner sm:px-2 sm:py-3">
                <span
                  aria-hidden="true"
                  className={`font-chivo text-3xl font-black leading-none tabular-nums sm:text-5xl ${
                    i === 3 ? "text-[#ff9ec0]" : "text-vn-text"
                  }`}
                >
                  {p}
                </span>
                <span className="font-mono text-[0.6875rem] font-semibold tracking-[0.08em] text-vn-sub">{names[i]}</span>
              </div>
            </div>
          ))}
        </div>
      )}
      <p className="font-mono text-[0.6875rem] leading-4 tracking-[0.04em] text-vn-sub">
        Calendar-date countdown to {date}, 12:00 AM your local time. Not an official unlock timer.
      </p>
    </div>
  );
}
