import LanguageAwareService from '@/helpers/languageAwareService';
import { AddressResponseType } from '@/types/address.types';
import api from '@/utils/api';

export const getAddress = async (lang?: string) => {
  const res = await api.get<{ data: AddressResponseType[] }>(
    `/api/addresses?populate=*&${LanguageAwareService.getLanguageParam(lang)}`
  );
  return res.data.data;
};
