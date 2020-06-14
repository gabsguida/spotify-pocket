import store from '../store';
import endpoints from './endpoints';
import {actionLoadCategoryPlaylists} from '../actions/categoryPlaylistsActions';
import {actionCategoryPlaylists} from '../actions/categoryPlaylistsActions';

export default async function fetchCategoryPlaylists(categoryId, authInfo) {
    const {url, headers} = endpoints.getCategoryPlaylists;
    const {tokenType, accessToken} = authInfo;

    store.dispatch(actionLoadCategoryPlaylists())
    const finalUrl = url.replace('{categoryId}', categoryId);
    let response = await fetch(finalUrl, {
        headers: {
            ...headers,
            'Authorization': `${tokenType} ${accessToken}`
        }
    })
    response = await response.json()
    store.dispatch(actionCategoryPlaylists(response.playlists.items))
}