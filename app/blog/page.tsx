"use client";

// /blog → /journal (client-side redirect, compatible with static export)
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlogRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/journal");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <p className="font-orbitron text-sm text-text-muted tracking-wider">
        Redirecting to Journal...
      </p>
    </div>
  );
}
