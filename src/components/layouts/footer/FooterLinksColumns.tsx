import { FooterLinksColumnsProps } from '@/components/layouts/footer/footer.types';
import { Link } from '@/i18n/navigation';
import React from 'react';

const FooterLinksColumns = ({ label, links }: FooterLinksColumnsProps) => {
  return (
    <div className="sm:mx-auto lg:mx-0">
      <h2 className="font-bold text-[20px] leading-[150%] tracking-normal text-(--color-blue-primary)">
        {label}
      </h2>

      <ul className="flex flex-col gap-2 mt-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="font-medium text-[16px] leading-[150%] tracking-normal text-[#666666] hover:text-(--color-blue-primary) hover:underline transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinksColumns;
