// .env
import 'dotenv/config';

// modules
import fastify, { FastifyInstance }  from "fastify";
import cors from "@fastify/cors";

// consts
const app: FastifyInstance = fastify({ 
    logger: {
        transport: {
            target: 'pino-pretty'
        }
    }
})

const PORT = process.env.PORT
const HOST = process.env.HOST

// configs
await app.register(cors)

// routes
import { urlRoutes } from './routes/urlRoutes';
app.register(urlRoutes, { prefix: '/api/url/' })

// conn
import { main } from './connection/mongo';
main().catch(e => app.log.error(e))

try {
    app.listen({ host: HOST, port: PORT })
} catch(e) {
    app.log.error(e)
}