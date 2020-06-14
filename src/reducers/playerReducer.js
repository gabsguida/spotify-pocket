import { PLAY_TRACK, RESUME_PLAYBACK, PAUSE_PLAYBACK, STOP_PLAYBACK } from '../actions/types';

const initialPlayerReducer = {
    currentTrack: null,
    isPlaying: false,
}

export default function playerReducer(state=initialPlayerReducer, action){
    switch (action.type) {
        case PLAY_TRACK: 
            return {
                ...state,
                currentTrack: action.currentTrack,
                isPlaying: true
            }
        case RESUME_PLAYBACK: 
            return {
                ...state,
                isPlaying: true
            }
        case PAUSE_PLAYBACK: 
            return {
                ...state,
                isPlaying: false
            }
        case STOP_PLAYBACK: 
            return {
                ...state,
                currentTrack: null,
                isPlaying: false
            }
    
        default: return state;
    }
}