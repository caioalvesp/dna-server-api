"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const products_json_1 = __importDefault(require("./products.json"));
const cors_1 = __importDefault(require("@fastify/cors"));
const app = (0, fastify_1.default)({
    logger: true
});
app.register(cors_1.default, {});
app.get('/products', async function handler(request, reply) {
    console.log('teste');
    return reply.send(products_json_1.default);
});
app.get('/report', async function handler(request, reply) {
    const report = {
        productsCount: products_json_1.default.length
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
