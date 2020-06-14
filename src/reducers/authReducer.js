import {GET_AUTH_INFO} from '../actions/types';

const initialAuthState = {
    accessToken: '',
    expiresIn: '',
    tokenType: '',
    isLogged: false
}

export default function authReducer(state=initialAuthState, action) {
    switch(action.type){
        case GET_AUTH_INFO: {
            return {
                ...state,
                accessToken: action.authInfo.access_token,
                expiresIn: action.authInfo.expires_in,
                tokenType: action.authInfo.token_type,
                isLogged: true
            }
        }
        default: return state;
    }
}