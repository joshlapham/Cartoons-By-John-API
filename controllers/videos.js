var express = require('express')
var router = express.Router()

Video = require('../models/video.js')

router.get('/', function(req, res) {
  Video.getAll(function(err, videos) {
    if (err) {
      res.status(500)
    }

    res.status(200).json(videos)
  })
})

module.exports = router
