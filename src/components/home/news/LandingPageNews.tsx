'use client';

import NewsTaps from '@/components/home/news/NewsTaps';
import React from 'react';
import ActiveNews from '@/components/home/news/ActiveNews';
import { motion } from 'framer-motion';
import { NewsResponseType } from '@/types/news.types';
import { useQuery } from '@tanstack/react-query';
import { getNews } from '@/services/news.api';
import getAdminImagePath from '@/utils/getAdminImagePath';
import QueryHandler from '@/components/common/QueryHandler';

const LandingPageNews = ({
  initialData,
}: {
  initialData: NewsResponseType[];
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const {
    data: news,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['news'],
    queryFn: () => getNews(),
    initialData,
  });

  return (
    <section className="relative w-full h-[732px]">
      <QueryHandler isLoading={isLoading} isError={isError} error={error}>
        {/* Gradient */}
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.2)] z-0"></div>
        <div className="absolute w-full h-[300px] bottom-0 left-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.3)] z-0"></div>

        {/* News Image */}
        <motion.div
          key={activeIndex + 'image'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute w-full h-full top-0 left-0 -z-10"
          style={{
            background: `url(${getAdminImagePath(
              news?.[activeIndex]?.Cover_image
            )})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        <NewsTaps
          currentTap={activeIndex}
          setCurrentTap={setActiveIndex}
          news={news}
        />

        <ActiveNews key={activeIndex + 'news'} news={news?.[activeIndex]} />
      </QueryHandler>
    </section>
  );
};

export default LandingPageNews;
