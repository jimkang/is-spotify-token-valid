import request from 'basic-browser-request';
import oknok from 'oknok';

export function isSpotifyTokenValid(spotifyToken, done) {
  var reqOpts = {
    method: 'GET',
    url: 'https://api.spotify.com/v1/browse/categories',
    json: true,
    headers: {
      Authorization: `Bearer ${spotifyToken}`
    }
  };
  request(reqOpts, oknok({ ok: checkResponse, nok: done }));

  function checkResponse(res) {
    done(null, res.statusCode === 200);
  }
}
