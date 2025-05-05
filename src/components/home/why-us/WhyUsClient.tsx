'use client';

import { Link } from '@/i18n/navigation';
import React from 'react';
import { LONG_ARROW } from '../../../../assets/icons/common.icons';
import WhyUsServiceCard from '@/components/home/why-us/WhyUsServiceCard';
import { cn } from '@/utils/cn';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { useQuery } from '@tanstack/react-query';
import { getWhyUs } from '@/services/why-us.api';
import QueryHandler from '@/components/common/QueryHandler';
import { useTranslations } from 'next-intl';
import { WhyUsResponseType } from '@/types/why-us.types';
import getAdminImagePath from '@/utils/getAdminImagePath';

const WhyUsClient = ({
  currentLanguage,
  initialData,
}: {
  currentLanguage: string;
  initialData: WhyUsResponseType[];
}) => {
  const t = useTranslations();

  const {
    data: whyUsData,
    isLoading,
    isError,
    error,
  }: {
    data: { data: WhyUsResponseType[] };
    isLoading: boolean;
    isError: boolean;
    error: Error | null;
  } = useQuery({
    queryKey: ['why-us'],
    queryFn: getWhyUs,
    initialData: { data: initialData },
  });

  const whyUs = whyUsData?.data;

  return (
    <section className="container section-padding">
      <p className="font-medium text-[24px] leading-[140%] tracking-normal text-black">
        {t('whyChooseUs')}
      </p>

      <div className="flex mt-[48px] flex-col sm:flex-row gap-4">
        <h1 className="main-title">{t('whyChooseUsPageTitle')}</h1>
        <Link
          href="/about-us"
          dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
          className="min-w-[116px] flex-ai-c gap-2 text-(--color-green-primary) mt-auto group"
        >
          <p className="font-medium text-[16px] leading-none tracking-normal">
            {t('seeMore')}
          </p>
          <span
            className={cn(
              'group-hover:translate-x-1 transition',
              currentLanguage === 'ar'
                ? 'rotate-180 group-hover:-translate-x-1'
                : ''
            )}
          >
            {LONG_ARROW}
          </span>
        </Link>
      </div>

      <QueryHandler isLoading={isLoading} isError={isError} error={error}>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          dir={'ltr'}
          className="mt-[48px] mx-[-24px] sm:mx-0"
        >
          <CarouselContent>
            {whyUs?.map((item, index: number) => (
              <CarouselItem
                key={index}
                className="basis-[60%] sm:basis-[50%] md:basis-[35%] lg:basis-[25%] 2xl:basis-[20%]"
              >
                <WhyUsServiceCard
                  title={item.Title}
                  icons={{
                    blue: getAdminImagePath(item.Image_blue, 'medium'),
                    white: getAdminImagePath(item.Image_white, 'medium'),
                  }}
                  description={item.Description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </QueryHandler>

      <div className="mt-[48px]"></div>
    </section>
  );
};

export default WhyUsClient;
