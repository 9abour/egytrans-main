import api from '@/utils/api';
import { showErrorToast } from '@/utils/errorHandler';

const BASE_ENDPOINT = '/news-subscribes';

/**
 * Subscribes an email to news
 * @param email The email to subscribe
 * @param lang Optional language parameter
 * @returns Promise indicating success or failure
 */

export async function subscribeEmail(email: string): Promise<void> {
  try {
    await api.post(`${BASE_ENDPOINT}`, {
      data: { Email: email },
    });
  } catch (error) {
    showErrorToast(error);
    console.error('Failed to subscribe email:', error);
    throw new Error('Unable to subscribe email');
  }
}
