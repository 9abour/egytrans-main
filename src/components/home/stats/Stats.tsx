'use client';

import CustomCountUp from '@/components/home/stats/CustomCountUp';
import { getStats } from '@/services/stats.api';
import { StatsResponseType } from '@/types/stats.types';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import React from 'react';

const Stats = ({ initialData }: { initialData: StatsResponseType }) => {
  const t = useTranslations('stats');

  const { data: statsData } = useQuery({
    queryKey: ['stats'],
    queryFn: getStats,
    initialData: { data: initialData },
  });

  const stats = statsData?.data;

  return (
    <section className="min-h-[167px] bg-(--color-blue-primary) section-padding !pt-0 pb-[48px] xl:!py-0">
      <div className="container flex flex-wrap gap-[93px] justify-between px-4">
        <div className="w-fit flex justify-center items-center flex-col gap-2">
          <span className="block font-bold text-[36px] sm:text-[96px] leading-none tracking-normal text-white">
            <CustomCountUp start={0} end={stats.Companies} duration={2} />
          </span>
          <p className="font-bold text-[14px] sm:text-[16px] leading-none tracking-normal text-center text-white">
            {t('companies')}
          </p>
        </div>
        <div className="w-fit flex justify-center items-center flex-col gap-2">
          <span className="block font-bold text-[36px] sm:text-[96px] leading-none tracking-normal text-white">
            <CustomCountUp start={0} end={stats.Partners} duration={2} />
          </span>
          <p className="font-bold text-[14px] sm:text-[16px] leading-none tracking-normal text-center text-white">
            {t('partners')}
          </p>
        </div>
        <div className="w-fit flex justify-center items-center flex-col gap-2">
          <span className="block font-bold text-[36px] sm:text-[96px] leading-none tracking-normal text-white">
            <CustomCountUp start={0} end={stats.Regions} duration={2} />
          </span>
          <p className="font-bold text-[14px] sm:text-[16px] leading-none tracking-normal text-center text-white">
            {t('regions')}
          </p>
        </div>
        <div className="w-fit flex justify-center items-center flex-col gap-2">
          <span className="block font-bold text-[36px] sm:text-[96px] leading-none tracking-normal text-white">
            <CustomCountUp start={0} end={stats.Employees} duration={2} />
          </span>
          <p className="font-bold text-[14px] sm:text-[16px] leading-none tracking-normal text-center text-white">
            {t('employees')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
