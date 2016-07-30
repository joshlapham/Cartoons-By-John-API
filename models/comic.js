var db = require('../db.js')

function safeSQL() {
  var sqlString = 'SELECT name, number, filename, file_url FROM comics WHERE is_active=1 ORDER BY number'
  return sqlString
}

exports.getAll = function(done) {
  // Finds all comics and calls `done(null, comics)`
  var sqlString = safeSQL()

  db.get().query(sqlString, function(err, comics) {
    if (err) {
      done(err, null)
    }

    done(null, comics)
  })
}
