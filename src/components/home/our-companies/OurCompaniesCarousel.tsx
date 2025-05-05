import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import React from 'react';
import { OurCompaniesCarouselProps } from '@/components/home/our-companies/our-companies.types';
import { LONG_ARROW } from '../../../../assets/icons/common.icons';
import getAdminImagePath from '@/utils/getAdminImagePath';
import { useTranslations } from 'next-intl';
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';
import { cn } from '@/lib/utils';

const OurCompaniesCarousel = ({
  ourCompanies,
  changeActiveSubBrand,
}: OurCompaniesCarouselProps) => {
  if (!ourCompanies.length) return null;

  const t = useTranslations();
  const lang = useCurrentLanguage();

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      dir={'ltr'}
      className="overflow-hidden mx-[-24px] sm:mx-0"
    >
      <CarouselContent>
        {ourCompanies.map((company, index) => (
          <CarouselItem
            key={index}
            className="relative basis-[50%] md:basis-[35%] lg:basis-[25%] 2xl:basis-[20%] group h-[250px] flex"
          >
            <button
              onClick={() => changeActiveSubBrand(index)}
              className="w-full flex mt-auto"
            >
              <Image
                src={getAdminImagePath(company.Company_logo)}
                width={200}
                height={200}
                alt=""
                className="w-full rounded-[12px] h-full"
              />
            </button>

            <div className="absolute bg-white h-full w-full flex flex-col justify-end -bottom-4 group-hover:bottom-0 pr-4 min-h-fit text-[16px] leading-[140%] tracking-normal text-[#2D2D2D] mt-4 opacity-0 group-hover:opacity-100 transition ease-in-out duration-500">
              <Image
                src={getAdminImagePath(company.Company_logo)}
                width={200}
                height={200}
                alt=""
                className="w-full rounded-[12px] h-fit"
              />

              <p className="line-clamp-4 ">
                {ourCompanies?.[index]?.Company_description}
              </p>

              <a
                dir={lang === 'ar' ? 'rtl' : 'ltr'}
                href={ourCompanies?.[index]?.Company_link}
                className={cn(
                  'flex items-center gap-1 hover:gap-2 w-full bg-(--color-green-primary) text-white h-[40px] flex-ai-c justify-center mt-4 transition'
                )}
              >
                <span>{t('goTo')}</span>
                <span
                  className={cn({
                    '[&>svg]:rotate-180': lang === 'ar',
                  })}
                >
                  {LONG_ARROW}
                </span>
              </a>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default OurCompaniesCarousel;
