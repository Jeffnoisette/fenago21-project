/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Temporarily disable for deployment
  eslint: {
    ignoreDuringBuilds: true, // Skip ESLint during build
  },
  typescript: {
    ignoreBuildErrors: true, // Skip TypeScript errors during build
  },
  // Remove static export to enable API routes for Netlify
  // output: 'export', 
  // trailingSlash: true,
  // distDir: 'out',
  images: {
    unoptimized: true,
    domains: [
      // NextJS <Image> component needs to whitelist domains for src={}
      "lh3.googleusercontent.com",
      "pbs.twimg.com",
      "images.unsplash.com",
      "logos-world.net",
    ],
  },
};

module.exports = nextConfig;
