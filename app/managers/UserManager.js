const BaseManager = require('./BaseManager');
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

        return user
    }

    async findBy(field, value) {
        const query = {
            attributes: this.attributes,
            where: {},
            raw: true
        }
        query.where[field] = value
        const user = await User.find(query)

        return user
    }

    async list() {
        const query = {
            attributes: this.attributes,
            raw: true
        }
        const users = User.findAll(query)

        return users
    }
}

module.exports = new UserManager
