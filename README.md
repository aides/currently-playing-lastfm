# Currently playing song on Last.fm

## Prerequisits

Expects `API_KEY` environment variable with Last.fm API key.

## Example

Code

```(javascript)
const song = require('./currently-playing-lastfm');

song.getCurrentlyPlaying('aidez').then(song => {
  console.log(song);
});
```

Produces

```(javascript)
{
  track: 'Rawkfist',
  album: 'Deja Vu: The TFK Anthology',
  artist: 'Thousand Foot Krutch'
}
```
