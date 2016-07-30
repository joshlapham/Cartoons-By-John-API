var express = require('express')
var router = express.Router()

router.use('/comics', require('./comics.js'))
router.use('/doodles', require('./doodles.js'))
router.use('/videos', require('./videos.js'))

module.exports = router
