/** @type {import('next').NextConfig} */
const nextConfig = {

  // Optional: Trailing slashes help with static hosting routing
  trailingSlash: true,

  // Optional: Unoptimized images are required if using standard 'output: export' 
  // without a custom image loader
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;