var express = require('express')
var router = express.Router()

Doodle = require('../models/doodle.js')

router.get('/', function(req, res) {
  Doodle.getAll(function(err, doodles) {
    if (err) {
      res.status(500)
    }

    res.status(200).json(doodles)
  })
})

module.exports = router
