import Image from 'next/image';
import React from 'react';
import careerImage from '@public/Frame 264.png';
import { useTranslations } from 'next-intl';

const Career = ({ currentLanguage }: { currentLanguage: string }) => {
  const t = useTranslations();

  return (
    <section className="bg-(--color-light-gray) section-padding pb-[48px] sm:pb-[100px]">
      <div className="container flex flex-col lg:flex-row justify-baseline gap-[32px] lg:gap-[64px]">
        <Image
          src={careerImage}
          alt=""
          width={571}
          height={463}
          className="w-full md:w-[471px] xl:w-[571px] mx-auto h-[363px] xl:h-[463px] object-cover rounded-2xl"
        />

        <div className="flex flex-col gap-[24px]">
          <span className="font-medium text-[24px] leading-[140%] tracking-normal text-black">
            {t('career')}
          </span>
          <h2 className="font-bold text-[40px] xl:text-[64px] leading-[84%] tracking-normal text-(--color-green-primary)">
            {t('careerTitle')}
          </h2>
          <p className="font-medium text-[16px] leading-[140%] tracking-normal">
            {t('careerDescription')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;
