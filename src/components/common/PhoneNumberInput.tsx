import { Input, InputWithLabel } from '@/components/common/Input';
import { InputPhoneNumberProps } from '@/components/common/types/input-phone.types';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTranslations } from 'next-intl';
import React from 'react';
import { INPUT_STAR } from '../../../assets/icons/common.icons';

const PhoneNumberInput = ({
  required,
  onCountryChange,
}: InputPhoneNumberProps) => {
  const t = useTranslations();

  return (
    <div>
      <label
        htmlFor=""
        className="flex gap-1 mb-1 font-bold text-[14px] leading-none tracking-normal"
      >
        {t('phoneNumber')}
        {required && <span className="w-[4px] h-[4px]">{INPUT_STAR}</span>}
      </label>

      <div className="flex gap-2 [&>button>svg]:hidden [&>button]:!justify-center">
        <Select onValueChange={onCountryChange}>
          <SelectTrigger className="w-[60px] h-[51px] mt-auto !bg-[#F1F1F1] !border-none">
            <SelectValue placeholder="+1" />
          </SelectTrigger>
          <SelectContent className="!bg-[#F1F1F1]">
            <SelectGroup>
              <SelectLabel>{t('countries')}</SelectLabel>
              <SelectItem value="+20">+20</SelectItem>
              <SelectItem value="+1">+1</SelectItem>
              <SelectItem value="+2">+2</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input
          name="phoneNumber"
          type="tel"
          placeholder="+1 (123) 456-7890"
          required={required}
        />
      </div>
    </div>
  );
};

export default PhoneNumberInput;
