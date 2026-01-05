/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/proger2026true',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
