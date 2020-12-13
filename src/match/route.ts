import { Router } from 'express'
import { logger } from '../logger';
import { getMatchingSize } from './service';
const router = Router()

router.get('/:apparelId/:userId', async (req, res, next) => {
    const { apparelId, userId } = req.params
    try {
        res.json({ "matchingSize": await getMatchingSize(apparelId, userId) })
    } catch (e) {
        logger.error(e)
        next(e)
    }

})

export { router }