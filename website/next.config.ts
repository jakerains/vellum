import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // This Next.js app lives inside the Vellum repository. Keep Turbopack scoped to
  // this folder instead of inferring the parent package-lock.json as its root.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
