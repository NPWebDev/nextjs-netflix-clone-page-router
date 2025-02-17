/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", port: "" },
      { protocol: "https", hostname: "i.ytimg.com", port: "" },
      { protocol: "https", hostname: "yt3.ggpht.com", port: "" },
    ],
  },
};

module.exports = nextConfig;
