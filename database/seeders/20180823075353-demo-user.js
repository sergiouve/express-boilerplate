'use strict'

const bcrypt = require('bcryptjs')

module.exports = {
    up: queryInterface => {
        const now = new Date().toISOString().slice(0, 19).replace('T', ' ')

        return queryInterface.bulkInsert('users', [{
            email: 'admin@example.com',
            password: bcrypt.hashSync('s3cr3t', 8),
            createdAt: now,
            updatedAt: now
        }], {})
    },

    down: queryInterface => {
        return queryInterface.bulkDelete('users', null, {})
    }
}
