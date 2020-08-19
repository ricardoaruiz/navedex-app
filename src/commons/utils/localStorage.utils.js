const LOCAL_STORAGE_AUTH_KEY = 'naveEmployees@auth';

export const getCredentials = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY)) || {};

export const setCredentials = (credentials) => localStorage.setItem(
  LOCAL_STORAGE_AUTH_KEY, JSON.stringify(credentials),
);

export const removeCredentiasl = () => localStorage.removeItem(LOCAL_STORAGE_AUTH_KEY);
