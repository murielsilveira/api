'use strict'

const Hapi = require('hapi')
const server = new Hapi.Server()

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
}, (err) => {
    if (err) throw err

    if (!module.parent)
        server.start((err) => {
            if (err) throw err

            console.log('Server running at:', server.info.uri)
        })
})

module.exports = server
