import BlueTitle from '@/components/common/BlueHeading';
import RecentNews from '@/components/news/RecentNews';
import { ShowNewsEnum } from '@/enums/news.enums';
import { getNews } from '@/services/news.api';
import { getTranslations } from 'next-intl/server';
import React from 'react';

const page = async ({ children }: { children: React.ReactNode }) => {
  const t = await getTranslations();

  const news = (await getNews(ShowNewsEnum.ALL)) || [];

  return (
    <main className="relative bg-(--color-blue-primary) section-padding !px-0 z-10">
      <section className="relative mt-[34px] sm:mt-0 bg-white z-10">
        <BlueTitle text={t('news')} />
      </section>

      {children}

      <BlueTitle text={t('recentNews')} />

      <RecentNews initialData={news} />
    </main>
  );
};

export default page;
