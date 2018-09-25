const status = {
    get: (req, res) => {
        return res.status(200).send({})
    }
}

module.exports = status
