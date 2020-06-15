import {combineReducers} from 'redux';

import authReducer from '../reducers/authReducer';
import userReducer from '../reducers/userReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import categoryPlaylistsReducer from '../reducers/categoryPlaylistsReducer';
import playlistTracksReducer from '../reducers/playlistTracksReducer';
import playerReducer from '../reducers/playerReducer';

export const rootReducer = combineReducers({
    authReducer,
    userReducer,
    categoriesReducer,
    categoryPlaylistsReducer,
    playlistTracksReducer,
    playerReducer
})
