import './globals.css';
import ProvidersWrapper from '@/providers/ProvidersWrapper';
import { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: t('homePageTitle'),
  };
}

type LayoutProps = {
  children: ReactNode;
};

function RootLayout({ children }: LayoutProps) {
  return <ProvidersWrapper>{children}</ProvidersWrapper>;
}

export default RootLayout;
