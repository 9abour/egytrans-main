'use client';

import ButtonText from '@/components/common/ButtonText';
import { InputFileWithLabel, InputWithLabel } from '@/components/common/Input';
import PhoneNumberInput from '@/components/common/PhoneNumberInput';
import SelectWithLabel from '@/components/common/SelectWithLabel';
import TextAreaWithLabel from '@/components/common/TextAreaWithLabel';
import { useJoinUsForm } from '@/components/join-us/hooks/useJoinUsForm';
import { SelectItem } from '@/components/ui/select';
import { useTranslations } from 'next-intl';
import React from 'react';
import locationsData from '../../countries/countries.json';

const JoinUsForm = () => {
  const t = useTranslations();

  const { handleSubmit, handleSelectChange } = useJoinUsForm();

  return (
    <div className="container mt-[34px] sm:mt-[60px] bg-white">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white !mx-6 md:mx-[127px] border border-[#D8D8D8] rounded-[15px] py-[41px] px-[22px] md:px-[64px] z-10"
      >
        <p className="font-medium text-[24px] leading-[140%] tracking-normal mb-[12px]">
          {t('career')}
        </p>

        <h2 className="font-bold text-[32px] md:text-[64px] leading-[84%] tracking-normal text-(--color-green-primary)">
          {t('joinUsFormTitle')}
        </h2>

        <div className="grid gird-cols-1 md:grid-cols-2 gap-[30px] xl:gap-[80px] mt-[30px]">
          <InputWithLabel
            label={t('name')}
            type="text"
            placeholder={t('enter')}
            required
            name="name"
          />
          <InputWithLabel
            label={t('email')}
            type="email"
            placeholder={t('enter')}
            required
            name="email"
          />

          <PhoneNumberInput
            required
            onCountryChange={(value) =>
              handleSelectChange('phoneNumberKey', value)
            }
          />

          <SelectWithLabel
            label={t('city')}
            placeholder={t('select')}
            required
            onChange={(value) => handleSelectChange('city', value)}
          >
            {locationsData.cities.map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectWithLabel>

          <InputFileWithLabel
            label={t('attachYourCv')}
            required
            placeholder={t('select')}
            name="cv"
            type="file"
            onChange={(e) =>
              e.target.files?.[0] &&
              handleSelectChange('cv', e.target.files?.[0])
            }
            deleteFileFromState={() => handleSelectChange('cv', '')}
          />

          <InputWithLabel
            label={t('position')}
            type="text"
            placeholder={t('enter')}
            required
            name="position"
          />

          <TextAreaWithLabel
            label={t('message')}
            name="message"
            placeholder={t('enter')}
            type="text"
          />
        </div>

        <ButtonText text={t('joinUs')} className="mt-[24px]" />
      </form>
    </div>
  );
};

export default JoinUsForm;
