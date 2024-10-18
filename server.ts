import Fastify from 'fastify';
import products from './products.json';
const app = Fastify({
  logger: true
});

app.get('/products', async function handler(request, reply) {
  return reply.send(products);
});

app.get('/report', async function handler(request, reply) {
  const report = {
    productsCount: products.length
  };

  return reply.send(report);
});

app.listen({ port: 7070 }, function (err, address) {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }

  console.info('Listening...');
});
