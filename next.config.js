/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    loader: 'default',
    path: '',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unavatar.io',
        pathname: '/twitter/**',
      },
    ],
  },
  transpilePackages: ['@privy-io/react-auth', '@privy-io/wagmi-connector'],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
  experimental: {
    turbo: false
  }
}

module.exports = nextConfig