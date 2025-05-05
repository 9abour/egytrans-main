import BlueTitle from '@/components/common/BlueHeading';
import GetQuoteForm from '@/components/get-quote/GetQuoteForm';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: t('getQuotePageTitle'),
  };
}

const page = async () => {
  const t = await getTranslations();

  return (
    <main className="relative bg-(--color-blue-primary) section-padding !px-0 mb-[34px] z-10">
      <section className="mt-[34px] sm:mt-0 bg-white z-10">
        <BlueTitle text={t('getQuote')} />

        <GetQuoteForm />
      </section>
    </main>
  );
};

export default page;
