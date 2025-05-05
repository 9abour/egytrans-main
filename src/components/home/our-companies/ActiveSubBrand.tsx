import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { OurCompaniesResponseType } from '@/types/our-companies.types';
import getAdminImagePath from '@/utils/getAdminImagePath';

const ActiveSubBrand = ({ company }: { company: OurCompaniesResponseType }) => {
  if (!company) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-[16px] leading-[140%] tracking-normal line-clamp-3 text-(--color-paragraph-grey) mt-1"
      >
        {company.Company_description}
      </motion.p>
      <Image
        src={getAdminImagePath(company.Company_image)}
        width={600}
        height={600}
        alt=""
        className="w-full rounded-[12px] mt-[32px] max-h-[536px] h-full"
      />
    </motion.div>
  );
};

export default ActiveSubBrand;
