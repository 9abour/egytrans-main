import { ServiceTypesResponseType } from '@/types/services.types';
import api from '@/utils/api';
import { showErrorToast } from '@/utils/errorHandler';

const SERVICE_TYPES_BASE_ENDPOINT = 'api/service-types';

export async function getServiceTypes(
  lang?: 'ar' | 'en'
): Promise<ServiceTypesResponseType[]> {
  try {
    const response = await api.get<{ data: ServiceTypesResponseType[] }>(
      `${SERVICE_TYPES_BASE_ENDPOINT}${lang ? `?lang=${lang}` : ''}}`
    );
    return response.data.data;
  } catch (error) {
    showErrorToast(error);
    console.error('Failed to fetch service type data:', error);
    throw new Error('Unable to fetch service type data');
  }
}
