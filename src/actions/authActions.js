import {GET_AUTH_INFO, GET_AUTH_ERROR} from './types';

export const actionGetAuthInfo = (authInfo) => {
    return {
        type: GET_AUTH_INFO,
        authInfo: {...authInfo}
    }
}
