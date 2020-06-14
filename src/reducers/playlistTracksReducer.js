import {LOAD_PLAYLIST_TRACKS, GET_PLAYLIST_TRACKS} from '../actions/types';

const initialPlaylistTracksState = {
    tracks: [],
    loading: true
}

export default function playlistTracksReducer(state=initialPlaylistTracksState, action){
    switch(action.type){
        case LOAD_PLAYLIST_TRACKS:
            return {
                tracks: action.tracks,
                loading: true
            }
        case GET_PLAYLIST_TRACKS:
            return {
                tracks: action.tracks,
                loading: false
            }
        default: return state
    }
}