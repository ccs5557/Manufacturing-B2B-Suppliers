import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 100% static site → export pure HTML/CSS/JS to `out/`.
  // No server, no OpenNext, no Workers runtime needed.
  output: "export",
  // Static export can't run the on-demand image optimizer; our images are
  // already pre-optimized to WebP in public/images, so serve them as-is.
  images: { unoptimized: true },
};

export default nextConfig;
