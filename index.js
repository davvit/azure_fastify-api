// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/hello', async (request, reply) => {
    reply.send({ hello: 'world' })
})

const opts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    pong: {
                        type: 'string'
                    }
                }
            }
        }
    }
}

fastify.get('/ping', opts, async (request, reply) => {
    reply.send({ pong: 'it worked!' })
})


// Run the server!
const start = async () => {
    try {
        await fastify.listen(3011)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()