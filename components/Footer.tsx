import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-vn-1/60">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-4 px-5 py-8 font-mono text-xs tracking-[0.08em] text-vn-sub lg:px-16">
        <p>
          <span className="font-chivo text-sm font-extrabold uppercase tracking-tight text-vn-text">KC // Playground</span>
          <span className="ml-3">by Krishna Chittella</span>
        </p>
        <ul className="flex items-center gap-6">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-vcyan">
              GitHub
            </a>
          </li>
          <li>
            <a href={profile.instagram} target="_blank" rel="noreferrer" className="transition-colors hover:text-vcyan">
              Instagram
            </a>
          </li>
          <li>
            <Link href="/" className="transition-colors hover:text-vcyan">
              Portfolio ↗
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
