'use client';

import {
  InputFileWithLabelProps,
  InputProps,
  InputWithLabelProps,
} from '@/components/common/types/input.types';
import React from 'react';
import {
  ATTACHMENT_ICON,
  INPUT_STAR,
} from '../../../assets/icons/common.icons';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';

const Input = ({ className, ...props }: InputProps) => {
  const currentLanguage = useCurrentLanguage();

  return (
    <input
      {...props}
      dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'}
      className={cn(
        'h-[51px] w-full px-[16px] rounded-[4px] bg-[#F2F2F2] text-(--color-blue-primary) placeholder:text-[#666666] transition outline-0 border border-transparent focus:border-(--color-blue-primary)',
        className
      )}
    />
  );
};

const InputWithLabel = ({ label, required, ...props }: InputWithLabelProps) => {
  return (
    <div className="w-full">
      <label className="flex gap-1 mb-1 font-bold text-[14px] leading-none tracking-normal">
        {label}
        {required && <span className="w-[4px] h-[4px]">{INPUT_STAR}</span>}
      </label>
      <Input {...props} />
    </div>
  );
};

const InputFileWithLabel = ({
  label,
  required,
  type,
  placeholder,
  onChange,
  deleteFileFromState,
}: InputFileWithLabelProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [file, setFile] = React.useState<File | null | undefined>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setFile(e.target.files?.[0]);
  };

  const handleDeleteFile = () => {
    setFile(null);
    deleteFileFromState();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className="w-full">
      <label className="flex gap-1 mb-1 font-bold text-[14px] leading-none tracking-normal">
        {label}
        {required && <span className="w-[4px] h-[4px]">{INPUT_STAR}</span>}
      </label>

      <input
        type={type}
        accept="pdf/*,doc/*"
        ref={inputRef}
        onChange={handleChange}
        className="hidden"
      />

      {file ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="h-[51px] w-full text-start flex-jc-sb flex-ai-c px-[16px] rounded-[4px] bg-[#F2F2F2] text-[#666666] placeholder:text-[#666666] transition outline-0 border border-transparent focus:border-[#263B80]/10"
        >
          <span className="line-clamp-1">{file.name}</span>

          <X
            size={32}
            className="cursor-pointer hover:text-red-400 transition"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteFile();
            }}
          />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="h-[51px] w-full flex-jc-sb flex-ai-c px-[16px] rounded-[4px] bg-[#F2F2F2] text-[#666666] placeholder:text-[#666666] transition outline-0 border border-transparent focus:border-[#263B80]/10"
        >
          {placeholder}
          {ATTACHMENT_ICON}
        </button>
      )}
    </div>
  );
};

export { Input, InputWithLabel, InputFileWithLabel };
