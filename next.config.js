/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion'],
  },
  webpack: (config) => {
    config.optimization.minimize = true;
    return config;
  },
};

module.exports = nextConfig;
