import { useCurrentLanguage } from '@/hooks/useCurrentLanguage';
import { useRouter } from '@/i18n/navigation';
import { joinUs, uploadFile } from '@/services/join-us.api';
import { JoinUsPayloadType } from '@/types/join-us.types';
import { useTranslations } from 'next-intl';
import { useReducer, useState } from 'react';
import toast from 'react-hot-toast';

/**
 * Interface defining the shape of the form's initial state
 */
interface initialState {
  cv: File | string;
  city: string;
  phoneNumberKey: string;
}

// Initial form state with empty values
const initialState: initialState = {
  cv: '',
  city: '',
  phoneNumberKey: '',
};

/**
 * Reducer function to handle form state updates
 * @param state - Current form state
 * @param action - Action object containing type and payload
 * @returns Updated form state
 */
function formReducer(state: initialState, action: any) {
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
  'phoneNumber',
  'email',
  'city',
  'cv',
  'phoneNumberKey',
  'position',
];

/**
 * Custom hook to manage the quote request form state and operations
 * @returns Object containing form handlers and current state
 */
export const useJoinUsForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const t = useTranslations();
  const currentLang = useCurrentLanguage();
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();
  /**
   * Handles changes in select inputs
   * @param field - Name of the field to update
   * @param value - New value for the field
   */
  const handleSelectChange = (field: string, value: string | File) => {
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
    const inputFields: any = Object.fromEntries(formData);

    // Combine form input fields with select field states
    const fields: JoinUsPayloadType = {
      ...inputFields,
      ...state,
    };

    const fieldsArray = Object.entries(fields);

    // Check if any required fields are empty
    const isMissingFields = fieldsArray.some(
      ([key, value]) => !value.toString().trim() && requiredFields.includes(key)
    );

    if (isMissingFields) {
      toast.error(t('joinUsFormUnfilled'));

      return;
    }

    if (!state.cv) {
      toast(t('joinUsFormUnfilled'));
    }

    setLoading(true);
    toast.loading(t('joinUsFormSending'));

    try {
      // Send form data to the server
      const { id } = await joinUs(fields);

      if (typeof state.cv !== 'string') {
        await uploadFile(
          state.cv,
          'CV',
          `api::join-us.join-us`,
          String(id - 1)
        );
      }

      toast.dismiss();
      toast.success(t('joinUsSuccessMessage'));

      setTimeout(() => {
        toast(t('redirectingAfter2Seconds'));
      }, 1000);

      setTimeout(() => {
        push(`/`);
      }, 3000);
    } catch (error) {
      toast.dismiss();
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, handleSelectChange, state, loading };
};
