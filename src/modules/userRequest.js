import {store} from '../store';
import endpoints from '../modules/endpoints';
import {actionGetUserProfileComplete} from '../actions/userActions';

export default function fetchUserProfile(authInfo) {
    const {url, headers} = endpoints.getUserProfile;
    const {tokenType, accessToken} = authInfo;
    fetch(url, {
        headers: {
            ...headers,
            'Authorization': `${tokenType} ${accessToken}`
        }
    })
    .then(res => res.json())
    .then(res => {
        store.dispatch(actionGetUserProfileComplete(res))
    })
}
