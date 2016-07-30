# Cartoons! By John - API

[![Coverage Status](https://coveralls.io/repos/github/joshlapham/Cartoons-By-John-API/badge.svg?branch=master)](https://coveralls.io/github/joshlapham/Cartoons-By-John-API?branch=master)

By Josh Lapham [josh@joshlapham.com]

License: [Beerware](https://en.wikipedia.org/wiki/Beerware)

## What This Is

Backend API for the [Cartoons! By John app](https://appsto.re/au/OKBL1.i), written in [Express.js](http://expressjs.com/)

## Setup

### OS X

1. Install [Node.js](http://nodejs.org/): `brew install nodejs`
2. Install project dependencies from `package.json`: `npm install`
3. Start API: `npm start`
4. Ensure API is working: `curl "http://localhost:3000/videos"`

Run as process with [PM2](http://pm2.keymetrics.io/): `pm2 start app.js`

## Testing

Using [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/): `npm test`

### Coverage

Using [Istanbul](https://github.com/gotwarlost/istanbul) and [Coveralls](https://coveralls.io/): `npm run cover`

### Lint

Using [ESLint](http://eslint.org/): `npm run lint`
