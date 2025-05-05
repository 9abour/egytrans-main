export const getLocaleFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('locale') || 'en';
  }
  return 'en';
};
