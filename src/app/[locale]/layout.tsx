import '@/styles/fonts.css';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import ProvidersWrapper from '@/providers/ProvidersWrapper';
import Navbar from '@/components/layouts/navbar/Navbar';
import Footer from '@/components/layouts/footer/Footer';
import { Toaster } from 'react-hot-toast';
import { globalStyles } from '@/styles/global.styles';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <style>{globalStyles(locale)}</style>
      </head>
      <body
        style={{
          fontFamily:
            locale === 'ar'
              ? 'Tajawal, sans-serif'
              : 'Neue Montreal, sans-serif',
        }}
      >
        <NextIntlClientProvider messages={messages}>
          <Toaster position="bottom-right" />
          <Navbar />
          <ProvidersWrapper>{children}</ProvidersWrapper>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
