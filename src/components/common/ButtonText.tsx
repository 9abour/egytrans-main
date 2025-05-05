'use client';

import { ButtonTextProps } from '@/components/common/types/ButtonText.types';
import { useRouter as useRouterInternal } from '@/i18n/navigation';
import { useRouter as useRouterExternal } from 'next/navigation';
import { cn } from '@/utils/cn';
import React from 'react';

const ButtonText = ({
  text,
  className,
  href,
  internal,
  ...props
}: ButtonTextProps) => {
  const { push: pushInternal } = useRouterInternal();
  const { push: pushExternal } = useRouterExternal();

  const handleClick = () => {
    console.log('href', href);
    if (internal) {
      pushInternal(href!);
    } else {
      pushExternal(href!);
    }
  };

  return (
    <button
      onClick={href ? handleClick : undefined}
      {...props}
      className={cn(
        'w-fit h-[35px] gap-[10px] rounded-[7px] px-[16px] font-medium text-[16px] leading-none tracking-normal bg-(--color-blue-primary) text-white border border-transparent hover:border-(--color-blue-primary)/20 hover:bg-(--color-blue-primary)/20 hover:text-[#253B80] transition-colors duration-500',
        className
      )}
    >
      {text}
    </button>
  );
};

export default ButtonText;
