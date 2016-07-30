var db = require('../db.js')

function safeSQL() {
  var sqlString = "SELECT image_url, instagram_id, date, image_id FROM doodles WHERE is_active=1 ORDER BY image_id"
  return sqlString
}

exports.getAll = function(done) {
  // Finds all doodles and calls `done(null, doodles)`
  var sqlString = safeSQL()

  db.get().query(sqlString, function(err, doodles) {
    if (err) {
      done(err, null)
    }

    done(null, doodles)
  })
}
