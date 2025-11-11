import type { NextConfig } from 'next';
import nextra from 'nextra';
import { version } from './package.json';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // mandatory, otherwise won't export
  },
  env: {
    APP_VERSION: version,
  },
  basePath: process.env.BASE_PATH,
  assetPrefix: "/fileserver/user-guide",
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
};

const withNextra = nextra({
  // ... Other Nextra config options
  unstable_shouldAddLocaleToLinks: true,
});

export default withNextra(nextConfig);
