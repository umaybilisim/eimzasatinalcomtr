/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  compiler: {
    removeConsole: true,
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
