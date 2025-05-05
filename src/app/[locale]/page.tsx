import Career from '@/components/home/career/Career';
import Hero from '@/components/home/hero/Hero';
import LandingPageNews from '@/components/home/news/LandingPageNews';
import OurCompanies from '@/components/home/our-companies/OurCompanies';
import LandingPageQuoteForm from '@/components/home/quote-form/LandingPageQuoteForm';
import Stats from '@/components/home/stats/Stats';
import WhyUs from '@/components/home/why-us/WhyUs';
import { ShowNewsEnum } from '@/enums/news.enums';
import { getNews } from '@/services/news.api';
import { getOurCompanies } from '@/services/our-companies.api';
import { getSlides } from '@/services/sliders.api';
import { getStats } from '@/services/stats.api';
import { getWhyUs } from '@/services/why-us.api';
import { LocaleParamsProps } from '@/types/common.types';
import { getCurrentLang } from '@/utils/getCurrentLang';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations();
  return {
    title: t('homePageTitle'),
  };
}

export default async function Home({ params }: LocaleParamsProps) {
  const currentLanguage = await getCurrentLang(params);

  const [slides, whyUs, ourCompanies, news, stats] = await Promise.all([
    getSlides(currentLanguage),
    getWhyUs(),
    getOurCompanies(currentLanguage),
    getNews(ShowNewsEnum.SHOW_ON_HOME, undefined, currentLanguage),
    getStats(),
  ]);

  return (
    <main>
      <Hero initialData={slides?.data} />
      <WhyUs currentLanguage={currentLanguage} initialData={whyUs?.data} />
      <OurCompanies initialData={ourCompanies?.data} />
      <LandingPageNews initialData={news || []} />
      <Career currentLanguage={currentLanguage} />
      <LandingPageQuoteForm />
      <Stats initialData={stats?.data} />
    </main>
  );
}
