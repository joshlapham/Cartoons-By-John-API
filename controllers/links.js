var express = require('express')
var router = express.Router()

Link = require('../models/link.js')

router.get('/', function(req, res) {
  Link.getAll(function(err, links) {
    if (err) {
      res.status(500)
    }

    res.status(200).json(links)
  })
})

module.exports = router
