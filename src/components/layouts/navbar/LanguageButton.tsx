import { LanguageButtonProps } from '@/components/layouts/navbar/types/LanguageButton.types';
import React from 'react';

const LanguageButton = ({
  name,
  icon,
  isActive,
  onClick,
}: LanguageButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className="w-full py-2 px-4 bg-white/80 hover:bg-white transition disabled:!bg-white/20 disabled:cursor-not-allowed"
    >
      <span className=" font-medium text-[16px] leading-[24px] tracking-normal flex-ai-c gap-2">
        {icon}
        {name}
      </span>
    </button>
  );
};

export default LanguageButton;
