var assert = require('chai').assert
var expect = require('chai').expect
var request = require('request')

var app = require('../app')

Comic = require('../models/comic.js')
Doodle = require('../models/doodle.js')
Video = require('../models/video.js')

// Config server for tests
var server = app.listen(0)
var port = server.address().port

// Data models
describe('Data models', function() {
  it('should call getAll method successfully for Comics', function(done) {
    Comic.getAll(function(err, comics) {
      expect(err).to.equal(null)
      expect(comics).to.not.equal(null)
      done()
    })
  })

  it('should call getAll method successfully for Doodles', function(done) {
    Doodle.getAll(function(err, doodles) {
      expect(err).to.equal(null)
      expect(doodles).to.not.equal(null)
      done()
    })
  })

  it('should call getAll method successfully for Videos', function(done) {
    Video.getAll(function(err, videos) {
      expect(err).to.equal(null)
      expect(videos).to.not.equal(null)
      done()
    })
  })
})

// Endpoints
describe('Endpoints', function() {
  it('fails if trying to GET /', function(done) {
    request({
      method: 'GET',
      uri: 'http://localhost:' + port + '/'

    }, function(err, response) {
      if (err) {
        done(err)
      }

      assert.equal(response.statusCode, 404)
      done()
    })
  })

  it('responds with 200 for /comics endpoint', function(done) {
    request({
      method: 'GET',
      uri: 'http://localhost:' + port + '/comics'

    }, function(err, response) {
      if (err) {
        done(err)
      }

      assert.equal(response.statusCode, 200)
      done()
    })
  })

  it('responds with JSON for /comics endpoint', function(done) {
    request({
      method: 'GET',
      uri: 'http://localhost:' + port + '/comics'

    }, function(err, response) {
      if (err) {
        done(err)
      }

      var headers = response.headers

      for (var key in headers) {
        if (key === 'content-type') {
          var content_type = headers[key]
          if (content_type.indexOf('application/json') > -1 === true) {
            done()
          }
        }
      }
    })
  })

  it('returns at least one item for /comics endpoint', function(done) {
    request({
      method: 'GET',
      uri: 'http://localhost:' + port + '/comics'

    }, function(err, response) {
      if (err) {
        done(err)
      }

      assert.equal(response.statusCode, 200)

      var headers = response.headers

      for (var key in headers) {
        if (key === 'content-length') {
          var content_length = headers[key]
          assert.equal(content_length > 1, true)
        }
      }

      done()
    })
  })

  it('responds with 200 for /doodles endpoint', function(done) {
    request({
      method: 'GET',
      uri: 'http://localhost:' + port + '/doodles'

    }, function(err, response) {
      if (err) {
        done(err)
      }

      assert.equal(response.statusCode, 200)
      done()
    })
  })

  it('responds with JSON for /doodles endpoint', function(done) {
    request({
      method: 'GET',
      uri: 'http://localhost:' + port + '/doodles'

    }, function(err, response) {
      if (err) {
        done(err)
      }

      var headers = response.headers

      for (var key in headers) {
        if (key === 'content-type') {
          var content_type = headers[key]
          if (content_type.indexOf('application/json') > -1 === true) {
            done()
          }
        }
      }
    })
  })

  it('returns at least one item for /doodles endpoint', function(done) {
    request({
      method: 'GET',
      uri: 'http://localhost:' + port + '/doodles'

    }, function(err, response) {
      if (err) {
        done(err)
      }

      assert.equal(response.statusCode, 200)

      var headers = response.headers

      for (var key in headers) {
        if (key === 'content-length') {
          var content_length = headers[key]
          assert.equal(content_length > 1, true)
        }
      }

      done()
    })
  })

  it('responds with 200 for /videos endpoint', function(done) {
    request({
      method: 'GET',
      uri: 'http://localhost:' + port + '/videos'

    }, function(err, response) {
      if (err) {
        done(err)
      }

      assert.equal(response.statusCode, 200)
      done()
    })
  })

  it('responds with JSON for /videos endpoint', function(done) {
    request({
      method: 'GET',
      uri: 'http://localhost:' + port + '/videos'

    }, function(err, response) {
      if (err) {
        done(err)
      }

      var headers = response.headers

      for (var key in headers) {
        if (key === 'content-type') {
          var content_type = headers[key]
          if (content_type.indexOf('application/json') > -1 === true) {
            done()
          }
        }
      }
    })
  })

  it('returns at least one item for /videos endpoint', function(done) {
    request({
      method: 'GET',
      uri: 'http://localhost:' + port + '/videos'

    }, function(err, response) {
      if (err) {
        done(err)
      }

      assert.equal(response.statusCode, 200)

      var headers = response.headers

      for (var key in headers) {
        if (key === 'content-length') {
          var content_length = headers[key]
          assert.equal(content_length > 1, true)
        }
      }

      done()
    })
  })
})
