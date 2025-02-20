import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  images: {
    domains: ["cdsassets.apple.com"],
  },
};

export default nextConfig;
