import React  from 'react';
import { Link } from 'react-router-dom';


const PlaylistItem = ({ playlistInfo, path, categoryId }) => {
    const { description, image, name, id } = playlistInfo;

    return(
        <div className="playlists__item" data-testid="playlist">
            <Link to={`${path}/${categoryId}/${id}`} title={name} style={{backgroundImage: `url(${image[0]})`}}>
            </Link>
            <p className="playlists__item__description">
                <strong>{name}</strong>
                {description}
            </p>
        </div>
    )
}

export default PlaylistItem;

