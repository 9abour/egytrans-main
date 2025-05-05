import BlueTitle from '@/components/common/BlueHeading';
import JoinUsForm from '@/components/join-us/JoinUsForm';
import React from 'react';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: t('joinUsPageTitle'),
  };
}

const page = async () => {
  const t = await getTranslations();

  return (
    <main className="relative bg-(--color-blue-primary) section-padding !px-0 mb-[34px] z-10">
      <section className="mt-[34px] sm:mt-0 bg-white z-10">
        <BlueTitle text={t('joinUs')} />

        <JoinUsForm />
      </section>
    </main>
  );
};

export default page;
