var express = require('express')
var router = express.Router()

router.use('/videos', require('./videos.js'))

module.exports = router
