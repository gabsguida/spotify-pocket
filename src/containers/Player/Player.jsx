import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BsPauseFill,
  BsPlayFill,
} from 'react-icons/bs';
import Ink from 'react-ink';

import {actionResumePlayback, actionPausePlayback, actionStopPlayback} from '../../actions/playerActions';

import './Player.scss';

const Player = () => {
  const {currentTrack, isPlaying} = useSelector(state => state.playerReducer);
  const [progressBar, setProgressBar] = useState('0%');
  const dispatch = useDispatch();

  const togglePlayPause = () => {
    const audioPlayer = audioElementRef.current;
    if (isPlaying && !audioPlayer.paused) {
      audioPlayer.pause();
      dispatch(actionPausePlayback());
    }
    else if (!isPlaying && audioPlayer.paused) {
      audioPlayer.play();
      dispatch(actionResumePlayback());
    }
  };

  const handleTimeUpdate = () => {
    const audioPlayer = audioElementRef.current;
    const progress = Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 100) + '%';
    setProgressBar(progress);
  }

  const handleOnEnded = () => {
    dispatch(actionStopPlayback());
  };

  const audioElementRef = useRef();

  return (
    <div className={`player ${currentTrack ? 'is-playing' : ''}`} data-testid="player">
      {currentTrack && (
        <div className="player__wrapper">
          <div className="player__progress-bar">
            <div
              className="player__progress-bar__stroke"
              style={{width: `${progressBar}`}}
            />
          </div>

          <div className="container">
            <figure
              className="player__album-cover"
              style={{ backgroundImage: `url(${currentTrack.album?.images[1]?.url || ''})` }}
            />

            <div className="player__status">
              <div className="player__artist">
                <span className="player__music">
                  {currentTrack.name}
                </span>

                <span className="player__artists">
                  {currentTrack.artists && currentTrack.artists.map(({ name }) => name).join(', ')}
                </span>

                <div className={`player__status__current ${isPlaying ? 'is-playing' : ''}`}>
                  <span>Pausado</span>
                  <span>Reproduzindo</span>
                </div>
              </div>
            </div>

            <div
              className="player__controls"
              onClick={togglePlayPause}
            >
              <div className={`player__control ${!isPlaying ? 'is-paused' : ''}`}>
                {!isPlaying
                  ? (<BsPlayFill />)
                  : (<BsPauseFill />)
                }
                <Ink />
              </div>
            </div>
          </div>

          <audio
            ref={audioElementRef}
            autoPlay
            onEnded={handleOnEnded}
            onTimeUpdate={handleTimeUpdate}
            preload="metadata"
            src={currentTrack.preview_url}
          />
        </div>
      )}
    </div>
  );

};

export default Player;
