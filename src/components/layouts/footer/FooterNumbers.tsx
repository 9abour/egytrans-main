import React from 'react';
import { PHONE_ICON } from '../../../../assets/icons/common.icons';
import { useTranslations } from 'next-intl';
import { FooterResponseType } from '@/types/footer.types';

const FooterNumbers = ({
  numbers,
}: {
  numbers: FooterResponseType['Numbers'];
}) => {
  const t = useTranslations();

  if (numbers.length === 0) return null;

  return (
    <div className="w-full sm:max-w-[245px] mx-auto lg:mx-0">
      <h2 className="font-bold text-[20px] leading-[150%] tracking-normal text-(--color-blue-primary)">
        {t('numbers')}
      </h2>

      <ul className="flex flex-col gap-2 mt-2">
        {numbers.map((number) => (
          <li key={number.id}>
            <div className="flex gap-2 font-normal text-[14px] leading-none tracking-normal text-(--color-blue-primary) transition">
              {PHONE_ICON} {number.number}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNumbers;
