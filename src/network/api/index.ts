import axios from 'axios';
import { requestHandler, successHandler, errorHandler } from '../interceptors/index';

export const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com', // baseURL: import.meta.env.BASE_URL OR process.env.BASE_URL
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

axiosInstance.interceptors.request.use(
    request => requestHandler(request),
    error => errorHandler(error),
);

axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error),
);

export default axiosInstance;