import store from '../store';
import endpoints from './endpoints';
import {actionCategoryPlaylists} from '../actions/actionCategoryPlaylists';

export default async function fetchCategoryPlaylists(authInfo) {
    const {url, headers} = endpoints.getCategoryPlaylists;
    const {tokenType, accessToken} = authInfo;
    let response = await fetch(url, {
        headers: {
            ...headers,
            'Authorization': `${tokenType} ${accessToken}`
        }
    })
    response = await response.json()
    store.dispatch(actionCategoryPlaylists(response.playlists.items))
}