import Image from 'next/image';
import React from 'react';
import egy_trans_nosco_logo from '../../../public/egy-trans-nosco-logo.svg';
import { Link } from '@/i18n/navigation';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <Link href="/" className="h-full flex-ai-c">
      <Image
        src={egy_trans_nosco_logo}
        alt="logo"
        width={600}
        height={600}
        className={`w-fit h-[56px] object-cover ${className}`}
      />
    </Link>
  );
};

export default Logo;
