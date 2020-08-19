import axios from 'axios';
import { getCredentials } from '../commons/utils/localStorage.utils';

const instance = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/',
});

instance.interceptors.request.use((config) => {
  const { token } = getCredentials();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
