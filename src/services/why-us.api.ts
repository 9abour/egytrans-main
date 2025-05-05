import type { WhyUsResponseType } from '@/types/why-us.types';
import api from '@/utils/api';

export const getWhyUs = async (): Promise<{ data: WhyUsResponseType[] }> => {
  const res = await api.get<{ data: WhyUsResponseType[] }>(
    `api/choice-uses?populate=*`
  );

  return res.data;
};
