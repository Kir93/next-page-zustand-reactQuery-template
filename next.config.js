const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    modularizeImports: {
      lodash: {
        transform: 'lodash/{{member}}',
      },
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp'],
  },

  webpack(config) {
    return config;
  },
});
