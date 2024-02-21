/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/khoaHyh/twitter-clone-api/master/assets/**",
      },
    ],
  },
};

export default nextConfig;
