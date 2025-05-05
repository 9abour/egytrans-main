import LanguageAwareService from '@/helpers/languageAwareService';
import { StoryResponseType } from '@/types/story.types';
import api from '@/utils/api';

export const getStory = async (lang?: string) => {
  const res = await api.get<{ data: StoryResponseType }>(
    `/api/story?populate=*&${LanguageAwareService.getLanguageParam(lang)}`
  );
  return res.data.data;
};
