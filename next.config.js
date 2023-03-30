const plugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withFonts = require('next-fonts')

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    // ssr and displayName are configured by default
    emotion: true,
  },
  webpack(config, { isServer }) {
    // shader support
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: ['raw-loader', 'glslify-loader'],
    })

    return config
  },
}

// manage i18n
if (process.env.EXPORT !== 'true') {
  nextConfig.i18n = {
    locales: ['en-US', 'ko-KR'],
    defaultLocale: 'ko-KR', // Set the default locale to 'Korean'
  }
}

module.exports = plugins([withFonts, withBundleAnalyzer], nextConfig)
