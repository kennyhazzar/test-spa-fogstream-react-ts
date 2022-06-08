import { AxiosPromise } from 'axios';
import { apiInstance } from '.';
import { News, NewsRequestParameters } from './models';

const BASE_URL = '/everything';

export const getNews = (params?: NewsRequestParameters): AxiosPromise<News> => {
  return apiInstance.get<News>(BASE_URL, { params });
};
