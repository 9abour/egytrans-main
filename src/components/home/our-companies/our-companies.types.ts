import { OurCompaniesResponseType } from '@/types/our-companies.types';

export interface OurCompaniesCarouselProps {
  ourCompanies: OurCompaniesResponseType[];
  changeActiveSubBrand: (subBrand: number) => void;
}
