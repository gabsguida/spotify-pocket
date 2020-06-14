import { PLAY_TRACK, RESUME_PLAYBACK, PAUSE_PLAYBACK, STOP_PLAYBACK } from './types';


export const actionPlayTrack = (track) => {
    return {
        type: PLAY_TRACK,
        currentTrack: {...track}
    }
}

export const actionResumePlayback = () => {
    return {
        type: RESUME_PLAYBACK,
    }
}

export const actionPausePlayback = () => {
    return {
        type: PAUSE_PLAYBACK,
    }
}

export const actionStopPlayback = () => {
    return {
        type: STOP_PLAYBACK,
    }
}