/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "peqwlppfbyknhzenqdpb.supabase.co",
      },
    ],
  },
};

export default nextConfig;
