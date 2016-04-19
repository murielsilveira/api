'use strict'

var Hapi = require('hapi')
var server = new Hapi.Server()

server.connection({
    host: 'localhost',
    port: 5000
})

server.route(require('./routes'))

server.register({
    register: require('good'),
    options: {
        reporters: [{
            reporter: require('good-console'),
            events: {
                log: '*',
                error: '*',
                request: '*',
                response: '*'
            }
        }]
    }
}, function() {
    if (!module.parent)
        server.start(function() {
            console.log('Server running at:', server.info.uri)
        })
})

module.exports = server
