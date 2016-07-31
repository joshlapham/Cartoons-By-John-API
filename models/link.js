var db = require('../db.js')

exports.getAll = function(done) {
  // Finds all links and calls `done(null, links)`
  var sqlString = 'SELECT title, url, image_path, image_url FROM links WHERE is_active=1 ORDER BY title'

  db.get().query(sqlString, function(err, links) {
    if (err) {
      done(err, null)
    }

    done(null, links)
  })
}
