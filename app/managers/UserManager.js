const BaseManager = require('./BaseManager')
const { ResourceNotFoundException } = require('../exceptions')
const User = require('../models/User')

class UserManager extends BaseManager {
    constructor() {
        // TODO: distinguish between attributes and readable/writable attributes
        // TODO: define a baseQuery as { attributes: this.attributes, raw: true } in BaseManager?
        super()
        this.attributes = ['id', 'email', 'password']
    }

    async find(id) {
        const user = await User.find({
            attributes: this.attributes,
            where: { id: id },
            raw: true
        })

        if (! user) throw new ResourceNotFoundException()

        return user
    }

    async findBy(field, value) {
        const user = await User.find({
            attributes: this.attributes,
            where: { [field]: value },
            raw: true
        })

        if (! user) throw new ResourceNotFoundException()

        return user
    }

    async list() {
        const users = User.findAll({
            attributes: this.attributes,
            raw: true
        })

        return users
    }
}

module.exports = new UserManager
