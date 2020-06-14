import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';

import {actionPlaylistTracks} from '../actions/playlistTracksActions';
import fetchPlaylistTracks from '../modules/playlistTracksRequest';
import Tracks from '../containers/Tracks/Tracks';

const TracksRoute = ({path}) => {

    const authInfo = useSelector(state=> state.authReducer);
    const {playlists} = useSelector(state => state.categoryPlaylistsReducer);
    const {tracks, loading} = useSelector(state => state.playlistTracksReducer);

    const {playlistId} = useParams();

    const getPlaylistName = (playlistId) => {
        const result = playlists.filter(playlist => playlist.id === playlistId);
        if (result.length) {
            return result[0].name;
        }
        return null;
    }

     useEffect(() => {
        fetchPlaylistTracks(playlistId, authInfo);
    },[playlistId, authInfo])

    return(
        <Tracks
            playlistTracks={tracks}
            playlistName={getPlaylistName(playlistId)}
            isLoading={loading}
            path={path}
        />
    )
}

export default TracksRoute;