const assert = require('chai').assert
const server = require('../../server')

describe('GET /', () => {
    it('should return HTTP 200', (done) => {
        server.inject({
            method: 'GET',
            url: '/'
        }, (response) => {
            assert.equal(200, response.statusCode)
            done()
        })
    })
})
