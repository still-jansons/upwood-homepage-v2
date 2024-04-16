/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "lv"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
      },
    ],
  },
};

module.exports = nextConfig;
