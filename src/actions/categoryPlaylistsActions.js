import {GET_CATEGORY_PLAYLISTS} from './types';

export const actionCategoryPlaylists = (categoryPlaylists) => {
    return {
        type: GET_CATEGORY_PLAYLISTS,
        categoryPlaylists: categoryPlaylists
    }
}