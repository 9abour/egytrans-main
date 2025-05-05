import Image from 'next/image';
import React from 'react';
import ButtonText from '@/components/common/ButtonText';
import { NewsResponseType } from '@/types/news.types';
import getAdminImagePath from '@/utils/getAdminImagePath';
import DateFormatter from '@/helpers/dateFormatter';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

const NewsCard = ({ news }: { news: NewsResponseType }) => {
  const t = useTranslations();

  return (
    <Link
      href={`/news/${news.documentId}`}
      className="flex-jc-sb flex-col md:flex-row gap-[24px] border border-[#D8D8D8D6] hover:border-(--color-blue-primary) bg-(--color-light-gray) py-[18px] px-[26px] rounded-[7px] transition"
    >
      <Image
        src={getAdminImagePath(news.Cover_image)}
        alt="about-us"
        width={277}
        height={247}
        className="w-full md:w-[277px] h-[247px] object-cover rounded-[3px]"
      />

      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="font-medium text-[16px] leading-[140%] tracking-normal text-black">
            {news.Topic}
          </span>
          <span className="font-neue-montreal font-bold text-[12px] leading-[14px] text-[#808080] flex-none order-1 flex-grow-0">
            {DateFormatter.formatDate(news.createdAt)}
          </span>
        </div>
        <h4 className="font-bold text-[24px] leading-[140%] tracking-normal text-(--color-green-primary)">
          {news.Title}
        </h4>
        <p className="font-normal text-[16px] leading-[140%] tracking-normal line-clamp-5 text-black">
          {news.Description}
        </p>
        <ButtonText text={t('readMore')} className="mt-auto" />
      </div>
    </Link>
  );
};

export default NewsCard;
