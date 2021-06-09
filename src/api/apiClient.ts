import axios from 'axios';
import { configs } from '@config';

export const API = axios.create({
  baseURL: `${configs.API_URL}`,
});
