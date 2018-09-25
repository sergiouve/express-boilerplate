const UserManager = require('../../app/managers/UserManager')

const users = {
    list: async (req, res) => {
        const users = await UserManager.list()

        return res.status(200).send(users)
    },

    get: async (req, res, next) => {
        try {
            const userId = req.params.user
            const user = await UserManager.find(userId)

            return res.status(200).send(user)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = users
