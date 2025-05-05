import { StatsResponseType } from '@/types/stats.types';
import api from '@/utils/api';

export const getStats = async (
  lang?: string
): Promise<{ data: StatsResponseType }> => {
  const res = await api.get<{ data: StatsResponseType }>(`/api/statics`);

  return res.data;
};
