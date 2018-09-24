const UserManager = require('../../app/managers/UserManager')

const users = {
    list: async (req, res, next) => {
        const users = await UserManager.list()

        res.locals.payload = { users: users }

        next()
    },

    get: async (req, res, next) => {
        const userId = req.params.user
        const user = await UserManager.find(userId)

        res.locals.payload = { user: user }

        next()
    }
}

module.exports = users
