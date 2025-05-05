import { BlueHeaderProps } from '@/components/common/types/blue-header.types';
import { cn } from '@/utils/cn';
import React from 'react';

const BlueTitle = ({ text, className }: BlueHeaderProps) => {
  return (
    <div
      className={cn(
        'w-screen mx-auto h-[120px] flex-ai-c bg-(--color-blue-primary) px-4',
        className
      )}
    >
      <h1 className="container font-bold text-[32px] sm:text-[64px] leading-none tracking-normal text-white z-10">
        {text}
      </h1>
    </div>
  );
};

export default BlueTitle;
