import {GET_AUTH_INFO, GET_CACHED_AUTH_INFO} from './types';

export const actionGetAuthInfo = (authInfo) => {
    return {
        type: GET_AUTH_INFO,
        authInfo: {...authInfo}
    }
}

export const actionGetCachedAuthInfo = (authInfo) => {
    return {
        type: GET_CACHED_AUTH_INFO,
        authInfo: {...authInfo}
    }
}
