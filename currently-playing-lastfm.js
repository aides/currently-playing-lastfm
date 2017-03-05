const request = require('request-promise-native');

const API_URL = 'https://ws.audioscrobbler.com/2.0/';
const API_KEY = process.env['API_KEY'];
const METHOD = 'user.getrecenttracks';

function getCurrentlyPlaying(user) {
  const requestUrl = `${API_URL}?method=${METHOD}&user=${user}&api_key=${API_KEY}&limit=1&format=json`;
  return request.get(requestUrl,{json: true})
    .then(result => {
      const trackInfo = result.recenttracks.track[0];
      const response = {
        track: trackInfo.name,
        album: trackInfo.album['#text'],
        artist: trackInfo.artist['#text'],
      };

      return response;
    });
}

module.exports = {
  getCurrentlyPlaying: getCurrentlyPlaying,
};