var assert = require('chai').assert
var server = require('../../server')

describe('GET /', function() {
    it('should return HTTP 200', function (done) {
        server.inject({
            method: 'GET',
            url: '/'
        }, function (response) {
            assert.equal(200, response.statusCode)
            done()
        })
    })
})
