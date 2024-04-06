import axios from 'axios';
// import { requestHandler, successHandler, errorHandler } from '../interceptors/index';

export const axiosInstance = axios.create({
    // baseURL: import.meta.env.BASE_URL, // OR process.env.BASE_URL
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

// // Handle request process
// axiosInstance.interceptors.request.use(request => requestHandler(request));

// // Handle response process
// axiosInstance.interceptors.response.use(
//   response => successHandler(response),
//   error => errorHandler(error),
// );

export default axiosInstance;