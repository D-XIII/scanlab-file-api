// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })
const fs = require('fs');
const path = require('path')

fastify.get('/report/:id', async (request, reply)=>{
    const id = request.params.id
    console.log(id)
    const stream = fs.createReadStream(path.resolve(`/home/cuckoo/.cuckoo/storage/analyses/${id}/reports/report.json`))

    reply.type('text/json').send(stream)
    return reply
})
// Run the server!
const start = async () => {
  try {
    await fastify.listen({ host:'0.0.0.0', port: 8100 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()