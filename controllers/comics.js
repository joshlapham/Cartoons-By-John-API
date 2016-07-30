var express = require('express')
var router = express.Router()

Comic = require('../models/comic.js')

router.get('/', function(req, res) {
  Comic.getAll(function(err, comics) {
    if (err) {
      res.status(500)
    }

    res.status(200).json(comics)
  })
})

module.exports = router
