const usersManager = require('../../app/managers/user')

const users = {
    list: async (req, res, next) => {
        const users = await usersManager.list()

        res.locals.payload = { users: users }

        next()
    },

    get: async (req, res, next) => {
        const userId = req.params.user
        const user = await usersManager.findById(userId)

        res.locals.payload = { user: user }

        next()
    }
}

module.exports = users
