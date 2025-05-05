import { JoinUsPayloadType } from '@/types/join-us.types';
import api from '@/utils/api';
import { showErrorToast } from '@/utils/errorHandler';

/**
 * The endpoint for file uploads
 */
const UPLOAD_ENDPOINT = 'api/upload';

/**
 * The endpoint for "Join Us" form submissions
 */
const JOIN_US_ENDPOINT = 'api/join-uses';

/**
 * Uploads a file to the server.
 *
 * @param {File} file - The file to be uploaded
 * @param {string} filed - The field name for the file
 * @param {string} ref - The reference model name
 * @param {string} refId - The reference ID
 * @returns {Promise<any>} - A promise that resolves with the upload response data
 * @throws {Error} - Throws an error if the upload fails
 */
export async function uploadFile(
  file: File,
  filed: string,
  ref: string,
  refId: string
): Promise<any> {
  try {
    const formData = new FormData();

    formData.append('files', file);
    formData.append('ref', ref);
    formData.append('filed', filed);
    formData.append('refId', refId);

    const response = await api.post(UPLOAD_ENDPOINT, formData);

    return response.data;
  } catch (error) {
    showErrorToast(error);
    console.log('Failed to upload file', error);
    throw new Error('Failed to upload file');
  }
}

/**
 * Submits a "Join Us" form with the provided payload.
 *
 * @param {JoinUsPayloadType} payload - The form data to submit
 * @returns {Promise<any>} - A promise that resolves with the submission response data
 * @throws {Error} - Throws an error if the submission fails
 */
export async function joinUs(payload: JoinUsPayloadType): Promise<any> {
  try {
    const formData = new FormData();

    formData.append('data[Name]', payload.name);
    formData.append('data[Email]', payload.email);
    formData.append('data[Phone_number_key]', payload.phoneNumberKey);
    formData.append('data[Phone_number]', payload.phoneNumber);
    formData.append('data[City]', payload.city);
    formData.append('data[Position]', payload.position);
    formData.append('data[Message]', payload.message);

    const response = await api.post<{ data: any }>(JOIN_US_ENDPOINT, formData);
    return response.data.data;
  } catch (error) {
    showErrorToast(error);
    console.log('Failed to join us', error);
    throw new Error('Failed to join us');
  }
}
