import {GET_AUTH_INFO} from '../actions/types';

const initialAuthState = {
    access_token: '',
    expires_in: '',
    token_type: '',
    validUntil: 0,
    isLogged: false
}

export default function authReducer(state=initialAuthState, action) {
    switch(action.type){
        case GET_AUTH_INFO: {
            const newState = {
                ...state,
                access_token: action.authInfo.access_token,
                expires_in: action.authInfo.expires_in,
                token_type: action.authInfo.token_type,
                validUntil: Math.floor(new Date().getTime() / 1000) + parseInt(action.authInfo.expires_in),
                isLogged: true
            }
            return newState;
        }
        default: return state;
    }
}