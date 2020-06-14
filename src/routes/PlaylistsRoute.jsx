import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useParams, useDispatch} from 'react-router-dom';

import endpoints from './endpoints';
import {actionCategoryPlaylists} from '../actions/categoryPlaylistsActions';

//import categoryPlaylistsRequest from '../modules/categoryPlaylistsRequest';

import Playlists from '../containers/Playlists/Playlists';

const PlaylistsRoute = ({path}) => {
    const authInfo = useSelector(state=> state.authReducer);
    const {categories} = useSelector(state => state.categoriesReducer);
    const {playlists, loading} = useSelector(state => state.categoryPlaylistsReducer);

    const {categoryId} = useParams();
    const dispatch = useDispatch();

    const fetchCategoryPlaylists = async () => {
        const {headers} = endpoints.getCategoryPlaylists;
        const {tokenType, accessToken} = authInfo;
        const response = await fetch(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
            headers: {
                ...headers,
                'Authorization': `${tokenType} ${accessToken}`
            }
        })
        const playlistsData = await response.json()
        dispatch(actionCategoryPlaylists(playlistsData.playlists.items))
    }

   /*  useEffect(() => {
        //fetchCategoryPlaylists()
        console.log(categoryId)
    },[categoryId]) */
    
    
    return(
        <Playlists 
            categoryPlaylists={playlists}
            categoryName={categories.name}
            categoryId={categoryId}
            isLoading={loading}
            path={path}
        />
    )
}

export default PlaylistsRoute;