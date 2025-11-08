import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Recommended for catching potential issues

  // ✅ Disable ESLint errors from blocking production builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Optional: Add other Next.js configurations
  images: {
    domains: ["example.com"], // replace with your image domains
  },

  // Optional: Enable SWC minification for faster builds
  swcMinify: true,
};

export default nextConfig;
