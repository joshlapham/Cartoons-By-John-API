var express = require('express')
var router = express.Router()

router.use('/videos', require('./videos.js'))
router.use('/doodles', require('./doodles.js'))

module.exports = router
