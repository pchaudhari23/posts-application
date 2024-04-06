import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// interface AxiosConfig extends AxiosRequestConfig {
//     handlerEnabled: boolean;
// }

// export const isHandlerEnabled = (
//     config: AxiosConfig = { handlerEnabled: false },
//   ) => {
//     return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled
//       ? false
//       : true;
// };

export const isHandlerEnabled = (config = {
    handlerEnabled: false
}) => {
    return config.hasOwnProperty('handlerEnabled') && !config['handlerEnabled']
      ? false
      : true;
};

export const requestHandler = (request: AxiosRequestConfig) => {
    // if (isHandlerEnabled(request)) {
    //     // Modify request here

    // }
    return request;
};

export const successHandler = (response: AxiosResponse) => {
    // if (isHandlerEnabled(response)) {
    //     // Handle Response

    // }
    return response;
};

export const errorHandler = (error: AxiosError) => {
    let errorMessage: string = 'Something went wrong: ';
    //Add message in error
    if (error.isAxiosError) {
        // if (isHandlerEnabled(error.config)) {
            if (error.response) {
                switch (error.response.status) {
                    case 401:
                        // unautherized logout if 401 response returned from api
                        break;
                    case 400:
                        // bad request
                        break;
                    case 500:
                        // bad request
                        break;
                    default:
                        break;
                }
            }
            // You can decide what you need to do to handle errors.
            // here's example for unautherized user to log them out .
            // error.response.status === 401 && Auth.signOut();
        // }
    } else if (error.request) {
        // client never received a response, or request never left
    } else {
        // anything else
    }

    return Promise.reject({ ...error, message: errorMessage });
};