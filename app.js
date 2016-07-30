var http = require('http')
var express = require('express')
var errorHandler = require('errorhandler')
var bodyParser = require('body-parser')
var logger = require('./logger.js')
var cors = require('cors')
var app = express()

var db = require('./db')

// All environments
app.set('port', process.env.PORT || 3000)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// CORs
var corsOptions = {
  origin: true,
  methods: ['GET']
}

app.use(cors(corsOptions))

app.use(require('./controllers'))

// NOTE - this error handling middleware should be loaded after loading the routes (as above)
if ('development' === app.get('env')) {
  app.use(errorHandler())
}

var server = http.createServer(app)

// Connect to MySQL on start
// NOTE - `MODE_DEVELOP` or `MODE_PRODUCTION` as defined in `db.js`
db.connect(db.MODE_DEVELOP, function(err) {
  if (err) {
    logger.error('Could not connect to database!')
    process.exit(1)

  } else {
    server.listen(app.get('port'), function() {
      logger.info('Kidney John API server started; listening on port ' + app.get('port'))
    })
  }
})

module.exports = server
