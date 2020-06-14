import {createStore, combineReducers} from 'redux';
import authReducer from '../reducers/authReducer';
import userReducer from '../reducers/userReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import categoryPlaylistsReducer from '../reducers/categoryPlaylistsReducer';

const reducers = combineReducers({
    authReducer,
    userReducer,
    categoriesReducer,
    categoryPlaylistsReducer
})

const store = createStore(reducers)

export default store;
