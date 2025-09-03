// modules
import { FastifyInstance, FastifyPluginOptions } from "fastify";

// controller
import { UrlController } from "../controllers/UrlController";

// router
export async function urlRoutes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/getAllUrls', UrlController.getAllUrls)
    fastify.get('/:shortCode', UrlController.redirectUrl)

    fastify.post('/shortUrl', UrlController.shortUrl)
}