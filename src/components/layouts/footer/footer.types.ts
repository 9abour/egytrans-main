export interface FooterLinksColumnsProps {
  label: string;
  links: FooterLink[];
}

export interface FooterLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
}
