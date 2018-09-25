const UserManager = require('../../app/managers/UserManager')
const UserResource = require('../resources/UserResource')

const users = {
    list: async (req, res) => {
        const users = await UserManager.list()

        return res.status(200).send(UserResource.collection(users))
    },

    get: async (req, res, next) => {
        try {
            const userId = req.params.user
            const user = await UserManager.find(userId)

            return res.status(200).send(new UserResource(user).toJson())
        } catch (error) {
            next(error)
        }
    }
}

module.exports = users
