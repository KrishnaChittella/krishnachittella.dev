import Link from "next/link";

const links = [
  { href: "https://github.com/krishnachittella", label: "GitHub" },
  { href: "https://linkedin.com/in/krishnachittella", label: "LinkedIn" },
  { href: "mailto:hello@krishnachittella.dev", label: "Email" },
];

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/experiments", label: "Experiments" },
  { href: "/journey", label: "Journey" },
  { href: "/blog", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-panel/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-neon-cyan" />
              <span className="font-orbitron text-sm font-bold tracking-widest text-text-primary">
                KC
              </span>
            </div>
            <p className="text-text-muted text-sm leading-relaxed max-w-xs">
              Builder · Explorer · Engineer. Always curious, always building.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-text-muted hover:text-neon-cyan transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
              Connect
            </p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-neon-cyan transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Krishna Chittella. Built with Next.js.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-text-muted text-xs">Always shipping</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
