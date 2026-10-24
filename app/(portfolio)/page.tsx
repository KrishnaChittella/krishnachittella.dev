/* eslint-disable @next/next/no-img-element -- static export, next/image optimisation is off */
import Link from "next/link";
import PortfolioHeader from "@/components/PortfolioHeader";
import {
  profile,
  experience,
  education,
  skills,
  leadership,
  coverNext,
  work,
  type Work,
} from "@/lib/data";

const frame = "mx-auto w-full max-w-[96rem] px-5 sm:px-8 lg:px-12";
const section = "flex flex-col gap-8 py-12 first:pt-0";
// Sticky only when the sidebars sit beside the content; scrolls itself if taller than the viewport.
const sidebar = "min-w-0 xl:sticky xl:top-24 xl:max-h-[calc(100vh-7rem)] xl:self-start xl:overflow-y-auto";
const card =
  "rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-[0_1px_3px_0_rgba(15,23,42,0.04),0_4px_8px_-2px_rgba(15,23,42,0.03)]";
const h2 = "font-geist text-[1.75rem] font-semibold leading-9 tracking-[-0.02em] sm:text-4xl sm:leading-[2.75rem] sm:tracking-[-0.03em]";
const h3 = "font-geist text-xl font-semibold leading-7 tracking-[-0.015em]";
const mono = "font-mono text-[0.8125rem] font-medium tracking-[-0.01em]";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[0.6875rem] font-bold uppercase leading-4 tracking-[0.08em] text-indigo-700">
      {children}
    </span>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded border border-slate-200 bg-slate-100 px-2 py-0.5 font-mono text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

function SectionHead({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div className="reveal flex flex-col justify-between gap-4 md:flex-row md:items-end">
      <div className="flex flex-col gap-1">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={h2}>{title}</h2>
      </div>
      {note && <p className="max-w-md text-sm leading-[1.375rem] text-slate-600">{note}</p>}
    </div>
  );
}

function WorkCard({ w }: { w: Work }) {
  return (
    <article className={`${card} reveal flex flex-col justify-between gap-6`}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <Eyebrow>{w.kind}</Eyebrow>
          {w.context && <span className="text-right font-mono text-xs text-slate-500">{w.context}</span>}
        </div>
        <h3 className={`${h3} [overflow-wrap:anywhere]`}>{w.title}</h3>
        <p className="text-slate-600">{w.blurb}</p>
        <ul className="flex flex-wrap gap-1.5">
          {w.stack.split(", ").map((s) => (
            <li key={s}>
              <Chip>{s}</Chip>
            </li>
          ))}
        </ul>
      </div>
      {w.href && (
        <div className="flex items-center justify-between border-t border-slate-100 pt-5">
          <a href={w.href} target="_blank" rel="noreferrer" className={`${mono} text-slate-700 transition-colors hover:text-indigo-700`}>
            Source code <span aria-hidden="true">↗</span>
          </a>
        </div>
      )}
    </article>
  );
}

