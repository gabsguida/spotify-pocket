import {store} from '../store';
import endpoints from './endpoints';
import {actionLoadCategoryPlaylists} from '../actions/categoryPlaylistsActions';
import {actionCategoryPlaylists} from '../actions/categoryPlaylistsActions';

export default async function fetchCategoryPlaylists(categoryId, authInfo) {
    const {url, headers} = endpoints.getCategoryPlaylists;
    const {token_type, access_token} = authInfo;

    store.dispatch(actionLoadCategoryPlaylists())
    const finalUrl = url.replace('{categoryId}', categoryId);
    let response = await fetch(finalUrl, {
        headers: {
            ...headers,
            'Authorization': `${token_type} ${access_token}`
        }
    })
    response = await response.json()
    store.dispatch(actionCategoryPlaylists(response.playlists.items))
}