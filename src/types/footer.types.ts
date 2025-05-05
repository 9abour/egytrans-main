import { Socials } from '@/enums/socials.enums';

export interface FooterResponseType {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Numbers: Array<{
    id: number;
    number: string;
  }>;
  Socials: Array<{
    id: number;
    Platform: Socials;
    Url: string;
  }>;
}
