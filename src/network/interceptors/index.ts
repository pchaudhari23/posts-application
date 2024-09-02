import { AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';

export const requestHandler = (request: InternalAxiosRequestConfig) => {

    return request;
};

export const successHandler = (response: AxiosResponse) => {

    return response;
};

export const errorHandler = (error: AxiosError) => {
    let errorMessage: string = 'Something went wrong: ';
   
    return Promise.reject({ ...error, message: errorMessage });
};