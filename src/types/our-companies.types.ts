import { Image } from '@/types/common.types';

export interface OurCompaniesResponseType {
  id: number;
  documentId: string;
  Company_name: string;
  Company_description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  Company_logo: Image;
  Company_image: Image;
  Company_link: string;
  localizations: [];
}
