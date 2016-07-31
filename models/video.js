var db = require('../db.js')

exports.getAll = function(done) {
  // Finds all videos and calls `done(null, videos)`
  var sqlString = 'SELECT title, description, duration, date, youtube_id FROM videos WHERE is_active=1 ORDER BY date'

  db.get().query(sqlString, function(err, videos) {
    if (err) {
      done(err, null)
    }

    done(null, videos)
  })
}
