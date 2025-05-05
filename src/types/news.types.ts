import { Socials } from '@/enums/socials.enums';
import { Image } from '@/types/common.types';

export interface NewsResponseType {
  id: number;
  documentId: string;
  Topic: string;
  Title: string;
  Description: string;
  Show_on_home: boolean;
  Top_headline: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  Cover_image: Image;
  Media: Image[];
  Socials: Array<{
    id: number;
    Platform: Socials;
    Url: string;
  }>;
  localizations: [];
}
