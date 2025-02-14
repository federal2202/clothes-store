import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["pbs.twimg.com", 'assets.aceternity.com'], // Allow images from Twitter
  },
};

export default nextConfig;
