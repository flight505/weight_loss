/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    domains: [],
    unoptimized: true
  },
  experimental: {
    optimizeCss: false
  }
}

module.exports = nextConfig 