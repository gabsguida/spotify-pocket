import React  from 'react';
import { Link } from 'react-router-dom';
import Ink from 'react-ink';


const PlaylistItem = ({ playlistInfo, path, categoryId }) => {
    const { description, images, name, id } = playlistInfo;

    return(
        <div className="playlists__item" data-testid="playlist">
            <Link to={`${path}/${categoryId}/${id}`} className="playlists__item__link" title={name} style={{backgroundImage: `url(${images[0].url})`}}>
                <Ink />
            </Link>
            <p className="playlists__item__description">
                <strong>{name}</strong>
                {description}
            </p>
        </div>
    )
}

export default PlaylistItem;

