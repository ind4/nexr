import { Router } from 'express'
import { logger } from '../logger';
import { createBodyMeasurement } from './service';

const router = Router()

router.post('/add', async (req, res, next) => {
    try {
        res.json(await createBodyMeasurement(req.body))
    } catch (reason) {
        logger.error(reason)
        next(reason)
    }
})

export { router }