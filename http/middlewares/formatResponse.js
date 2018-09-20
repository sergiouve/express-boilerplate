const formatResponse = (req, res) => {
    const payload = res.locals.payload
    const message = res.locals.message || ''
    const httpCode = res.locals.httpCode || 200

    const response = {
        data: payload,
        message: message
    }

    res.status(httpCode).send(response)
}

module.exports = formatResponse