'use client';

import { FooterResponseType } from '@/types/footer.types';
import { useQuery } from '@tanstack/react-query';
import FooterAddresses from '@/components/layouts/footer/FooterAddresses';
import FooterContact from '@/components/layouts/footer/FooterContact';
import FooterLinks from '@/components/layouts/footer/FooterLinks';
import FooterLogo from '@/components/layouts/footer/FooterLogo';
import FooterNumbers from '@/components/layouts/footer/FooterNumbers';
import LogisticsFooter from '@/components/layouts/footer/LogisticsFooter';
import { getFooter } from '@/services/footer.api';
import { useTranslations } from 'next-intl';
import React from 'react';
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';
import { AddressResponseType } from '@/types/address.types';

const FooterClient = ({
  initialData,
  addresses,
}: {
  initialData: FooterResponseType;
  addresses: AddressResponseType[];
}) => {
  const t = useTranslations();
  const currentLanguage = useCurrentLanguage();

  const { data: footerData } = useQuery({
    queryKey: ['footer'],
    queryFn: () => getFooter(),
    initialData: { data: initialData },
  });

  const footer = footerData?.data;

  return (
    <footer>
      <LogisticsFooter />

      <div className="grid justify-between grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-[24px] p-[24px] container">
        <FooterLogo />

        <FooterLinks />

        <FooterAddresses addresses={addresses} />

        <FooterNumbers numbers={footer?.Numbers} />
      </div>

      <FooterContact socials={footer?.Socials} />

      <hr className="pt-[12px] border-t border-(--color-blue-primary)" />

      <p
        dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
        className="font-medium text-[16px] leading-[150%] tracking-normal text-(--color-blue-primary) text-center pb-[12px] container"
      >
        © {new Date().getFullYear()} Egytrans . {t('allRightsReserved')}
      </p>
    </footer>
  );
};

export default FooterClient;
