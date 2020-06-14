import {LOAD_PLAYLIST_TRACKS, GET_PLAYLIST_TRACKS} from './types';

export const actionLoadPlaylistTracks = () => {
    return {
        type: LOAD_PLAYLIST_TRACKS,
        tracks: []
    }
}

export const actionPlaylistTracks = (tracks) => {
    return {
        type: GET_PLAYLIST_TRACKS,
        tracks: tracks
    }
}