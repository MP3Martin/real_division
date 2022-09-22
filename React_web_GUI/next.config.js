/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true,
    }
    return config
  },
  // future: {
  //   webpack5: true,
  // },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
