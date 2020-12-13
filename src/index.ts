import express from 'express'
import { get } from 'config'
import bodyParser from 'body-parser';
import { connect, connection } from 'mongoose';
import { logger } from './logger';
import { router as bodyMeasurementRouter } from './bodyMeasurement/route';
import { router as apparelRouter } from './apparel/route';
import { router as matchRouter } from './match/route';

const port = get<number>("service.port")
const mongoUrl = get<string>("mongo.url")
const mongoOptions = get<any>('mongo.options')

const app = express();
app.use(bodyParser.json())
app.use('/body-measurement', bodyMeasurementRouter)
app.use('/apparel', apparelRouter)
app.use('/match', matchRouter)

connect(mongoUrl, { ...mongoOptions }, (err) => {
    if (err) {
        logger.info('Unable to connect to MongoDB ', err)
        return;
    }
    app.listen({ port }, () => {
        logger.info(`App running on port ${port}`)
    })
})

process.on('SIGINT', async () => {
    await connection.close()
    logger.info('MongoDB Connection Closed')
    process.exit()
})