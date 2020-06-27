import {store} from '../store';
import endpoints from '../modules/endpoints';
import {actionGetUserProfileComplete} from '../actions/userActions';

export default function fetchUserProfile(authInfo) {
    const {url, headers} = endpoints.getUserProfile;
    const {token_type, access_token} = authInfo;

    fetch(url, {
        headers: {
            ...headers,
            'Authorization': `${token_type} ${access_token}`
        }
    })
    .then(res => res.json())
    .then(res => {
        store.dispatch(actionGetUserProfileComplete(res))
    })
}
