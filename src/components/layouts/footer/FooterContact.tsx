import ButtonText from '@/components/common/ButtonText';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React, { useState } from 'react';
import { FooterResponseType } from '@/types/footer.types';
import { socialsIcons } from '@/constants/socialsIcons.constants';
import toast from 'react-hot-toast';
import { subscribeEmail } from '@/services/news-subscribe.api';

const FooterContact = ({
  socials,
}: {
  socials: FooterResponseType['Socials'];
}) => {
  if (socials.length === 0) return null;

  const t = useTranslations();
  const [email, setEmail] = useState('');

  const subscribe = async () => {
    if (!email) {
      toast.error(t('requiredFieldsErrorMessage'));
      return;
    }

    await subscribeEmail(email);
    toast.success(t('subscribeToNewsSuccessfully'));
    setEmail('');
  };

  return (
    <div className="container p-[24px] flex flex-col lg:flex-row gap-4 items-center">
      <p className="font-medium text-[16px] leading-none tracking-normal text-(--color-blue-primary)">
        <strong className="font-bold text-[24px] leading-none tracking-normal">
          {t('enterYourEmailTo')}
        </strong>
        <br />
        {t('subscribeToOurNews')}
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder={t('enterYourEmail')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full lg:w-[402px] h-[45px] px-[16px] border border-(--color-blue-primary) rounded-[4px] text-(--color-blue-primary) placeholder:text-(--color-blue-primary) outline-none"
        />
        <ButtonText
          text={t('subscribe')}
          onClick={subscribe}
          className="h-[45px] w-[175px] font-medium text-[20.49px] leading-none tracking-normal"
        />
      </div>

      <div className="mx-auto lg:ml-auto flex gap-2 [&>a]:w-[28px] [&>a]:h-[28px] font-bold [&>a]:flex [&>a]:items-center [&>a]:justify-center [&>a]:text-(--color-blue-primary) [&>a]:rounded-sm [&>a]:hover:bg-(--color-blue-primary) [&>a]:hover:text-white [&>a]:transition">
        {socials?.map((social) => (
          <Link key={social.id} href={social.Url} target="_blank">
            {socialsIcons[social.Platform]}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterContact;
