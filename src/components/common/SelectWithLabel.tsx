import { SelectWithLabelProps } from '@/components/common/types/select.types';
import React from 'react';
import { INPUT_STAR } from '../../../assets/icons/common.icons';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SelectWithLabel = ({
  label,
  required,
  placeholder,
  children,
  onChange,
  disabled,
}: SelectWithLabelProps) => {
  return (
    <div className="w-full [&>button>span]:text-[16px] [&>button>span]:text-[#666666]">
      <label
        htmlFor=""
        className="flex gap-1 mb-1 font-bold text-[14px] leading-none tracking-normal"
      >
        {label}
        {required && <span className="w-[4px] h-[4px]">{INPUT_STAR}</span>}
      </label>

      <Select onValueChange={onChange} disabled={disabled}>
        <SelectTrigger className="w-full h-[51px] mt-auto !bg-[#F1F1F1] !border-none">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="!bg-[#F1F1F1]">
          <SelectGroup>{children}</SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectWithLabel;
