/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
        // by next.js will be dropped. Doesn't make much sense, but how it is
      "fs/promises": false, // the solution
    };

    return config;
  },
  reactStrictMode: false
}

module.exports = nextConfig
