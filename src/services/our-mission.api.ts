import LanguageAwareService from '@/helpers/languageAwareService';
import { OurMissionResponseType } from '@/types/our-mission.types';
import api from '@/utils/api';

export const getOurMission = async (
  lang?: string
): Promise<OurMissionResponseType> => {
  const res = await api.get<{ data: OurMissionResponseType }>(
    `/api/mission?populate=*&${LanguageAwareService.getLanguageParam(lang)}`
  );
  return res.data.data;
};
