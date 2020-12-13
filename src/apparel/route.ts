import { Router } from 'express'
import { logger } from '../logger'
import { createApparel } from './service'

const router = Router()

router.post('/add', async (req, res, next) => {
    try {
        res.json(await createApparel(req.body))
    } catch (reason) {
        logger.error(reason)
        next(reason)
    }
})

export { router }