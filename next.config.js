/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placeimg.com","localhost:3000"],
	  unoptimized: true
  }
  
};
module.exports = nextConfig;