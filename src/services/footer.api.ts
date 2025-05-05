import LanguageAwareService from '@/helpers/languageAwareService';
import { FooterResponseType } from '@/types/footer.types';
import api from '@/utils/api';

export const getFooter = async (
  lang?: string
): Promise<{ data: FooterResponseType }> => {
  const res = await api.get<{ data: FooterResponseType }>(
    `/api/footer?populate=*&${LanguageAwareService.getLanguageParam(lang)}`
  );

  return res.data;
};
