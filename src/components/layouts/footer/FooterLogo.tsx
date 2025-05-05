import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import React from 'react';
import logo from '@public/00db9073a77bf8d34106d71cd80dc2fe.png';

const FooterLogo = () => {
  return (
    <Link href="/">
      <Image
        src={logo}
        alt="logo"
        width={333}
        height={100}
        className="w-full max-w-[330px]"
      />
    </Link>
  );
};

export default FooterLogo;
