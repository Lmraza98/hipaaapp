/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  productionBrowserSourceMaps: true,
  swcMinify: true,
  poweredByHeader: false
};

module.exports = nextConfig; 