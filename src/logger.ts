import winston from 'winston'
const transports = []

if (process.env.NODE_ENV !== 'production') {
    transports.push(new winston.transports.Console())
    transports.push(new winston.transports.File({ filename: 'local.log' }))
} else {
    // push some cloud based logging transports
}

const logger = winston.createLogger({
    transports
})

export { logger }
