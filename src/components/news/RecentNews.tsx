'use client';

import NewsCard from '@/components/home/news/NewsCard';
import { ShowNewsEnum } from '@/enums/news.enums';
import { getNews } from '@/services/news.api';
import { useNewsSearchSlice } from '@/store/newsSearchSlice';
import { NewsResponseType } from '@/types/news.types';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import React from 'react';

const RecentNews = ({ initialData }: { initialData: NewsResponseType[] }) => {
  const { search } = useNewsSearchSlice();

  const { data: news, isFetching } = useQuery({
    queryKey: ['recentNews', search],
    queryFn: () => getNews(ShowNewsEnum.ALL, search),
    initialData,
  });

  const t = useTranslations();

  return (
    <section className="bg-white py-[48px] px-4">
      <div className="flex flex-col gap-[32px] container">
        {news.length && !isFetching ? (
          news.map((item) => <NewsCard key={item.id} news={item} />)
        ) : (
          <section className="container py-[34px]">
            <p className="text-center text-(--color-blue-primary)">
              {isFetching ? t('loading') : t('noResults')}
            </p>
          </section>
        )}
      </div>
    </section>
  );
};

export default RecentNews;
