// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const port = process.env.port || 8080;

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

fastify.get('/', opts, async (request, reply) => {
    reply.send({ you: 'are home!' })
})


// Run the server!
const start = async () => {
    try {
        await fastify.listen(port)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
