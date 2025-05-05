import { Image } from '@/types/common.types';

export interface AboutUsResponseType {
  id: number;
  documentId: string;
  Main_title: string;
  Sub_title: string;
  Image: Image;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  localizations: [];
}

export interface ValueResponseType {
  id: number;
  documentId: string;
  Title: string;
  Description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  Image: Image;
  localizations: any[];
}
