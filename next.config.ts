import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // To enable static export for GitHub Pages, uncomment the line below:
  // output: "export",
  images: {
    unoptimized: true, // required for static export
  },
};

export default nextConfig;
