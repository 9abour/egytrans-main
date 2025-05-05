import { Image } from '@/types/common.types';

export interface WhyUsResponseType {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  Image_white: Image;
  Image_blue: Image;
  localizations: any[];
}
