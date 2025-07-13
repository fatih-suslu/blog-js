/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://picsum.photos/id/1/200/300")],
  },
};

export default nextConfig;
