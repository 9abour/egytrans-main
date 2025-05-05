import axios from 'axios';

const isServer = typeof window === 'undefined';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  if (isServer) return config;

  const locale = window.location.pathname.split('/')[1];

  if (locale) {
    config.params = {
      ...config.params,
      locale,
    } as Record<string, unknown>;
  }

  return config;
});

export default api;
