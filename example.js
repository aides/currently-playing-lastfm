const song = require('./currently-playing-lastfm');

song.getCurrentlyPlaying('aidez').then(song => {
  console.log(song);
});