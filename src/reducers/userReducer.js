import { GET_USER_PROFILE_COMPLETE } from '../actions/types';

const initialUserState = {
    email: '',
    userName: '',
    thumb: ''
}

export default function userReducer(state=initialUserState, action){
    switch (action.type) {
        case GET_USER_PROFILE_COMPLETE: 
            return {
                ...state,
                email: action.userInfo.email,
                userName: action.userInfo.display_name,
                thumb: action.userInfo.images.length ? action.userInfo.images[0].url : ""
            }
    
        default: return state;
    }
}