'use client';

import ButtonText from '@/components/common/ButtonText';
import Logo from '@/components/common/Logo';
import LanguageSwitcherButton from '@/components/layouts/navbar/LanguageSwitcherButton';
import NavbarLinks from '@/components/layouts/navbar/NavbarLinks';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import useToggle from '@/hooks/useToggle';
import { usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { MenuIcon, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useEffect, useRef } from 'react';
const Navbar = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const { currentState: isOpen, toggle: toggleMenu } = useToggle(false);

  const handleCloseMenu = () => isOpen && toggleMenu();

  useOnClickOutside(containerRef, () => handleCloseMenu());

  useEffect(() => {
    if (isOpen) toggleMenu();
  }, [pathname]);

  return (
    <nav
      ref={containerRef}
      className="fixed !w-[calc(100%-32px)] lg:w-full top-4 sm:top-[38px] left-2/4 -translate-x-2/4 container h-[71px] bg-white/90 rounded-[14px] flex-jc-sb flex-ai-c px-4 navbar-shadow z-[99]"
    >
      <Logo />

      <NavbarLinks isOpen={isOpen} />

      <div className="flex-ai-c gap-[12px] sm:gap-[24px]">
        <LanguageSwitcherButton />
        <ButtonText
          text={t('getQuote')}
          href={'/get-quote'}
          internal
          className="!hidden sm:!flex justify-center items-center"
        />

        <button className="relative w-[30px] h-[30px] flex-ai-c flex-jc-c sm:!hidden text-(--color-blue-primary) hover:!text-(--color-green-primary)">
          <MenuIcon
            onClick={toggleMenu}
            className={cn(
              'transition absolute left-0',
              !isOpen ? 'opacity-100' : 'opacity-0'
            )}
            size={25}
          />
          <X
            onClick={toggleMenu}
            className={cn(
              'transition absolute left-0',
              isOpen ? 'opacity-100' : 'opacity-0'
            )}
            size={25}
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
