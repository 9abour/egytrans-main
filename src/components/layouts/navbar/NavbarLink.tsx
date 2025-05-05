import React from 'react';
import { Link } from '@/i18n/navigation';
import { NavbarLinkProps } from '@/components/layouts/navbar/types/NavbarLink.types';

/**
 * NavbarLink component that renders a navigation link with animated underline effect
 * @param {NavbarLinkProps} props - The component props
 * @param {string} props.href - The URL the link points to
 * @param {string} props.name - The text content of the link
 * @param {boolean} props.isActive - Whether the link is currently active
 * @returns {JSX.Element} A styled navigation link
 */
const NavbarLink = ({ href, name, isActive = false }: NavbarLinkProps) => {
  return (
    <Link
      href={href}
      className={`
        h-[20px] sm:h-auto font-bold text-[16px] md:text-[20px] leading-none tracking-normal text-[#253B80]
        relative after:absolute after:-bottom-2 after:left-0 after:h-[2px] 
        after:w-full after:origin-bottom-right after:scale-x-0 
        after:bg-(--color-blue-primary) after:transition-transform after:duration-300 
        after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100
        ${isActive ? 'after:scale-x-100' : ''}
      `}
    >
      {name}
    </Link>
  );
};

export default NavbarLink;
