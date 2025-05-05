import CustomCountUp from '@/components/home/stats/CustomCountUp';
import { getStats } from '@/services/stats.api';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const Stats = async () => {
  const t = await getTranslations();
  const tStats = await getTranslations('stats');

  const statsData = await getStats();
  const stats = statsData?.data;

  return (
    <section className="relative min-h-[167px] bg-white px-4 md:px-[48px] !pt-0 pb-[48px] xl:!py-0 z-10">
      <div className="max-w-[1329px] mx-auto py-[48px] sm:py-[88px] px-4 lg:px-[130px] bg-(--color-blue-primary) rounded-[14px] flex flex-col justify-center items-center gap-[48px]">
        <h3 className="font-bold text-[24px] sm:text-[48px] leading-none tracking-normal text-center text-white">
          {t('Let’sTalkNumbers')}
        </h3>

        <div className="flex flex-wrap gap-8 sm:gap-[93px] justify-center xl:justify-between">
          <div className="w-fit flex justify-center items-center flex-col gap-4">
            <span className="block font-bold text-[24px] sm:text-[48px] leading-none tracking-normal text-white">
              <CustomCountUp start={0} end={stats.Companies} duration={2} />{' '}
            </span>
            <p className="font-bold text-[14px] sm:text-[16px] leading-none tracking-normal text-center text-white">
              {tStats('companies')}
            </p>
          </div>
          <div className="w-fit flex justify-center items-center flex-col gap-4">
            <span className="block font-bold text-[24px] sm:text-[48px] leading-none tracking-normal text-white">
              <CustomCountUp start={0} end={stats.Partners} duration={2} />
            </span>
            <p className="font-bold text-[14px] sm:text-[16px] leading-none tracking-normal text-center text-white">
              {tStats('partners')}
            </p>
          </div>
          <div className="w-fit flex justify-center items-center flex-col gap-4">
            <span className="block font-bold text-[24px] sm:text-[48px] leading-none tracking-normal text-white">
              <CustomCountUp start={0} end={stats.Regions} duration={2} />
            </span>
            <p className="font-bold text-[14px] sm:text-[16px] leading-none tracking-normal text-center text-white">
              {tStats('regions')}
            </p>
          </div>
          <div className="w-fit flex justify-center items-center flex-col gap-4">
            <span className="block font-bold text-[24px] sm:text-[48px] leading-none tracking-normal text-white">
              <CustomCountUp start={0} end={stats.Employees} duration={2} />
            </span>
            <p className="font-bold text-[14px] sm:text-[16px] leading-none tracking-normal text-center text-white">
              {tStats('employees')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
