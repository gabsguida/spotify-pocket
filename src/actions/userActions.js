import { GET_USER_PROFILE_COMPLETE } from './types';


export const actionGetUserProfileComplete = (userInfo) => {
    return {
        type: GET_USER_PROFILE_COMPLETE,
        userInfo: {...userInfo}
    }
}