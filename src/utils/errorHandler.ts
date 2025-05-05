import toast from 'react-hot-toast';

export const showErrorToast = (error: unknown) => {
  // Default error message
  let message = 'Something went wrong';
  let status: number | undefined;

  // Handle Axios/API errors
  if (typeof error === 'object' && error !== null) {
    const err = error as any;

    // Network errors (no internet)
    if (err.message === 'Network Error') {
      toast.error('Network connection error');
      return;
    }

    // Extract status from response
    status = err.response?.status || err.status;

    // Check for API error response format
    if (err.response?.data?.error) {
      const apiError = err.response.data.error;
      status = apiError.status || status;
    }
  }

  // Select message based on status code
  switch (status) {
    case 400:
      toast.error('Validation error, please check your input.');
      break;
    case 401:
      toast.error('Authentication required, please log in.');
      break;
    case 403:
      toast.error('You are not authorized, please log in.');
      break;
    case 404:
      toast.error('Resource not found, please check the URL.');
      break;
    case 500:
    case 502:
    case 503:
      toast.error('Server error, please try again later.');
      break;
    default:
      toast.error(message);
  }
};
