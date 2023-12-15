/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  i18n: {
    locales: ["en-US", "ja-JP"],
    defaultLocale: "en-US",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
