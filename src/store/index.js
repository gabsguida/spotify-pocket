import {createStore, applyMiddleware} from 'redux';
//import AsyncStorage from '@react-native-community/async-storage';
import storage from 'redux-persist/lib/storage'
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import {rootReducer} from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authReducer', 'userReducer'],
    blacklist: ['categoriesReducer', 'categoryPlaylistsReducer', 'playerReducer', 'playlistTracksReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(
        createLogger()
    )
);

let persistor = persistStore(store);

export {
    store,
    persistor
}
