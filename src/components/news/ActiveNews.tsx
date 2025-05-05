'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { NewsResponseType } from '@/types/news.types';
import getAdminImagePath from '@/utils/getAdminImagePath';
import { Link } from '@/i18n/navigation';
const ActiveNews = ({ activeNews }: { activeNews: NewsResponseType }) => {
  return (
    <section className="w-full bg-white p-4 md:pb-4 !pb-[48px] sm:!pb-[100px]">
      <Link
        href={`/news/${activeNews.documentId}`}
        className="relative container h-[400px] md:h-[642px] flex group"
      >
        {/* Gradient */}
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)] z-10"></div>
        <div className="absolute w-full h-[300px] bottom-0 left-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.5)] z-10"></div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute w-full h-full top-0 left-0"
          style={{
            background: `url(${getAdminImagePath(activeNews.Cover_image)})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2, ease: 'easeIn' } }}
          className="relative h-full text-white container p-4 md:p-[45px] flex flex-col gap-4 justify-end z-20"
        >
          <h2 className="max-w-[627px] font-bold text-[40px] sm:text-[56.13px] leading-none tracking-normal group-hover:underline">
            {activeNews.Title}
          </h2>
          <p className="max-w-[627px] font-medium text-[16px] sm:text-[21.05px] leading-none tracking-normal line-clamp-4">
            {activeNews.Description}
          </p>
        </motion.div>
      </Link>
    </section>
  );
};

export default ActiveNews;
