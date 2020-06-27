import {createStore, /*applyMiddleware */} from 'redux';
import storage from 'redux-persist/lib/storage'
//import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import {rootReducer} from '../reducers';

const persistConfig = {
    key: 'spotifyRoot',
    storage,
    whitelist: ['authReducer', 'userReducer'],
    blacklist: ['categoriesReducer', 'categoryPlaylistsReducer', 'playerReducer', 'playlistTracksReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    /* createLogger() shows the entire state in the browser console
        applyMiddleware(
        createLogger()
    ), 
    //*/
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

);

let persistor = persistStore(store);

export {
    store,
    persistor
}
