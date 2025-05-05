'use client';

import BlueTitle from '@/components/common/BlueHeading';
import Image from 'next/image';
import React from 'react';
import arrow from '@public/Arrow-03.svg';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import ActiveSubBrand from '@/components/home/our-companies/ActiveSubBrand';
import { motion } from 'framer-motion';
import OurCompaniesCarousel from '@/components/home/our-companies/OurCompaniesCarousel';
import { useTranslations } from 'next-intl';
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';
import { OurCompaniesResponseType } from '@/types/our-companies.types';
import { useQuery } from '@tanstack/react-query';
import { getOurCompanies } from '@/services/our-companies.api';
import QueryHandler from '@/components/common/QueryHandler';
import getAdminImagePath from '@/utils/getAdminImagePath';

const OurCompanies = ({
  initialData,
}: {
  initialData: OurCompaniesResponseType[];
}) => {
  const currentLanguage = useCurrentLanguage();
  const [activeIndex, setActiveIndex] = React.useState(0);
  const t = useTranslations();
  const {
    data: ourCompaniesData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['ourCompanies'],
    queryFn: () => getOurCompanies(),
    initialData: { data: initialData },
  });

  const ourCompanies = ourCompaniesData?.data;

  return (
    <>
      <BlueTitle text={t('ourCompanies')} className="mt-[100px]" />

      <section className="container section-padding !py-[48px]">
        <QueryHandler isLoading={isLoading} isError={isError} error={error}>
          <div className="flex-jc-sb flex-ai-c">
            <motion.a
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              href={`${ourCompanies?.[activeIndex].Company_link}`}
            >
              <Image
                src={getAdminImagePath(
                  ourCompanies?.[activeIndex].Company_logo
                )}
                alt=""
                width={300}
                height={95}
                className="max-w-[150px] sm:max-w-[300px]"
              />
            </motion.a>

            <Link
              href={`${ourCompanies?.[activeIndex].Company_link}`}
              className="group"
            >
              <Image
                src={arrow}
                alt=""
                width={50}
                height={50}
                className={cn(
                  'max-w-[40px] sm:max-w-[50px] group-hover:translate-x-1 transition',
                  currentLanguage === 'ar'
                    ? 'rotate-180 group-hover:-translate-x-1'
                    : ''
                )}
              />
            </Link>
          </div>

          <ActiveSubBrand
            key={activeIndex}
            company={ourCompanies?.[activeIndex]}
          />

          <OurCompaniesCarousel
            ourCompanies={ourCompanies}
            changeActiveSubBrand={setActiveIndex}
          />
        </QueryHandler>
      </section>
    </>
  );
};

export default OurCompanies;
