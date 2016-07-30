var express = require('express')
var router = express.Router()
var logger = require('../logger.js')

Video = require('../models/video.js')

router.get('/', function(req, res) {
  logger.info("/videos")

  Video.getAll(function(err, videos) {
    if (err) {
      console.log(err)
      res.status(500)
    }

    res.status(200).json(videos)
  })
})

module.exports = router
