# Cartoons! By John - API

By Josh Lapham [josh@joshlapham.com]

License: [Beerware](https://en.wikipedia.org/wiki/Beerware)

## What This Is

Backend API for the [Cartoons! By John app](https://appsto.re/au/OKBL1.i), written in [Express.js](http://expressjs.com/)

## Install

### OS X

1. Install [Node.js](http://nodejs.org/): `brew install nodejs`
2. Install [Bower](https://bower.io/): `npm install -h bower`
3. Install project dependencies from `package.json`: `npm install`
4. Start API: `npm start`
5. Ensure API is working: `curl "http://localhost:3000/videos"`

Run as process with [`pm2`](http://pm2.keymetrics.io/) -

`pm2 start app.js`

## Testing

Using [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).

`npm test`

### Coverage

Using [Istanbul](https://github.com/gotwarlost/istanbul).

`npm run cover`
