var db = require('../db.js')

function safeSQL() {
  var sqlString = "SELECT name, description, duration, date, youtube_id, created_at FROM videos WHERE is_active=1 ORDER BY created_at"
  return sqlString
}

exports.getAll = function(done) {
  // Finds all videos and calls `done(null, videos)`
  var sqlString = safeSQL()

  db.get().query(sqlString, function(err, videos) {
    if (err) {
      done(err, null)
    }

    done(null, videos)
  })
}
