const BaseManager = require('./BaseManager');
const { ResourceNotFoundException } = require('../exceptions');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const database = require('../../lib/database');

class UserManager extends BaseManager {
    constructor() {
        // TODO: distinguish between attributes and readable/writable attributes
        // TODO: define a baseQuery as { attributes: this.attributes, raw: true } in BaseManager?
        super()
        this.attributes = ['id', 'email', 'password']
    }

    async authenticate(email, password) {
        if (! email || ! password) {
            return null;
        }

        const user = await User.find({ where: { email } });

        if (user && (await bcrypt.compare(password, user.password))) {
            return user;
        }

        return null;
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
