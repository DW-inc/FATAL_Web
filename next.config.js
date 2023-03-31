const plugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withFonts = require('next-fonts')

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    emotion: true,
  },

  images: {
    unoptimized: true,
  },
}

module.exports = plugins([withFonts, withBundleAnalyzer], {
  ...nextConfig,
})