export default function Home() {
  return (
    <>
      <PortfolioHeader />

      <main id="top" className="pt-16 lg:pt-20">
        {/* Hero */}
        <section id="summary" className={`${frame} flex flex-col items-start justify-between gap-12 pb-16 pt-12 lg:flex-row lg:pb-24 lg:pt-20`}>
          <div className="flex max-w-3xl flex-1 flex-col gap-6">
            <p
              className="enter inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1.5 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-emerald-800"
              style={{ "--i": 0 } as React.CSSProperties}
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
              </span>
              Open to data roles in the US
            </p>
            <div className="enter flex flex-col gap-2" style={{ "--i": 1 } as React.CSSProperties}>
              <h1 className="font-geist text-4xl font-semibold leading-[2.75rem] tracking-[-0.025em] sm:text-[3.5rem] sm:leading-[4rem] sm:tracking-[-0.035em]">
                {profile.name}
              </h1>
              <p className="font-geist text-2xl font-semibold leading-8 tracking-[-0.02em] text-indigo-700">
                Data engineer
              </p>
            </div>
            <p className="enter max-w-2xl text-lg leading-7 tracking-[-0.01em] text-slate-600" style={{ "--i": 2 } as React.CSSProperties}>
              {profile.summary}
            </p>
            <div className="enter flex flex-wrap items-center gap-4 pt-2" style={{ "--i": 3 } as React.CSSProperties}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded bg-indigo-700 px-6 py-3 font-geist text-lg font-semibold tracking-[-0.015em] text-white transition-all hover:bg-indigo-800 active:scale-[0.99]"
              >
                Get in touch <span aria-hidden="true">→</span>
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded border border-slate-300 bg-white px-6 py-3 font-geist text-lg font-semibold tracking-[-0.015em] text-slate-800 transition-all hover:bg-slate-50"
              >
                Download résumé (PDF)
              </a>
              <a href="#projects" className={`${mono} px-2 py-3 text-slate-600 transition-colors hover:text-slate-950`}>
                View selected projects ↓
              </a>
            </div>
          </div>

          <aside
            className="enter flex w-full shrink-0 flex-col gap-5 rounded-xl border border-slate-200 bg-white p-6 lg:w-80"
            style={{ "--i": 2 } as React.CSSProperties}
            aria-label="Profile summary"
          >
            <img
              src="/images/krishna.jpg"
              alt="Lakshmi Varaha Krishna Chittella standing on the University of South Dakota campus in a rust-coloured blazer"
              width={900}
              height={1600}
              className="aspect-[4/3] w-full rounded-lg object-cover object-[30%_20%]"
            />
            <div className="flex flex-col gap-1">
              <Eyebrow>Currently</Eyebrow>
              <p className="font-geist text-lg font-semibold leading-7 tracking-[-0.015em]">Data Engineer</p>
              <p className="text-sm text-slate-600">Softtechers LLC, since Dec 2025</p>
            </div>
            <div className="flex flex-col gap-1">
              <Eyebrow>Education</Eyebrow>
              <p className="font-geist text-lg font-semibold leading-7 tracking-[-0.015em]">M.S. Computer Science</p>
              <p className="text-sm text-slate-600">University of South Dakota, Dec 2024</p>
            </div>
            <div className="flex flex-col gap-2 border-t border-slate-100 pt-4">
              <Eyebrow>Primary toolchain</Eyebrow>
              <ul className="flex flex-wrap gap-1.5">
                {["Python", "SQL", "Snowflake", "PySpark", "dbt", "AWS"].map((t) => (
                  <li key={t}>
                    <Chip>{t}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <div className={`${frame} grid gap-12 pb-16 xl:grid-cols-[16rem_minmax(0,1fr)_16rem] xl:gap-8 2xl:grid-cols-[19rem_minmax(0,1fr)_19rem] 2xl:gap-12`}>
          {/* Left sidebar: the live project */}
          <aside aria-labelledby="cover-next-title" className={sidebar}>
            <article className="flex flex-col gap-4 rounded-xl border border-emerald-200 bg-white p-6 shadow-[0_1px_3px_0_rgba(15,23,42,0.04),0_8px_24px_-8px_rgba(5,150,105,0.18)]">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-emerald-800">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                Live project
              </p>
              <div className="flex flex-col gap-2">
                <h2 id="cover-next-title" className="font-geist text-2xl font-semibold leading-8 tracking-[-0.02em]">
                  {coverNext.name}
                </h2>
                <p className="text-sm leading-[1.375rem] text-slate-600">{coverNext.blurb}</p>
              </div>
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded border border-slate-200 bg-slate-200">
                <div className="flex flex-col bg-slate-50 p-3">
                  <dt className="font-mono text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-slate-500">Labelled cases</dt>
                  <dd className="font-geist text-xl font-semibold">200</dd>
                </div>
                <div className="flex flex-col bg-slate-50 p-3">
                  <dt className="font-mono text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-slate-500">False merges</dt>
                  <dd className="font-geist text-xl font-semibold text-emerald-700">0</dd>
                </div>
              </dl>
              <ul className="flex flex-col gap-2 text-sm leading-[1.375rem] text-slate-600">
                {coverNext.facts.map((f) => (
                  <li key={f} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-sm bg-emerald-600" aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-1.5">
                {coverNext.stack.map((s) => (
                  <li key={s}>
                    <Chip>{s}</Chip>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2 border-t border-slate-100 pt-4">
                <a
                  href={coverNext.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded bg-emerald-700 px-4 py-2.5 font-geist font-semibold text-white transition-colors hover:bg-emerald-800"
                >
                  Visit the live site <span aria-hidden="true">↗</span>
                </a>
                <a href={coverNext.repo} target="_blank" rel="noreferrer" className={`${mono} text-center text-slate-700 transition-colors hover:text-indigo-700`}>
                  Source code <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          </aside>

          <div className="flex min-w-0 flex-col">
            {/* Experience */}
            <section id="experience" className={section}>
              <SectionHead eyebrow="Trajectory" title="Experience" />
              <ol className="relative flex flex-col gap-8 pl-6 md:pl-8">
                <div className="absolute bottom-3 left-2.5 top-3 w-0.5 bg-slate-200 md:left-3.5" aria-hidden="true" />
                {experience.map((j, i) => (
                  <li key={j.company + j.period} className={`${card} reveal relative flex flex-col gap-3`}>
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[1.85rem] top-7 h-3 w-3 rounded-full ring-4 ring-white md:-left-[2.1rem] ${i === 0 ? "bg-indigo-700" : "bg-slate-400"}`}
                    />
                    <div className="flex flex-col justify-between gap-1 md:flex-row md:items-start md:gap-4">
                      <div className="flex flex-col gap-1">
                        <h3 className={h3}>{j.title}</h3>
                        <p className="font-medium text-indigo-700">
                          {j.company}
                          {j.place ? `, ${j.place}` : ""}
                        </p>
                      </div>
                      <p className={`${mono} shrink-0 font-bold ${i === 0 ? "text-indigo-700" : "text-slate-600"}`}>{j.period}</p>
                    </div>
                    <ul className="flex list-disc flex-col gap-1.5 pl-5 text-slate-600 marker:text-slate-400">
                      {j.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>

            {/* Projects */}
            <section id="projects" className={section}>
              <SectionHead eyebrow="Selected work" title="Selected projects" />
              <div className="grid gap-6 md:grid-cols-2">
                {work.map((w) => (
                  <WorkCard key={w.name} w={w} />
                ))}
              </div>
            </section>

            {/* Education */}
            <section id="education" className={section}>
              <SectionHead eyebrow="Academics" title="Education" />
              <div className="grid gap-6 md:grid-cols-2">
                {education.map((e) => (
                  <article key={e.school} className={`${card} reveal flex flex-col gap-3`}>
                    <p className={`${mono} font-bold text-indigo-700`}>{e.period}</p>
                    <h3 className={h3}>{e.degree}</h3>
                    <p>{e.school}</p>
                    {e.note && <p className="text-sm leading-[1.375rem] text-slate-600">{e.note}</p>}
                  </article>
                ))}
              </div>
            </section>

            {/* Additional */}
            <section id="additional" className={section}>
              <SectionHead eyebrow="Beyond the job list" title="Additional" />
              <article className={`${card} reveal flex flex-col gap-2`}>
                <Eyebrow>Leadership</Eyebrow>
                <div className="flex flex-col justify-between gap-1 md:flex-row md:items-start md:gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className={h3}>{leadership.title}</h3>
                    <p className="font-medium text-indigo-700">{leadership.org}</p>
                  </div>
                  <p className={`${mono} shrink-0 font-bold text-slate-600`}>{leadership.period}</p>
                </div>
                <p className="text-slate-600">{leadership.note}</p>
              </article>
              <h3 className="reveal font-geist text-2xl font-semibold tracking-[-0.02em]">Technical skills</h3>
              <div className="grid gap-6 md:grid-cols-2">
                {skills.map((s) => (
                  <article key={s.group} className={`${card} reveal flex flex-col gap-4`}>
                    <h4 className="font-geist text-lg font-semibold tracking-[-0.015em]">{s.group}</h4>
                    <ul className="flex flex-wrap gap-2">
                      {s.items.map((i) => (
                        <li key={i} className="rounded border border-slate-200 bg-slate-100 px-2.5 py-1 font-mono text-[0.8125rem] text-slate-800">
                          {i}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            {/* Playground bridge */}
            <section className="py-12">
              <div className="reveal relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 p-8 text-white md:p-12 2xl:flex-row">
                <div className="flex max-w-2xl flex-col gap-3">
                  <span className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-teal-300">Playground</span>
                  <h2 className="font-geist text-3xl font-bold leading-9 tracking-[-0.03em] sm:text-4xl">
                    Apps and experiments
                  </h2>
                  <p className="text-slate-300">
                    Cover Next and anEverse, plus the games I play. A separate dark site for what I build outside work.
                  </p>
                </div>
                <Link
                  href="/playground"
                  className="inline-flex shrink-0 items-center gap-2 rounded bg-teal-400 px-6 py-3.5 font-geist text-lg font-bold text-slate-950 transition-colors hover:bg-teal-300"
                >
                  Open the Playground <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </section>
          </div>

          {/* Right sidebar: contact */}
          <aside id="contact" aria-labelledby="contact-title" className={sidebar}>
            <div className="flex flex-col gap-5 rounded-xl border border-slate-200 bg-white p-6">
              <div className="flex flex-col gap-2">
                <Eyebrow>Contact</Eyebrow>
                <h2 id="contact-title" className="font-geist text-2xl font-semibold leading-8 tracking-[-0.02em]">
                  Open to data roles across the US
                </h2>
                <p className="text-sm leading-[1.375rem] text-slate-600">
                  Data engineering, analytics and ML engineering. Happy to relocate. Email is the fastest way to reach me.
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                {[
                  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
                  { label: "LinkedIn", value: "in/lakshmi-varaha-krishna-chittella", href: profile.linkedin, external: true },
                  { label: "GitHub", value: "github.com/KrishnaChittella", href: profile.github, external: true },
                  { label: "Résumé", value: "Download PDF", href: profile.resume, external: false, download: true },
                ].map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      {...("download" in c ? { download: true } : {})}
                      className="group flex flex-col gap-0.5 rounded-lg border border-slate-200 px-4 py-3 transition-colors hover:border-slate-300 hover:bg-slate-50"
                    >
                      <span className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-slate-500">{c.label}</span>
                      <span className="break-all font-geist text-[0.9375rem] font-medium transition-colors group-hover:text-indigo-700">
                        {c.value} <span aria-hidden="true">{c.external ? "↗" : "→"}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <footer className="mt-10 w-full border-t border-slate-200 bg-slate-50">
        <div className={`${frame} flex flex-col items-center justify-between gap-4 py-6 md:flex-row`}>
          <p className="flex items-center gap-2 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-slate-600">
            <span className="h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
            Open to data roles in the US
          </p>
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </footer>
    </>
  );
}
