import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
      },
      {
        hostname: 'iobriachrojmsbsfnawp.supabase.co',
      },
      {
        hostname: 'pbs.twimg.com',
      },
    ],
  },
};

export default nextConfig;
