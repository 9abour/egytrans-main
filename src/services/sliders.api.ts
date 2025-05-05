import LanguageAwareService from '@/helpers/languageAwareService';
import type { SlidesResponseType } from '@/types/slides.types';
import api from '@/utils/api';

export const getSlides = async (
  lang?: string
): Promise<{ data: SlidesResponseType[] }> => {
  const res = await api.get<{ data: SlidesResponseType[] }>(
    `/api/sliders?populate=*&${LanguageAwareService.getLanguageParam(lang)}`
  );

  return res.data;
};
