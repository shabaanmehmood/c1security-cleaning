/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  serverExternalPackages: [
    "firebase-admin",
    "jwks-rsa",
    "jose",
  ],
};
export default nextConfig;