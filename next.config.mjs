/** @type {import('next').NextConfig} */
const nextConfig = {
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
