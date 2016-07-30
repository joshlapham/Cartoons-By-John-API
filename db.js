var mysql = require('mysql')

var PRODUCTION_DB = 'kidneyjohn_prod'
var DEVELOP_DB = 'kidneyjohn_develop'

exports.MODE_DEVELOP = 'mode_develop'
exports.MODE_PRODUCTION = 'mode_production'

var state = {
  pool: null,
  mode: null,
}

// NOTE - values for local development
exports.connect = function(mode, done) {
  state.pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : DEVELOP_DB
  })

  state.mode = mode
  done()
}

exports.get = function() {
  return state.pool
}
