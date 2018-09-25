const errorHandler = (error, req, res) => {
    const code = error.code || 500
    const type = error.constructor.name || 'Exception'
    const message = error.message || 'ServerError'

    return res.status(code).send({ type, message })
}

module.exports = errorHandler
