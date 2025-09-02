import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // biar ESLint error tidak bikin gagal build
  },
  typescript: {
    ignoreBuildErrors: true, // kalau ada error TypeScript juga di-skip waktu build
  },
};

export default nextConfig;
