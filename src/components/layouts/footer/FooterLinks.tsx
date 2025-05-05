import { FooterLinksColumnsProps } from '@/components/layouts/footer/footer.types';
import React from 'react';
import FooterLinksColumns from '@/components/layouts/footer/FooterLinksColumns';
import { useTranslations } from 'next-intl';

const FooterLinks = () => {
  const t = useTranslations();

  const links: FooterLinksColumnsProps[] = [
    {
      label: t('home'),
      links: [
        {
          href: '/about-us',
          label: t('about-us'),
        },
        {
          href: '/news',
          label: t('news'),
        },
        {
          href: '/industry',
          label: t('industry'),
        },
        {
          href: '/join-us',
          label: t('join'),
        },
      ],
    },
    {
      label: t('ourCompanies'),
      links: [
        {
          href: '/',
          label: 'Egytrans',
        },
        {
          href: '/',
          label: 'EDS',
        },
        {
          href: '/',
          label: 'EAS',
        },
        {
          href: '/',
          label: 'NOSCO',
        },
        {
          href: '/',
          label: 'EGYTRANS ARABIA',
        },
      ],
    },
  ];

  return (
    <>
      {links.map((link, index) => (
        <FooterLinksColumns key={index} label={link.label} links={link.links} />
      ))}
    </>
  );
};

export default FooterLinks;
