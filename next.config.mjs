/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: "/black-Pearls",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
