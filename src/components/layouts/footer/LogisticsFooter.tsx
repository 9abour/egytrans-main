import { useTranslations } from 'next-intl';
import React from 'react';

const LogisticsFooter = () => {
  const t = useTranslations();

  return (
    <div className="h-[60px] sm:h-[100px] flex-ai-c bg-(--color-blue-primary)">
      <h1 className="container font-bold text-[24px] sm:text-[48px] leading-none tracking-normal text-white px-4">
        {t('logisticsFooter')}
      </h1>
    </div>
  );
};

export default LogisticsFooter;
