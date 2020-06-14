import {LOAD_CATEGORY_PLAYLISTS, GET_CATEGORY_PLAYLISTS} from './types';

export const actionLoadCategoryPlaylists = () => {
    return {
        type: LOAD_CATEGORY_PLAYLISTS,
        categoryPlaylists: []
    }
}

export const actionCategoryPlaylists = (categoryPlaylists) => {
    return {
        type: GET_CATEGORY_PLAYLISTS,
        categoryPlaylists: categoryPlaylists
    }
}