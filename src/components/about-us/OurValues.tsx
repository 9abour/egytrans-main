import OurValuesItem from '@/components/about-us/OurValuesItem';
import { ValueResponseType } from '@/types/about-us.types';
import { useTranslations } from 'next-intl';
import React from 'react';

const OurValues = ({ values }: { values: ValueResponseType[] }) => {
  const t = useTranslations();

  return (
    <section className="relative bg-(--color-blue-primary) px-4 py-[52px] z-10">
      <div className="container">
        <h2 className="font-bold text-[32px] sm:text-[48px] leading-none tracking-normal text-white">
          {t('ourValues')}
        </h2>

        <div className="mt-[30px] grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {values.map((value) => (
            <OurValuesItem key={value.id} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
