import {GET_AUTH_INFO, GET_CACHED_AUTH_INFO} from '../actions/types';

const initialAuthState = {
    accessToken: '',
    expiresIn: '',
    tokenType: '',
    validUntil: 0,
    isLogged: false
}

export default function authReducer(state=initialAuthState, action) {
    switch(action.type){
        case GET_AUTH_INFO: {
            const newState = {
                ...state,
                accessToken: action.authInfo.access_token,
                expiresIn: action.authInfo.expires_in,
                tokenType: action.authInfo.token_type,
                validUntil: Math.floor(new Date().getTime() / 1000) + parseInt(action.authInfo.expires_in),
                isLogged: true
            }
            localStorage.setItem('spotifyAuth', JSON.stringify(newState));
            return newState;
        }
        case GET_CACHED_AUTH_INFO: {
            const newState = {
                ...state,
                accessToken: action.authInfo.accessToken,
                expiresIn: action.authInfo.expiresIn,
                tokenType: action.authInfo.tokenType,
                validUntil: Math.floor(new Date().getTime() / 1000) + parseInt(action.authInfo.expiresIn),
                isLogged: true
            }
            return newState;
        }
        default: return state;
    }
}