import Countdown from "@/components/Countdown";
import { gta6 } from "@/lib/data";

export default function FeaturedGame() {
  const g = gta6;
  return (
    <section
      aria-labelledby="gta6-title"
      className="group relative overflow-hidden rounded-xl bg-vn-2/70 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(255,42,133,0.25),0_0_40px_rgba(5,217,232,0.12)]"
    >
      <div className="absolute inset-x-0 top-0 z-10 h-0.5 bg-gradient-to-r from-magenta via-[#ff9ec0] to-vcyan" aria-hidden="true" />

      <div className="relative overflow-hidden">
        <picture>
          <source media="(min-width: 640px)" srcSet={g.art.landscape} />
          <img
            src={g.art.portrait}
            alt={g.art.alt}
            width={1600}
            height={900}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:aspect-video"
          />
        </picture>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-vn-2/70 via-transparent to-transparent" aria-hidden="true" />
      </div>

      <div className="grid gap-8 p-6 sm:p-8 xl:grid-cols-2 xl:items-center xl:gap-12 xl:p-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[0.6875rem] font-bold tracking-[0.14em] text-vcyan">{g.label}</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-magenta/50 bg-magenta/15 px-3 py-1 font-mono text-[0.6875rem] font-bold tracking-[0.14em] text-[#ff9ec0] shadow-[0_0_16px_rgba(255,42,133,0.45)]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-magenta motion-reduce:animate-none" aria-hidden="true" />
              {g.badge}
            </span>
          </div>
          <h2
            id="gta6-title"
            className="bg-gradient-to-r from-magenta via-[#ff9ec0] to-vcyan bg-clip-text font-chivo text-[2rem] font-black uppercase leading-[2.25rem] tracking-[-0.02em] text-transparent drop-shadow-[0_0_30px_rgba(255,42,133,0.3)] sm:text-[2.75rem] sm:leading-[3rem]"
          >
            {g.title}
          </h2>
          <p className="text-lg leading-7 text-vn-text">{g.tagline}</p>
        </div>

        <div className="flex flex-col gap-5">
          <Countdown target={g.releaseAt} />
          <p className="font-mono text-[0.6875rem] leading-4 tracking-[0.04em] text-vn-sub">
            <a href={g.art.source} target="_blank" rel="noreferrer" className="underline underline-offset-2 transition-colors hover:text-vcyan">
              {g.art.credit}
            </a>
            . Unofficial fan page, not affiliated with Rockstar Games.
          </p>
        </div>
      </div>
    </section>
  );
}
