import React  from 'react';
import { Link } from 'react-router-dom';
import Ink from 'react-ink';


const PlaylistItem = ({ description, image, name, id, path, categoryId }) => {

    return(
        <div className="playlists__item" data-testid="playlist">
            <Link to={`${path}/${categoryId}/${id}`} className="playlists__item__link" title={name} style={{backgroundImage: `url(${image})`}}>
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

