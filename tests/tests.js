var assert = require('chai').assert
var expect = require('chai').expect
var should = require('chai').should
var request = require("request")
var app = require('../app')

// Config server for tests
var server = app.listen(0)
var port = server.address().port

// Tests
// Endpoint - /
describe('GET /', function() {
  it('fails if trying to GET /', function(done) {
    request({
      method: 'GET',
      uri: "http://localhost:" + port + "/"

    }, function(err, response, body) {
      if (err) { done(err) }
      assert.equal(response.statusCode, 404)
      done()
    })
  })
})

// Endpoint - /videos
describe('GET /videos', function() {
  it('responds with 200 for /videos endpoint', function(done) {
    request({
      method: 'GET',
      uri: "http://localhost:" + port + "/videos"

    }, function(err, response, body) {
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
      uri: "http://localhost:" + port + "/videos"

    }, function(err, response, body) {
      if (err) {
        done(err)
      }

      var headers = response.headers

      for (var key in headers) {
        if (key == 'content-type') {
          var content_type = headers[key]
          if (content_type.indexOf('application/json') > -1 == true) {
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

    }, function(err, response, body) {
      if (err) {
        done(err)
      }

      assert.equal(response.statusCode, 200)

      var headers = response.headers
      
      for (var key in headers) {
        if (key == 'content-length') {
          var content_length = headers[key]
          assert.equal(content_length > 1, true)
        }
      }

      done()
    })
  })
})
