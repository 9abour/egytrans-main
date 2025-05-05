import { Image } from '@/types/common.types';

export interface StoryResponseType {
  id: number;
  documentId: string;
  Description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  Image: Image;
  localizations: any[];
}
