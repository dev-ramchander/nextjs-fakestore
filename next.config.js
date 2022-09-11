/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "randomuser.me",
      "rickandmortyapi.com",
      "dummyimage.com",
      "api.lorem.space",
    ],
  },
};

module.exports = nextConfig;
