var express = require('express')
var router = express.Router()
var logger = require('../logger.js')

Comic = require('../models/comic.js')

router.get('/', function(req, res) {
  logger.info('/comics')

  Comic.getAll(function(err, comics) {
    if (err) {
      console.log(err)
      res.status(500)
    }

    res.status(200).json(comics)
  })
})

module.exports = router
