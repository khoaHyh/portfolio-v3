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
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/mochajs/mocha/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/knex/documentation/**",
      },
    ],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default nextConfig;
