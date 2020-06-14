import config from '../config';

const spotify = config.spotify;

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const endpoints = {
    getAuthorization: {
        url: `${spotify.authorizationURL}?client_id=${spotify.clientId}&redirect_uri=${encodeURIComponent(spotify.redirectUrl)}&scope=${encodeURIComponent(spotify.scopes.join(' '))}&response_type=token&show_dialog=true`,
        method: 'GET'
    },

    getUserProfile: {
        url:`${spotify.webAPI}/me`,
        headers
    },

    getCategories: {
        url: `${spotify.webAPI}/browse/categories?country=BR&locale=pt_BR`,
        headers
    },

    getCategoryPlaylists: {
        url:`${spotify.webAPI}/browse/categories/{categoryId}/playlists`,
        headers
    },

    getPlaylistTracks: {
        url:`${spotify.webAPI}/playlists/{playlistId}/tracks`,
        headers
    }
}


export default endpoints;
