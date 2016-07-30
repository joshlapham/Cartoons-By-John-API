var express = require('express')
var router = express.Router()
var logger = require('../logger.js')

Doodle = require('../models/doodle.js')

router.get('/', function(req, res) {
  logger.info('/doodles')

  Doodle.getAll(function(err, doodles) {
    if (err) {
      console.log(err)
      res.status(500)
    }

    res.status(200).json(doodles)
  })
})

module.exports = router
