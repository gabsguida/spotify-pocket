import {LOAD_CATEGORY_PLAYLISTS, GET_CATEGORY_PLAYLISTS} from '../actions/types';

const initialCategoryPlaylistsState = {
    playlists: [],
    loading: true
}

export default function categoryPlaylistsReducer(state=initialCategoryPlaylistsState, action){
    switch(action.type){
        case LOAD_CATEGORY_PLAYLISTS:
            return {
                playlists: action.categoryPlaylists,
                loading: true
            }
        case GET_CATEGORY_PLAYLISTS:
            return {
                playlists: action.categoryPlaylists,
                loading: false
            }
        default: return state
    }
}