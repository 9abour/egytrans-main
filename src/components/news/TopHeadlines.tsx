'use client';

import SearchForm from '@/components/common/SearchForm';
import ActiveNews from '@/components/news/ActiveNews';
import { ShowNewsEnum } from '@/enums/news.enums';
import { getNews } from '@/services/news.api';
import { useNewsSearchSlice } from '@/store/newsSearchSlice';
import { NewsResponseType } from '@/types/news.types';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import React from 'react';

const TopHeadlines = ({ initialData }: { initialData: NewsResponseType[] }) => {
  const t = useTranslations();

  const { search } = useNewsSearchSlice();

  const { data: topHeadlinesNews, isFetching } = useQuery({
    queryKey: ['topHeadlinesNews', search],
    queryFn: () => getNews(ShowNewsEnum.TOP_HEADLINE, search),
    initialData,
  });

  return (
    <>
      <section className="bg-white py-[34px] px-4">
        <div className="container flex-jc-sb flex-ai-c flex-col md:flex-row">
          <h2 className="container font-bold text-[48px] leading-none tracking-normal text-(--color-green-primary)">
            {t('topHeadlines')}
          </h2>

          <SearchForm />
        </div>
      </section>

      {topHeadlinesNews.length && !isFetching ? (
        <ActiveNews activeNews={topHeadlinesNews[0]} />
      ) : (
        <section className="py-[34px] bg-white">
          <p className="text-center text-(--color-blue-primary) py-[48px]">
            {isFetching ? t('loading') : t('noResults')}
          </p>
        </section>
      )}
    </>
  );
};

export default TopHeadlines;
