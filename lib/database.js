const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    operatorsAliases: false,
    define: {
        charset: 'utf8'
    }
})

module.exports = sequelize
