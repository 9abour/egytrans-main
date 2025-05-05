import { InputWithLabelProps } from '@/components/common/types/input.types';
import React from 'react';
import { INPUT_STAR } from '../../../assets/icons/common.icons';

const TextAreaWithLabel = ({
  label,
  required,
  name,
  placeholder,
}: InputWithLabelProps) => {
  return (
    <div className="w-full col-span-full">
      <label
        htmlFor=""
        className="flex gap-1 mb-1 font-bold text-[14px] leading-none tracking-normal"
      >
        {label}
        {required && <span className="w-[4px] h-[4px]">{INPUT_STAR}</span>}
      </label>

      <textarea
        name={name}
        placeholder={placeholder}
        className="w-full bg-[#F2F2F2] h-[146px] p-[16px] rounded-[4px] resize-none outline-none border border-transparent focus:border-[#263B80]/10"
      />
    </div>
  );
};

export default TextAreaWithLabel;
