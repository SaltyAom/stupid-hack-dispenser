import type { FastifyPluginCallback } from 'fastify'

import { validateSchema } from '@services/hooks'
import { dispenserInputSchema } from './models'
import { reserve } from './services'

import type { DispenserHandler } from './types'

const dispenser: FastifyPluginCallback = (app, _, done) => {
    app.post<DispenserHandler>(
        '/:id',
        {
            preValidation: validateSchema(dispenserInputSchema)
        },
        async ({ params: { id }, body }) => reserve(id, body)
    )

    done()
}

export default dispenser
