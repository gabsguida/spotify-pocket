import {GET_CATEGORY_PLAYLISTS} from '../actions/types';

const initialCategoryPlaylistsState = {
    playlists: [],
    loading: true
}

export default function categoryPlaylistsReducer(state=initialCategoryPlaylistsState, action){
    switch(action.type){
        case GET_CATEGORY_PLAYLISTS:
            return {
                playlists: action.playlists,
                loading: false
            }
        default: return state
    }
}