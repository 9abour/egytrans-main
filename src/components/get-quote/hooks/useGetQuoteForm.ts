import { useRouter } from '@/i18n/navigation';
import { getQuote } from '@/services/get-quote.api';
import { useTranslations } from 'next-intl';
import React from 'react';
import toast from 'react-hot-toast';

/**
 * Interface defining the shape of the form's initial state
 */
export interface GetQuoteInitialState {
  serviceType: string;
  country: string;
  state: string;
  city: string;
  deliveryDate: string;
}

// Initial form state with empty values
const initialState: GetQuoteInitialState = {
  serviceType: '',
  country: '',
  state: '',
  city: '',
  deliveryDate: '',
};

/**
 * Reducer function to handle form state updates
 * @param state - Current form state
 * @param action - Action object containing type and payload
 * @returns Updated form state
 */
function formReducer(state: GetQuoteInitialState, action: any) {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

// List of fields that are required in the form
const requiredFields = [
  'name',
  'companyName',
  'position',
  'email',
  'phoneNumber',
  'phoneNumberKey',
  'serviceType',
  'country',
  'state',
  'city',
  'deliveryDate',
  'dangerousGoods',
];

/**
 * Custom hook to manage the quote request form state and operations
 * @returns Object containing form handlers and current state
 */
export const useGetQuoteForm = () => {
  const [state, dispatch] = React.useReducer(formReducer, initialState);
  const t = useTranslations();
  const [loading, setLoading] = React.useState(false);
  const { push } = useRouter();
  const [params, setParams] = React.useState<Record<string, string>>({});

  const searchParams = new URLSearchParams(window.location.search);

  React.useEffect(() => {
    const params = Object.fromEntries(searchParams);

    const { name, email, companyName } = params;

    setParams({ name, email, companyName });
  }, [searchParams.size]);

  /**
   * Handles changes in select inputs
   * @param field - Name of the field to update
   * @param value - New value for the field
   */
  const handleSelectChange = (
    field: string,
    value: string | Date | boolean
  ) => {
    dispatch({ type: 'UPDATE_FIELD', field, value });
  };

  /**
   * Handles form submission
   * @param e - Form submission event
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data from the submitted form
    const formData = new FormData(e.currentTarget);
    const inputFields = Object.fromEntries(formData);

    // Combine form input fields with select field states
    const fields = {
      ...inputFields,
      ...state,
    };

    const fieldsArray = Object.entries(fields);

    // Check if any required fields are empty
    const isMissingFields = fieldsArray.some(
      ([key, value]) => !value.toString().trim() && requiredFields.includes(key)
    );

    if (isMissingFields) {
      toast.error(t('requiredFieldsErrorMessage'));

      return;
    }

    try {
      setLoading(true);
      await getQuote(fields);

      toast.success(t('getQuoteSuccessMessage'));

      setTimeout(() => {
        toast(t('redirectingAfter2Seconds'));
      }, 1000);

      setTimeout(() => {
        push(`/`);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return {
    handleSubmit,
    handleSelectChange,
    state,
    loading,
    params,
  };
};
