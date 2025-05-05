'use client';

import React from 'react';

import useToggle from '@/hooks/useToggle';
import AnimatedMenu from '@/components/animations-wrappers/AnimatedMenu';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import LanguageButton from '@/components/layouts/navbar/LanguageButton';
import {
  ARABIC_FLAG,
  ARROW_ICON,
  ENGLISH_FLAG,
} from '../../../../assets/icons/common.icons';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

const LanguageSwitcherButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { currentState: isOpen, toggle } = useToggle(false);

  const switcherLanguages = useTranslations('switcherLanguages');

  const currentLocale: string = pathname.split('/')[1];

  const switchLanguage = (newLocale: 'en' | 'ar') => {
    const currentLocale = pathname.split('/')[1];
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  useOnClickOutside(containerRef, () => isOpen && toggle());

  return (
    <div
      onClick={toggle}
      ref={containerRef}
      className="relative flex-ai-c gap-[2px] text-[#253B80] z-10 cursor-pointer"
    >
      <span className="font-medium text-[16px] leading-[24px] tracking-normal flex-ai-c gap-2 capitalize">
        {currentLocale === 'en' ? ENGLISH_FLAG : ARABIC_FLAG}
        {switcherLanguages(currentLocale)}
      </span>
      <span className={`${isOpen ? 'rotate-180' : ''} transition`}>
        {ARROW_ICON}
      </span>

      <AnimatedMenu
        isOpen={isOpen}
        from="top"
        className="absolute top-[60px] right-0 bg-white/50 navbar-shadow backdrop-blur-2xl rounded-[14px] z-0 overflow-hidden"
      >
        <LanguageButton
          name={switcherLanguages('en')}
          icon={ENGLISH_FLAG}
          isActive={currentLocale === 'en'}
          onClick={() => switchLanguage('en')}
        />
        <LanguageButton
          name={switcherLanguages('ar')}
          icon={ARABIC_FLAG}
          isActive={currentLocale === 'ar'}
          onClick={() => switchLanguage('ar')}
        />
      </AnimatedMenu>
    </div>
  );
};

export default LanguageSwitcherButton;
