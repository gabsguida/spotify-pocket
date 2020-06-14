import React  from 'react';

import RouteHeader from '../../components/RouteHeader/RouteHeader';
import PlaylistItem from './PlaylistItem';
import Loading from '../../components/Loading/Loading';

import './Playlists.scss';

const Playlists = ({ categoryPlaylists, categoryName, categoryId, isLoading, path }) => {
    return(
        <div className="playlists" data-testid="playlists">
            <div className="container">
                <RouteHeader categoryName={categoryName} path={path} />
                
                {isLoading 
                    ? (<Loading text="Carregando..." />)
                    : (
                        <div className="playlists__content">
                            {categoryPlaylists.map(categoryPlaylist => 
                                <PlaylistItem 
                                    playlistInfo={categoryPlaylist} 
                                    path={path} 
                                    categoryId={categoryId} 
                                />
                            )}
                        </div>
                    )
                }
                
            </div>
        </div>
    )
}

export default Playlists;

