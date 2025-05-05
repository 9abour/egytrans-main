'use client';

import { usePathname } from 'next/navigation';

export const useCurrentLanguage = (): 'en' | 'ar' => {
  const pathname = usePathname();

  const currentLocale: string = pathname.split('/')[1];

  return currentLocale as 'ar' | 'en';
};
