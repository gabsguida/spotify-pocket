import React  from 'react';

import RouteHeader from '../../components/RouteHeader/RouteHeader';
import PlaylistItem from './PlaylistItem';
import Loading from '../../components/Loading/Loading';

import './Playlists.scss';

const Playlists = ({ data, categoryName, categoryId, isLoading, path }) => {
    return(
        <div className="playlists" data-testid="playlists">
            <div className="container">
                <RouteHeader categoryName={categoryName} path={path} />
                
                {isLoading 
                    ? (<Loading text="Carregando..." />)
                    : (
                        <div className="playlists__content">
                            {data.map(categoryPlaylist => 
                                <PlaylistItem 
                                    description={categoryPlaylist.description}
                                    image={categoryPlaylist.images[0].url}
                                    name={categoryPlaylist.name}
                                    id={categoryPlaylist.id} 
                                    path={path} 
                                    categoryId={categoryId} 
                                    key={categoryPlaylist.id}
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

