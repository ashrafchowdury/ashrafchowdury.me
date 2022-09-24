/** @type {import('next').NextConfig} */

//Adding the PWA feature
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
