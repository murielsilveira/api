'use strict'

const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({
	host: 'localhost',
	port: 5000
})

server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
		return reply('hello hapi')
	}
})

server.start((err) => {
	if (err)
		throw err

	console.log('Server running at:', server.info.uri)
})
