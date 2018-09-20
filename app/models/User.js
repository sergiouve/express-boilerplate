const Sequelize = require('sequelize')
const sequelize = require('../../lib/database')

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING
}, {
    timestamps: true
})

module.exports = User
