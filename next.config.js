/** @type {import('next').NextConfig} */
const nextConfig = {
 // output: 'export',
  trailingSlash: true,
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
    domains: ['images.pexels.com'],
    loader: 'default'
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;