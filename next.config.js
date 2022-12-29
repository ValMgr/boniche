/* eslint-disable */
/** @type {import('next').NextConfig} */
const path = require('path');
const {
  i18n
} = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack5: true,
  compress: true,
  poweredByHeader: false,
  i18n,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
/* eslint-enable */