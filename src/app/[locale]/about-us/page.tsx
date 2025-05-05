import BlueTitle from '@/components/common/BlueHeading';
import BottomBlue from '@/components/common/BottomBlue';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import React from 'react';
import OurValues from '@/components/about-us/OurValues';
import Stats from '@/components/about-us/Stats';
import ARROW_ICON from '@public/Arrow-03.svg';
import { cn } from '@/lib/utils';
import { getCurrentLang } from '@/utils/getCurrentLang';
import { getAboutUs, getValues } from '@/services/about-us.api';
import getAdminImagePath from '@/utils/getAdminImagePath';
import { getOurMission } from '@/services/our-mission.api';
import { getStory } from '@/services/story.api';
import { LocaleParamsProps } from '@/types/common.types';

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: t('aboutUsPageTitle'),
  };
}

const page = async ({ params }: LocaleParamsProps) => {
  const lang = await getCurrentLang(params);

  const t = await getTranslations();
  const [aboutUsData, valuesData, ourMissionData, storyData] =
    await Promise.all([
      getAboutUs(lang),
      getValues(lang),
      getOurMission(lang),
      getStory(lang),
    ]);

  const aboutUs = aboutUsData;
  const values = valuesData;
  const ourMission = ourMissionData;
  const story = storyData;

  return (
    <main className="relative bg-(--color-blue-primary) section-padding !px-0 z-10">
      <section className="relative my-[34px] sm:my-0 bg-white z-10">
        <BlueTitle text={t('about-us')} />

        <div className="relative">
          <div className="relative container p-4 mt-[43px] z-10">
            <h2 className="max-w-[741px] font-bold text-[24px] sm:text-[48px] leading-none tracking-normal text-(--color-green-primary)">
              {aboutUs.Main_title}
            </h2>

            <p className="max-w-[741px] mt-4 font-bold text-[16px] leading-[140%] tracking-normal text-[#808080]">
              {aboutUs.Sub_title}
            </p>

            <Image
              src={getAdminImagePath(aboutUs.Image)}
              alt="about-us"
              width={600}
              height={615}
              className="w-full max-h-[615.68px] rounded-[14px] mt-[23px] object-cover"
            />
          </div>

          <BottomBlue />
        </div>
      </section>

      <OurValues values={values} />

      <BottomBlue />

      <section className="relative px-4 py-[80px] bg-white z-10">
        <h4 className="max-w-[1089px] mx-auto text-(--color-green-primary) font-bold text-[32px] sm:text-[48px] leading-none tracking-normal text-center">
          {ourMission.Title}
        </h4>

        <p className="max-w-[1089px] mx-auto font-medium text-[18px] sm:text-[32px] leading-none tracking-normal text-center text-[#666666] mt-[24px]">
          {ourMission.Description}
        </p>
      </section>

      <Stats />

      <section className="relative px-4 sm:px-[32px] sm:py-[40px] bg-white pt-[40px] lg:pt-[80px] z-10">
        <div className="relative container flex flex-col lg:flex-row gap-[45px] p-4 lg:py-[41px] lg:px-[31px] bg-white rounded-[14px] border border-[#D8D8D8C4] z-10">
          <Image
            src={getAdminImagePath(story.Image)}
            alt="about-us"
            width={400}
            height={300}
            className="w-full lg:max-w-[385px] h-[277px] object-cover"
          />

          <div>
            <div className={'flex-ai-c'}>
              <Image
                src={ARROW_ICON}
                alt="about-us"
                width={50}
                height={50}
                className={cn(
                  'w-[50px] h-[50px]',
                  lang === 'ar' && 'rotate-180'
                )}
              />
              <h4 className="font-bold text-[32px] sm:text-[48px] leading-none tracking-normal text-(--color-green-primary)">
                {t('ourStory')}
              </h4>
            </div>

            <p className="font-normal text-[18px] sm:text-[20px] leading-[140%] tracking-normal text-[#808080] mt-[24px]">
              {story.Description}
            </p>
          </div>
        </div>

        <BottomBlue />
      </section>
    </main>
  );
};

export default page;
