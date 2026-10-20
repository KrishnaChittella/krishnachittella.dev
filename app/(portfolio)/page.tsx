/* eslint-disable @next/next/no-img-element -- static export, next/image optimisation is off */
import Link from "next/link";
import PortfolioHeader from "@/components/PortfolioHeader";
import {
  profile,
  experience,
  education,
  skills,
  metaspike,
  work,
  coursework,
  type Work,
} from "@/lib/data";

const frame = "mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12";
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
          <Eyebrow>{w.kind ?? "Coursework"}</Eyebrow>
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
        <section className={`${frame} flex flex-col items-start justify-between gap-12 pb-16 pt-12 lg:flex-row lg:pb-24 lg:pt-20`}>
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
              <a href="#work" className={`${mono} px-2 py-3 text-slate-600 transition-colors hover:text-slate-950`}>
                View selected work ↓
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
              <p className="font-geist text-lg font-semibold leading-7 tracking-[-0.015em]">Software Engineer I</p>
              <p className="text-sm text-slate-600">Softtechers LLC, since Dec 2025</p>
            </div>
            <div className="flex flex-col gap-1">
              <Eyebrow>Education</Eyebrow>
              <p className="font-geist text-lg font-semibold leading-7 tracking-[-0.015em]">M.S. Computer Science</p>
              <p className="text-sm text-slate-600">University of South Dakota, 2024</p>
            </div>
            <div className="flex flex-col gap-2 border-t border-slate-100 pt-4">
              <Eyebrow>Primary toolchain</Eyebrow>
              <ul className="flex flex-wrap gap-1.5">
                {["Python", "PySpark", "SQL", "AWS", "GCP", "Kafka"].map((t) => (
                  <li key={t}>
                    <Chip>{t}</Chip>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        {/* Work */}
        <section id="work" className={`${frame} flex flex-col gap-8 py-16`}>
          <SectionHead
            eyebrow="Selected work"
            title="Projects"
            note="Public repositories link to source. MetaSpike is private while it is being built."
          />

          <article className={`${card} reveal grid gap-8 lg:grid-cols-12 lg:gap-12 lg:p-8`}>
            <div className="flex flex-col gap-5 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>Data pipeline</Eyebrow>
                <span className="rounded border border-teal-200 bg-teal-50 px-2.5 py-0.5 font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-teal-800">
                  In development
                </span>
              </div>
              <h3 className="font-geist text-2xl font-semibold leading-8 tracking-[-0.02em]">{metaspike.name}</h3>
              <p className="text-lg leading-7 tracking-[-0.01em] text-slate-600">{metaspike.blurb}</p>
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded border border-slate-200 bg-slate-200">
                <div className="flex flex-col bg-slate-50 p-3.5">
                  <dt className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-slate-500">
                    Labelled test cases
                  </dt>
                  <dd className="font-geist text-xl font-semibold">200</dd>
                </div>
                <div className="flex flex-col bg-slate-50 p-3.5">
                  <dt className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-slate-500">
                    False automatic merges
                  </dt>
                  <dd className="font-geist text-xl font-semibold text-emerald-700">0</dd>
                </div>
              </dl>
              <ul className="flex flex-wrap gap-1.5">
                {["Python", "SQL", "BigQuery", "dbt", "Cloud Run"].map((s) => (
                  <li key={s}>
                    <Chip>{s}</Chip>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-slate-500">{metaspike.stack}</p>
            </div>

            <div className="overflow-hidden rounded-lg bg-slate-900 text-slate-200 lg:col-span-5">
              <div className="flex items-center justify-between border-b border-slate-800 px-4 py-2.5 font-mono text-xs text-slate-400">
                <span>entity-resolution</span>
                <span>resolver decisions</span>
              </div>
              <pre tabIndex={0} aria-label="Resolver decisions" className="overflow-x-auto p-4 font-mono text-[0.8125rem] leading-6">
                <span className="text-slate-400">{"# what the resolver can decide\n"}</span>
                <span className="text-indigo-300">AUTO_MATCH</span>
                {"\n"}
                <span className="text-indigo-300">NEW_ENTITY</span>
                {"\n"}
                <span className="text-emerald-400">QUARANTINE</span>
                <span className="text-slate-400">{"   # no id, never scored,\n"}</span>
                <span className="text-slate-400">{"              # re-checked on new evidence\n"}</span>
                <span className="text-indigo-300">MANUAL_OVERRIDE</span>
              </pre>
            </div>
          </article>

          <div className="grid gap-6 md:grid-cols-2">
            {work.map((w) => (
              <WorkCard key={w.name} w={w} />
            ))}
          </div>

          <h3 className="reveal mt-8 font-geist text-2xl font-semibold tracking-[-0.02em]">Coursework and certifications</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {coursework.map((w) => (
              <WorkCard key={w.name} w={w} />
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className={`${frame} flex flex-col gap-8 py-16`}>
          <SectionHead eyebrow="Trajectory" title="Experience" />
          <ol className="relative flex flex-col gap-8 pl-6 md:pl-8">
            <div className="absolute bottom-3 left-2.5 top-3 w-0.5 bg-slate-200 md:left-3.5" aria-hidden="true" />
            {experience.map((j, i) => (
              <li key={j.company + j.period} className={`${card} reveal relative flex flex-col justify-between gap-4 md:flex-row md:items-start`}>
                <span
                  aria-hidden="true"
                  className={`absolute -left-[1.85rem] top-7 h-3 w-3 rounded-full ring-4 ring-white md:-left-[2.1rem] ${i === 0 ? "bg-indigo-700" : "bg-slate-400"}`}
                />
                <div className="flex max-w-2xl flex-col gap-2">
                  <h3 className={h3}>{j.title}</h3>
                  <p className="font-medium text-indigo-700">
                    {j.company}
                    {j.place ? `, ${j.place}` : ""}
                  </p>
                  <ul className="mt-1 flex flex-col gap-2 text-slate-600">
                    {j.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {j.stack && (
                    <ul className="flex flex-wrap gap-1.5 pt-2">
                      {j.stack.split(", ").map((s) => (
                        <li key={s}>
                          <Chip>{s}</Chip>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <p className={`${mono} shrink-0 font-bold ${i === 0 ? "text-indigo-700" : "text-slate-600"}`}>{j.period}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Education */}
        <section id="education" className={`${frame} flex flex-col gap-8 py-16`}>
          <SectionHead eyebrow="Academics" title="Education" />
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((e) => (
              <article key={e.school} className={`${card} reveal flex flex-col gap-3`}>
                <p className={`${mono} font-bold text-indigo-700`}>{e.period}</p>
                <h3 className={h3}>{e.degree}</h3>
                <p>
                  {e.school}, {e.place}
                </p>
                {e.note && <p className="text-sm leading-[1.375rem] text-slate-600">{e.note}</p>}
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className={`${frame} flex flex-col gap-8 py-16`}>
          <SectionHead eyebrow="Taxonomy" title="Skills and tooling" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <article key={s.group} className={`${card} reveal flex flex-col gap-4`}>
                <h3 className="font-geist text-xl font-semibold tracking-[-0.015em]">{s.group}</h3>
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
        <section className={`${frame} py-12`}>
          <div className="reveal relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 p-8 text-white md:p-12 lg:flex-row">
            <div className="flex max-w-2xl flex-col gap-3">
              <span className="font-mono text-[0.6875rem] font-bold uppercase tracking-[0.08em] text-teal-300">Playground</span>
              <h2 className="font-geist text-3xl font-bold leading-9 tracking-[-0.03em] sm:text-4xl">
                Apps and experiments in progress
              </h2>
              <p className="text-slate-300">
                MetaSpike and anEverse, plus the games I play. A separate dark site for what I build outside work.
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

        {/* Contact */}
        <section id="contact" className={`${frame} flex flex-col gap-12 py-16 lg:flex-row`}>
          <div className="reveal flex flex-1 flex-col gap-6">
            <div className="flex flex-col gap-1">
              <Eyebrow>Contact</Eyebrow>
              <h2 className={h2}>Open to data roles across the US</h2>
            </div>
            <p className="max-w-xl text-lg leading-7 text-slate-600">
              Data engineering, analytics and ML engineering. Happy to relocate. Email is the fastest way to
              reach me.
            </p>
          </div>
          <div className="reveal flex w-full flex-col gap-3 lg:w-[30rem]">
            {[
              { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
              { label: "LinkedIn", value: "linkedin.com/in/lakshmi-varaha-krishna-chittella", href: profile.linkedin, external: true },
              { label: "GitHub", value: "github.com/KrishnaChittella", href: profile.github, external: true },
              { label: "Résumé", value: "Download PDF", href: profile.resume, external: false, download: true },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                {...("download" in c ? { download: true } : {})}
                className={`${card} group flex flex-col gap-1 py-4`}
              >
                <span className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-slate-500">
                  {c.label}
                </span>
                <span className="break-all font-geist text-lg font-medium tracking-[-0.015em] transition-colors group-hover:text-indigo-700">
                  {c.value} <span aria-hidden="true">{c.external ? "↗" : "→"}</span>
                </span>
              </a>
            ))}
          </div>
        </section>
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
