import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPlayFill, BsVolumeUpFill } from 'react-icons/bs';
import Ink from 'react-ink';
import { actionPlayTrack, actionStopPlayback } from '../../actions/playerActions';

import './Track.scss';

const Track = ({ track }) => {
  const {currentTrack, isPlaying} = useSelector(state => state.playerReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isPlaying || (isPlaying && track.id !== currentTrack.id)) {
      dispatch(actionPlayTrack(track));
    }
    else {
      dispatch(actionStopPlayback(track));
    }
  };

  return (
      <div
        className={`track ${isPlaying && currentTrack.id === track.id && 'is-playing'}`}
        data-testid="track"
        onClick={handleClick}>
        <div className="track__play">
          <div className="track__play__wrapper">
            <BsPlayFill className="track__play__icon" />
            <BsVolumeUpFill className="track__play__icon" />
          </div>
        </div>

        <div className="track__info">
          <span className="track__name">{track.name}</span>

          <span className="track__artists">
          {track.artists.length && track.artists.map(({ name }) => name).join(', ')}
        </span>
        </div>

        <Ink />
      </div>
    );

}

export default Track;

