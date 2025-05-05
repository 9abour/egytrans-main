import NavbarLink from '@/components/layouts/navbar/NavbarLink';
import { usePathname } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ButtonText from '@/components/common/ButtonText';

const NavbarLinks = ({ isOpen }: { isOpen: boolean }) => {
  const pathname = usePathname();
  const t = useTranslations();

  const isActive = (path: string) => pathname.includes(path);

  return (
    <>
      <div className={'flex-ai-c gap-[24px] !hidden sm:!flex'}>
        <NavbarLink
          href="/"
          name={t('home')}
          isActive={isActive('/') && pathname === '/'}
        />
        <NavbarLink
          href="/about-us"
          name={t('about-us')}
          isActive={isActive('/about-us')}
        />
        <NavbarLink
          href="/news"
          name={t('news')}
          isActive={isActive('/news')}
        />
        <NavbarLink
          href="/join-us"
          name={t('joinUs')}
          isActive={isActive('/join-us')}
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className={
              'absolute flex sm:hidden flex-col gap-[24px] top-[81px] bg-white/90 navbar-shadow w-full left-0 rounded-[14px] py-[24px] px-[32px]'
            }
          >
            <NavbarLink
              href="/"
              name={t('home')}
              isActive={isActive('/') && pathname === '/'}
            />
            <NavbarLink
              href="/about-us"
              name={t('about-us')}
              isActive={isActive('/about-us')}
            />
            <NavbarLink
              href="/news"
              name={t('news')}
              isActive={isActive('/news')}
            />
            <NavbarLink
              href="/join-us"
              name={t('joinUs')}
              isActive={isActive('/join-us')}
            />
            <ButtonText text={t('getQuote')} href={'/get-quote'} internal />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarLinks;
