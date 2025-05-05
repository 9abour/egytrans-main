'use client';

import { useTranslations } from 'next-intl';
import React from 'react';
import background from '@public/70b9abe071eb6529a705ece6e143db59.jpg';
import { InputWithLabel } from '@/components/common/Input';
import ButtonText from '@/components/common/ButtonText';
import BottomBlue from '@/components/common/BottomBlue';
import { useRouter } from '@/i18n/navigation';
import toast from 'react-hot-toast';

const LandingPageQuoteForm = () => {
  const t = useTranslations();
  const { push } = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const { name, email, companyName } = data as Record<string, string>;

    if (!name || !email || !companyName)
      return toast.error(t('requiredFieldsErrorMessage'));

    push(`/get-quote?name=${name}&email=${email}&companyName=${companyName}`);
  };

  return (
    <section className="relative">
      <div className="container section-padding sm:mt-[100px] !px-4 sm:px-auto pb-[48px]">
        <form
          onSubmit={handleSubmit}
          style={{ backgroundImage: `url(${background.src})` }}
          className="relative flex-col lg:flex-row flex-jc-sb gap-[22px] p-[22px] sm:py-[41px]  sm:px-[61px] rounded-[15px] overflow-hidden z-10"
        >
          <div className="max-w-[431px] flex flex-col justify-between z-10">
            <h1 className="font-bold text-[32px] sm:text-[64px] leading-none tracking-normal text-white">
              {t('getYourTailoredQuote')}
            </h1>

            <p className="font-bold text-[14px] sm:text-[16px] leading-[140%] tracking-normal text-white">
              {t('getYourTailoredQuoteDescription')}
            </p>
          </div>

          <div className="w-full max-w-[503px] bg-white rounded-[15px] p-4 sm:py-[53px] sm:px-[45px] z-10">
            <div className="flex flex-col gap-[38px]">
              <InputWithLabel
                label={t('name')}
                name="name"
                type="text"
                placeholder={t('enter')}
                required
              />
              <InputWithLabel
                label={t('email')}
                name="email"
                type="email"
                placeholder={t('enter')}
                required
              />
              <InputWithLabel
                label={t('companyName')}
                type="text"
                name="companyName"
                placeholder={t('enter')}
                required
              />
            </div>

            <ButtonText
              text={t('next')}
              className="mt-[24px] hover:bg-(--color-blue-primary)/40 px-[26px]"
            />
          </div>

          <div className="absolute w-full h-full top-0 left-0 bg-[#01222BC9] z-0" />
        </form>
      </div>
      <BottomBlue />
    </section>
  );
};

export default LandingPageQuoteForm;
