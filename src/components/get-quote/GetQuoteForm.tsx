'use client';

import ButtonText from '@/components/common/ButtonText';
import DatePickerWithLabel from '@/components/common/DatePickerWithLabel';
import { InputWithLabel } from '@/components/common/Input';
import InputRadioWithLabel from '@/components/common/InputRadioWithLabel';
import PhoneNumberInput from '@/components/common/PhoneNumberInput';
import SelectWithLabel from '@/components/common/SelectWithLabel';
import ServiceSelect from '@/components/common/ServiceSelect';
import TextAreaWithLabel from '@/components/common/TextAreaWithLabel';
import { useGetQuoteForm } from '@/components/get-quote/hooks/useGetQuoteForm';
import { SelectItem } from '@/components/ui/select';
import {
  getAllCountries,
  getCitiesByState,
  getStatesByCountry,
} from '@/helpers/locationService';
import { useTranslations } from 'next-intl';
import React from 'react';

/**
 * GetQuoteForm Component
 *
 * A form component that collects information from users to generate a tailored quote.
 * The form includes fields for personal information, company details, service preferences,
 * location details, delivery date, and additional specifications.
 *
 * @component
 * @returns {JSX.Element} A form interface for quote generation
 */
const GetQuoteForm = () => {
  // Initialize translations hook
  const t = useTranslations();

  // Get form handling methods and state from custom hook
  const { handleSubmit, handleSelectChange, state, params } = useGetQuoteForm();

  return (
    <div className="container mt-[34px] sm:mt-[60px] bg-white">
      <form
        onSubmit={handleSubmit}
        className="relative bg-white !mx-6 md:mx-[127px] border border-[#D8D8D8] rounded-[15px] py-[41px] px-[22px] md:px-[64px] z-10"
      >
        {/* Form Title */}
        <h2 className="font-bold text-[32px] md:text-[64px] leading-[84%] tracking-normal text-(--color-green-primary)">
          {t('getYourTailoredQuote')}
        </h2>

        {/* Form Fields Grid Layout */}
        <div className="grid gird-cols-1 md:grid-cols-2 gap-[30px] xl:gap-[80px] mt-[30px]">
          {/* Personal Information Section */}
          <InputWithLabel
            label={t('name')}
            type="text"
            placeholder={t('enter')}
            required
            name="name"
            defaultValue={params.name || ''}
          />
          {/* Company Information Section */}
          <InputWithLabel
            label={t('companyName')}
            type="text"
            placeholder={t('enter')}
            required
            name="companyName"
            defaultValue={params.companyName || ''}
          />
          <InputWithLabel
            label={t('position')}
            type="text"
            placeholder={t('enter')}
            required
            name="position"
          />
          <InputWithLabel
            label={t('email')}
            type="email"
            placeholder={t('enter')}
            required
            name="email"
            defaultValue={params.email || ''}
          />
          {/* Contact Information */}
          <PhoneNumberInput
            required
            onCountryChange={(value) => console.log(value)}
          />
          <ServiceSelect
            handleSelectChange={(value: string) => {
              handleSelectChange('serviceType', value);
            }}
          />
          {/* Location */}
          <SelectWithLabel
            label={t('country')}
            placeholder={t('select')}
            required
            onChange={(value) => {
              handleSelectChange('country', value);
            }}
          >
            {getAllCountries().map((country) => (
              <SelectItem key={country.code} value={country.code}>
                {country.name}
              </SelectItem>
            ))}
          </SelectWithLabel>

          <SelectWithLabel
            label={t('state')}
            placeholder={state.country ? t('select') : t('selectCountryFirst')}
            required
            onChange={(value) => {
              handleSelectChange('state', value);
            }}
            disabled={!state.country}
          >
            {getStatesByCountry(state.country).map((state) => (
              <SelectItem key={state.code} value={state.code}>
                {state.name}
              </SelectItem>
            ))}
          </SelectWithLabel>

          <SelectWithLabel
            label={t('city')}
            placeholder={state.state ? t('select') : t('selectStateFirst')}
            required
            onChange={(value) => handleSelectChange('city', value)}
            disabled={!state.state}
          >
            {getCitiesByState(state.country, state.state).map((city) => (
              <SelectItem key={city} value={city}>
                {city}
              </SelectItem>
            ))}
          </SelectWithLabel>
          {/* Delivery Specifications */}
          <DatePickerWithLabel
            label={t('deliveryDate')}
            required
            onChange={(value) => handleSelectChange('deliveryDate', value)}
            date={state.deliveryDate ? new Date(state.deliveryDate) : undefined}
            placeholder={t('select')}
          />
          {/* Safety Information */}
          <InputRadioWithLabel
            label={t('dangerousGoods')}
            name="dangerousGoods"
            options={[
              {
                label: t('yes'),
                value: 'yes',
              },
              {
                label: t('no'),
                value: 'no',
              },
            ]}
            required
          />
          {/* Additional Notes */}
          <TextAreaWithLabel
            label={t('notes')}
            name="notes"
            placeholder={t('enter')}
            type="text"
          />
        </div>

        {/* Submit Button */}
        <ButtonText text={t('send')} className="mt-[24px]" />
      </form>
    </div>
  );
};

export default GetQuoteForm;
