const User = require('../models/User')

const user = {
    findById: async id => {
        const user = await User.find({
            attributes: [ 'id', 'email'],
            where: { id: id },
            raw: true
        })

        return user
    },

    findByEmail: async email => {
        const user = await User.find({
            attributes: [ 'id', 'email', 'password' ],
            where: { email: email },
            raw: true
        })

        return user
    },

    list: async () => {
        const users = User.findAll()

        return users
    }
}

module.exports = user
