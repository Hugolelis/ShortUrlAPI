// models
import { Url } from '../models/Url';

// modules
import { FastifyRequest, FastifyReply } from 'fastify';
import { nanoid } from 'nanoid'

// interfaces
import { UrlCreateForm } from '../helpers/interfaces/UrlCreateForm';
import { ShortUrlParams } from '../helpers/interfaces/ShortUrlParams';

// helpers
import { validateUrl } from '../helpers/utils/validate-url';
import { createdDate } from '../helpers/utils/created-date';
import { createdUrl } from '../helpers/utils/created-url';

export class UrlController{
    static async shortUrl(req: FastifyRequest, reply: FastifyReply) {
        const { originalURL } = req.body as UrlCreateForm || { }

        // check data
        if(!originalURL) {
            reply.code(400).send({ status: 400, error: true, message: 'Preencha o campo!' })
        }

        const isValidUrl = validateUrl(originalURL)

        if(!isValidUrl) {
            reply.code(400).send({ status: 400, error: true, message: 'URL inválida!' })
        }

        // generate slug
        let shortCode: string = nanoid(6)

        while(await Url.findOne({ shortCode })) {
            shortCode = nanoid(6)
        }

        // generate shorURL
        const shortURL = createdUrl(shortCode)

        // create obj
        const newUrl = new Url({ originalURL, shortURL, shortCode })

        try {
            await newUrl.save()
            reply.code(201).send({ status: 201, error: false, message: 'URL criada com sucesso!', data: newUrl })
            return
        } catch(e) {
            reply.code(400).send({ status: 400, error: true, message: e })
        }
    }

    static async redirectUrl(req: FastifyRequest, reply: FastifyReply) {
        const { shortCode } = req.params as ShortUrlParams

        const URL = await Url.findOne({ shortCode: shortCode })

        if(!URL) {
            reply.code(404).send({ status: 404, error: true, message: 'URL não encontrada!' })
        }

        try {
            reply.redirect(URL!.originalURL)
            return
        } catch(e) {
            reply.code(400).send({ status: 400, error: true, message: e })
        }
    }

    static async getAllUrls(req: FastifyRequest, reply: FastifyReply) {
        try {
            const URLs = await Url.find({})
            reply.code(200).send({ status: 200, error: false, message: 'Trazendo todas URLs do sistema!', data: URLs })
            return
        } catch(e) {
            reply.code(400).send({ status: 400, error: true, message: e })
        }
    }
}