import LanguageAwareService from '@/helpers/languageAwareService';
import { AboutUsResponseType, ValueResponseType } from '@/types/about-us.types';
import api from '@/utils/api';

export const getAboutUs = async (
  lang?: string
): Promise<AboutUsResponseType> => {
  const res = await api.get<{ data: AboutUsResponseType }>(
    `/api/about-us?populate=*&${LanguageAwareService.getLanguageParam(lang)}`
  );
  return res.data.data;
};

export const getValues = async (
  lang?: string
): Promise<ValueResponseType[]> => {
  const res = await api.get<{ data: ValueResponseType[] }>(
    `/api/values?populate=*&${LanguageAwareService.getLanguageParam(lang)}`
  );
  return res.data.data;
};
