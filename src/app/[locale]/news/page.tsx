import TopHeadlines from '@/components/news/TopHeadlines';
import { ShowNewsEnum } from '@/enums/news.enums';
import { getNews } from '@/services/news.api';
import { getTranslations } from 'next-intl/server';
import React from 'react';

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: t('newsPageTitle'),
  };
}

const page = async () => {
  const topHeadlinesNews = await getNews(ShowNewsEnum.TOP_HEADLINE);

  return <TopHeadlines initialData={topHeadlinesNews} />;
};

export default page;
