/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    // ignoreDuringBuilds: true,
  },
  env: {
    NEXTAUTH_SECRET: 'milkmidi',
  },
};

module.exports = nextConfig;
