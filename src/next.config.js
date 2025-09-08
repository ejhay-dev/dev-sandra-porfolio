/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false
  },
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  trailingSlash: false,
  output: 'standalone'
}

module.exports = nextConfig