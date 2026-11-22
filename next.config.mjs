/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/coin-flip',
        destination: '/',
        permanent: true,
      },
      {
        source: '/flip-a-coin',
        destination: '/',
        permanent: true,
      },
      {
        source: '/virtual-coin-flip',
        destination: '/',
        permanent: true,
      },
      {
        source: '/heads-or-tails',
        destination: '/',
        permanent: true,
      },
      {
        source: '/coin-flip-online',
        destination: '/',
        permanent: true,
      },
      {
        source: '/random-coin-flip',
        destination: '/',
        permanent: true,
      },
      {
        source: '/coin-flip-simulator',
        destination: '/coin-flip-experiment',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
