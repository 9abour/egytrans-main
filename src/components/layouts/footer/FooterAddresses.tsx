import React from 'react';
import { LOCATION_ICON } from '../../../../assets/icons/common.icons';
import { useTranslations } from 'next-intl';
import { AddressResponseType } from '@/types/address.types';

const FooterAddresses = ({
  addresses,
}: {
  addresses: AddressResponseType[];
}) => {
  const t = useTranslations();

  if (addresses.length === 0) return null;

  return (
    <div className="w-full sm:max-w-[245px] mx-auto lg:mx-0">
      <h2 className="font-bold text-[20px] leading-[150%] tracking-normal text-(--color-blue-primary)">
        {t('address')}
      </h2>

      <ul className="flex flex-col gap-2 mt-2">
        {addresses.map((address, index) => (
          <li key={index}>
            <div className="flex gap-2 font-normal text-[14px] leading-none tracking-normal text-(--color-blue-primary) transition">
              {LOCATION_ICON} {address.Address}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterAddresses;
