import { Image } from '@/types/common.types';

export interface SlidesResponseType {
  id: number;
  documentId: string;
  Main_title: string;
  Sub_title: string;
  Position: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  Image: Image;
  localizations: [];
}
