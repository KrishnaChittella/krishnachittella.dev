import type { Metadata } from "next";
import { notFound } from "next/navigation";

// Old site URLs, kept alive with a static redirect page (GitHub Pages has no server redirects).
const legacy: Record<string, string> = {
  projects: "/#work",
  experiments: "/playground",
  journey: "/#experience",
  journal: "/",
  blog: "/",
  contact: "/#contact",
  "beyond-code": "/playground/loadout",
};

export const dynamicParams = false;

export const metadata: Metadata = { robots: { index: false } };

export function generateStaticParams() {
  return Object.keys(legacy).map((legacy) => ({ legacy }));
}

export default async function Legacy({ params }: { params: Promise<{ legacy: string }> }) {
  const to = legacy[(await params).legacy];
  if (!to) notFound();
  return (
    <main className="mx-auto max-w-[40rem] px-5 py-24">
      <meta httpEquiv="refresh" content={`0; url=${to}`} />
      <p>
        This page moved. <a href={to} className="underline">Continue to the new page</a>.
      </p>
    </main>
  );
}
