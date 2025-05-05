'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsResponseType } from '@/types/news.types';
import { FooterResponseType } from '@/types/footer.types';
import { MEDIUM_LONG_ARROW } from '../../../assets/icons/common.icons';
import { socialsIcons } from '@/constants/socialsIcons.constants';
import getAdminImagePath from '@/utils/getAdminImagePath';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useNewsDetailsMedia } from '@/components/news/hooks/useNewsDetailsMedia';
import { useTranslations } from 'next-intl';
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';

const NewsDetailsMedia = ({
  news,
  socials,
}: {
  news: NewsResponseType;
  socials: FooterResponseType['Socials'];
}) => {
  const { activeIndex, handleNext, handlePrev, setActiveIndex } =
    useNewsDetailsMedia(news);

  const t = useTranslations();

  const lang = useCurrentLanguage();

  return (
    <>
      <div className="mt-4 flex-jc-sb sm:flex-ai-c flex-col sm:flex-row items-start">
        <div className="flex items-center gap-4">
          <span className="font-medium text-[13px] sm:text-[16px] leading-[140%] tracking-normal text-center text-(--color-blue-primary)">
            {t('readItOnOurPlatforms')}
          </span>

          <div className="flex gap-2 [&>a]:w-[28px] [&>a]:h-[28px] font-bold [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:text-(--color-blue-primary) [&>a]:rounded-sm [&>a]:hover:bg-(--color-blue-primary) [&>a]:hover:text-white [&>a]:transition">
            {socials?.map((social) => (
              <Link key={social.id} href={social.Url} target="_blank">
                {socialsIcons[social.Platform]}
              </Link>
            ))}
          </div>
        </div>

        {/* Controls */}
        {news.Media.length > 1 ? (
          <div
            className={cn(
              'flex-ai-c gap-2 mt-4 sm:mt-0',
              lang === 'ar' ? 'mr-auto' : 'ml-auto'
            )}
          >
            <button
              onClick={handlePrev}
              className={cn(
                'w-[24px] h-[24px] [&>svg]:w-[16px] [&>svg]:h-[12px] bg-[#F1F1F1] text-(--color-green-primary) hover:bg-(--color-green-primary) hover:text-white rounded-full flex-jc-ai-c transition',
                lang === 'ar' && 'rotate-180'
              )}
              disabled={activeIndex === 0}
            >
              {MEDIUM_LONG_ARROW}
            </button>
            {/* Carousel Dots */}
            <div className="flex gap-2">
              {news.Media.map((media, index) => (
                <button
                  key={media.id}
                  onClick={() => setActiveIndex(index)}
                  className="max-w-[16px] w-[16px] max-h-[16px] h-[16px] flex-jc-ai-c"
                >
                  <span
                    className={cn(
                      'min-w-[5.07px] w-[5.07px] min-h-[5.07px] h-[5.07px] flex rounded-full bg-[#808080]',
                      activeIndex === index && 'bg-(--color-green-primary)'
                    )}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={activeIndex === news.Media.length - 1}
              className={cn(
                'w-[24px] h-[24px] [&>svg]:w-[16px] [&>svg]:h-[12px] bg-[#F1F1F1] text-(--color-green-primary) hover:bg-(--color-green-primary) hover:text-white rounded-full flex-jc-ai-c rotate-180 transition',
                lang === 'ar' && 'rotate-0'
              )}
            >
              {MEDIUM_LONG_ARROW}
            </button>
          </div>
        ) : null}
      </div>

      {/* News Media Carousel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={activeIndex}
        className="mt-6"
      >
        <Image
          width={800}
          height={800}
          className="w-full max-h-[514px] rounded-[7px] object-cover"
          src={getAdminImagePath(news.Media[activeIndex])}
          alt="news-media-carousel"
        />
      </motion.div>
    </>
  );
};

export default NewsDetailsMedia;
