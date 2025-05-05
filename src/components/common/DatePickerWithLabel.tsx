import React from 'react';
import { INPUT_STAR } from '../../../assets/icons/common.icons';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarDays } from 'lucide-react';
import { DatePickerWithLabelProps } from '@/components/common/types/date-picker.types';
import { format } from 'date-fns';

const DatePickerWithLabel = ({
  label,
  required,
  placeholder,
  onChange,
  date,
}: DatePickerWithLabelProps) => {
  return (
    <div className="w-full [&>button>span]:text-[16px] [&>button>span]:text-[#666666]">
      <label className="flex gap-1 mb-1 font-bold text-[14px] leading-none tracking-normal">
        {label}
        {required && <span className="w-[4px] h-[4px]">{INPUT_STAR}</span>}
      </label>

      <Popover>
        <PopoverTrigger asChild>
          <button className="flex-ai-c flex-jc-sb h-[51px] w-full px-[16px] rounded-[4px] bg-[#F2F2F2] text-[#666666] transition outline-0 border border-transparent focus:border-[#263B80]/10">
            {date ? format(date, 'PPP') : <span>{placeholder}</span>}
            <CalendarDays />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            initialFocus
            onSelect={(date) => date && onChange(date)}
            selected={date}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerWithLabel;
