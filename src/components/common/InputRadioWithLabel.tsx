import React from 'react';
import { INPUT_STAR } from '../../../assets/icons/common.icons';
import type { InputRadioWithLabelProps } from '@/components/common/types/input-radio.types';

const InputRadioWithLabel = ({
  label,
  required,
  options,
  name,
}: InputRadioWithLabelProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor=""
        className="flex gap-1 mb-1 font-bold text-[14px] leading-none tracking-normal"
      >
        {label}
        {required && <span className="w-[4px] h-[4px]">{INPUT_STAR}</span>}
      </label>

      {options.map((option) => (
        <div key={option.value} className="flex items-center gap-2">
          <input
            type="radio"
            id={option.value}
            name={name}
            value={option.value}
            className="w-4 h-4"
          />
          <label htmlFor={option.value}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default InputRadioWithLabel;
