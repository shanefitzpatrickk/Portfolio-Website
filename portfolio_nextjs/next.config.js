/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable experimental features
  experimental: {
    // Removed turbo setting as it's causing a warning
  },
  // Ensure CSS imports work correctly
  sassOptions: {
    includePaths: ['./app'],
  },
  images: {
    domains: ['cdnjs.cloudflare.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdnjs.cloudflare.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig; 