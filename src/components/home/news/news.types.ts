import { NewsResponseType } from '@/types/news.types';

export interface NewsTapsProps {
  currentTap: number;
  setCurrentTap: (tap: number) => void;
  news: NewsResponseType[];
}

export interface NewsTapsItemProps {
  changeNews: VoidFunction;
  onProgressFinish: VoidFunction;
  currentTab: number;
  index: number;
  news: NewsResponseType;
}
