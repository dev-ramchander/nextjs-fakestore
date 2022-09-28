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
      "i.imgur.com",
      "cdn.lorem.space",
      'placeimg.com',
      'images-cdn.9gag.com',
      'img-9gag-fun.9cache.com',
      'www.autofish.net',
      'dummyjson.com',
      'm.media-amazon.com',
      'media.istockphoto.com',
      'cdn.dribbble.com',
    ],
  },
};

module.exports = nextConfig;
