import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'gist.github.com',
      },
      {
        hostname: 'i.scdn.co',
      },
      { hostname: 'i.pinimg.com' },
    ],
  },
};

export default nextConfig;
