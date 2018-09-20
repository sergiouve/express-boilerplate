const winston = require('winston')

const tsFormat = () => (new Date()).toLocaleString().slice(0, -3)
const logger = new (winston.Logger)({
    colors: {
        trace: 'blue',
        input: 'grey',
        verbose: 'cyan',
        prompt: 'grey',
        debug: 'magenta',
        info: 'cyan',
        data: 'grey',
        help: 'cyan',
        warn: 'yellow',
        error: 'red'
    },
    transports: [
    // colorize the output to the console
        new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            prettyPrint: true,
        })
    ]
})

logger.level = process.env.LOGGER_LEVEL

module.exports = logger
