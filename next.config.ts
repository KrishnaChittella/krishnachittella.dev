import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // next/image optimisation is not available in static export
  },
  // No basePath needed — custom domain (krishnachittella.dev) serves from root
};

export default nextConfig;
