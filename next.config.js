/** @type {import('next').NextConfig} */

const nextConfig = {
  // and the following to enable top-level await support for Webpack

  images: {
    domains: ['images.pexels.com', 'a.storyblok.com'],
  },
};

module.exports = nextConfig;
