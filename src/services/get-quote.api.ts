import api from '@/utils/api';
import { showErrorToast } from '@/utils/errorHandler';

const BASE_ENDPOINT = 'api/quotes';

export async function getQuote(payload: Record<string, string>) {
  try {
    const {
      name,
      companyName,
      email,
      position,
      phoneNumberKey,
      phoneNumber,
      serviceType,
      country,
      state,
      city,
      deliveryDate,
      dangerousGoods,
      notes,
    } = payload;

    const response = await api.post<{ data: any }>(BASE_ENDPOINT, {
      data: {
        Name: name,
        Company_name: companyName,
        Email: email,
        Position: position,
        Phone_number_key: phoneNumberKey,
        Phone_number: phoneNumber,
        service_type: serviceType,
        Country: country,
        State: state,
        City: city,
        Delivery_date: deliveryDate,
        Dangerous_goods: dangerousGoods === 'yes' ? true : false,
        Notes: notes,
      },
    });

    return response.data.data;
  } catch (error) {
    showErrorToast(error);
    console.log('Failed to get quote', error);
    throw new Error('Failed to get quote');
  }
}
