import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  ...(isGitHubPages
    ? {
      output: "export",
      images: { unoptimized: true },
      trailingSlash: true,
    }
    : {}),
};

export default nextConfig;
