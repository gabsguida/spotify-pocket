import React  from 'react';

import './Tracks.scss';
import RouteHeader from '../../components/RouteHeader/RouteHeader';
import Track from './Track';
import Loading from '../../components/Loading/Loading';

const Tracks = ({ playlistName, playlistTracks, isLoading, path }) => {
  return (
    <div className="tracks" data-testid="tracks">
      <div className="container">
        <RouteHeader
          categoryName={playlistName}
          path={path}
        />

        {isLoading
          ? (<Loading text="Carregando tracks..."/>)
          : (
            <div className="tracks__content">
              {playlistTracks.length && playlistTracks.map((track, index) => 
                (track.track && <Track key={index} track={track.track} />))}
            </div>
          )}
      </div>
    </div>
  );
}

export default Tracks;

