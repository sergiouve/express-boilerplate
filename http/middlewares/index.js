const passport = require('./passport')
const formatResponse = require('./formatResponse')

const middlewares = {
    passport: passport,
    formatResponse: formatResponse
}

module.exports = middlewares
