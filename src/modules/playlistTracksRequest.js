import store from '../store';
import endpoints from './endpoints';
import {actionLoadPlaylistTracks} from '../actions/playlistTracksActions';
import {actionPlaylistTracks} from '../actions/playlistTracksActions';

export default async function fetchPlaylistTracks(playlistId, authInfo) {
    const {url, headers} = endpoints.getPlaylistTracks;
    const {tokenType, accessToken} = authInfo;

    store.dispatch(actionLoadPlaylistTracks())
    const finalUrl = url.replace('{playlistId}', playlistId);
    let response = await fetch(finalUrl, {
        headers: {
            ...headers,
            'Authorization': `${tokenType} ${accessToken}`
        }
    })
    response = await response.json()
    store.dispatch(actionPlaylistTracks(response.items))
}