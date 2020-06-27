import {GET_AUTH_INFO} from './types';

export const actionGetAuthInfo = (authInfo) => {
    return {
        type: GET_AUTH_INFO,
        authInfo: {...authInfo}
    }
}

