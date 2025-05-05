'use client';

import { NewsTapsProps } from '@/components/home/news/news.types';
import NewsTapsItem from '@/components/home/news/NewsTapsItem';
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';
import { cn } from '@/lib/utils';
import React from 'react';

const NewsTaps = ({ currentTap, setCurrentTap, news }: NewsTapsProps) => {
  const currentLanguage = useCurrentLanguage();
  const count = news?.length >= 4 ? 4 : news?.length;

  if (news?.length < 2) return null;

  const onProgressFinish = (index: number) => {
    if (index + 1 === count) {
      setCurrentTap(0);
    } else {
      setCurrentTap(index + 1);
    }
  };

  return (
    <div className="absolute container !px-1 !py-0 left-2/4 -translate-x-2/4 h-[52px] top-4 sm:top-[38px] z-10">
      <div
        dir={currentLanguage !== 'ar' ? 'rtl' : 'ltr'}
        className={cn(
          'w-full h-full flex gap-1 sm:gap-4',
          currentLanguage === 'ar' ? 'flex-row' : 'flex-row-reverse'
        )}
      >
        {news.map((newsItem, index) => (
          <div key={index} className="w-full h-full text-white">
            <NewsTapsItem
              key={index}
              onProgressFinish={() => onProgressFinish(index)}
              changeNews={() => setCurrentTap(index)}
              currentTab={currentTap}
              index={index}
              news={newsItem}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTaps;
