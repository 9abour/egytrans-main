import ButtonText from '@/components/common/ButtonText';
import React from 'react';
import { motion } from 'framer-motion';
import { NewsResponseType } from '@/types/news.types';
import { useTranslations } from 'next-intl';

const ActiveNews = ({ news }: { news: NewsResponseType }) => {
  const t = useTranslations();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, ease: 'easeIn' } }}
      className="relative h-full text-white container section-padding flex flex-col gap-4 justify-end pb-[66px]"
    >
      <span className="font-medium text-[13.14px] leading-[140%] tracking-normal">
        {news.Topic}
      </span>
      <h2 className="font-bold text-[40px] sm:text-[64px] leading-none tracking-normal">
        {news.Title}
      </h2>
      <p className="font-medium text-[16px] sm:text-[24px] leading-none tracking-normal">
        {news.Description}
      </p>
      <ButtonText
        text={t('learnMore')}
        href={`/news/${news.documentId}`}
        internal
        className="bg-(--color-green-primary) hover:bg-(--color-green-primary)/80 hover:text-white"
      />
    </motion.div>
  );
};

export default ActiveNews;
