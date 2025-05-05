import { ValueResponseType } from '@/types/about-us.types';
import getAdminImagePath from '@/utils/getAdminImagePath';
import Image from 'next/image';
import React from 'react';

const OurValuesItem = ({ value }: { value: ValueResponseType }) => {
  return (
    <div className="w-full xl:max-w-[417px] flex flex-col gap-4 bg-[#2E489E] py-[23px] px-[26px] rounded-[7px] border border-transparent hover:border-white/20 transition text-white">
      <Image
        src={getAdminImagePath(value.Image)}
        width={100}
        height={100}
        alt="icon"
        className="w-[30px] h-[30px] object-cover"
      />

      <h4 className="font-bold text-[24px] leading-none tracking-normal">
        {value.Title}
      </h4>

      <p className="font-normal text-[16px] leading-none tracking-normal line-clamp-3">
        {value.Description}
      </p>
    </div>
  );
};

export default OurValuesItem;
