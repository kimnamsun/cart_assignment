import { AxiosResponse } from 'axios';
import { API } from '@api/apiClient';
import { Product } from '@constants';

export const getProduct = (params = null): Promise<AxiosResponse> =>
  API.get<Product>('/productData.json');
