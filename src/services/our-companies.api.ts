import LanguageAwareService from '@/helpers/languageAwareService';
import { OurCompaniesResponseType } from '@/types/our-companies.types';
import api from '@/utils/api';

export const getOurCompanies = async (
  lang?: string
): Promise<{
  data: OurCompaniesResponseType[];
}> => {
  const response = await api.get<{ data: OurCompaniesResponseType[] }>(
    `api/companies?populate=*&${LanguageAwareService.getLanguageParam(lang)}`
  );
  return response.data;
};
