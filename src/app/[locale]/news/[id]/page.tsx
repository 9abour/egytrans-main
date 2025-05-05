import React from 'react';
import { getNewsById } from '@/services/news.api';
import NewsDetailsMedia from '@/components/news/NewsDetailsMedia';

const page = async ({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) => {
  const { id, locale } = await params;

  const newsData = await getNewsById(id, locale);

  const news = newsData.data;

  return (
    <section className="bg-white py-[34px] sm:py-[90px] px-4">
      <div className="container">
        <span className="!max-w-[943px] text-(--color-blue-primary) font-medium text-[13.14px] leading-[140%] tracking-normal text-center">
          {news.Topic}
        </span>

        <h2 className="!max-w-[943px] font-bold text-[24px] sm:text-[48px] leading-none tracking-normal text-(--color-green-primary) mt-4">
          {news.Title}
        </h2>

        <p className="!max-w-[943px] text-[#666666] font-medium text-[16px] text:text-[24px] leading-none tracking-normal mt-4">
          {news.Description}
        </p>

        <NewsDetailsMedia news={news} socials={news.Socials} />
      </div>
    </section>
  );
};

export default page;
