import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    domains: ['main.et.wecodeforyou.io'],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
