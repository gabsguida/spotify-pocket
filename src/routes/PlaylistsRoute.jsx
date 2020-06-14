import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';

import Playlists from '../containers/Playlists/Playlists';
import {actionCategoryPlaylists} from '../actions/categoryPlaylistsActions';
import fetchCategoryPlaylists from '../modules/categoryPlaylistsRequest';

const PlaylistsRoute = ({path}) => {

    const authInfo = useSelector(state=> state.authReducer);
    const {categories} = useSelector(state => state.categoriesReducer);
    const {playlists, loading} = useSelector(state => state.categoryPlaylistsReducer);

    const {categoryId} = useParams();

    const getCategoryName = (categoryId) => {
        const result = categories.filter(category => category.id === categoryId);
        if (result.length) {
            return result[0].name;
        }
        return null;
    }

     useEffect(() => {
        fetchCategoryPlaylists(categoryId, authInfo);
    },[categoryId, authInfo])

    return(
        <Playlists
            categoryPlaylists={playlists}
            categoryName={getCategoryName(categoryId)}
            categoryId={categoryId}
            isLoading={loading}
            path={path}
        />
    )
}

export default PlaylistsRoute;