import axios from 'axios';
import { API_TOKEN, API_URL } from 'shared/config/news-config';

const apiInstance = axios.create({
  baseURL: API_URL,
});

apiInstance.interceptors.request.use((config) => {
  config.headers!['x-api-key'] = `${API_TOKEN}`;
  console.log(API_TOKEN, API_URL);

  return config;
});

export { apiInstance };
