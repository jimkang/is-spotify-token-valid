is-spotify-token-valid
==================

Given an [implicit grant](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow) Spotify authorization token, this function finds out if the token is still valid by making a call to the `v1/browse/categories` endpoint in the browser.

Installation
------------

    npm install is-spotify-token-valid

Usage
-----

    import { isSpotifyTokenValid } from 'is-spotify-token-valid';

    isSpotifyTokenValid(myToken, proceedWithVerdict);

    function proceedWithVerdict(error, isValid) {
      if (error) {
        console.error('Error while checking token.', error);
        return;
      }

      if (isValid) {
        console.log('It is valid! Though not necessarily for all scopes.');
      } else {
        console.log('It is invalid.');
      }
    }

License
-------

The MIT License (MIT)

Copyright (c) 2020 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
