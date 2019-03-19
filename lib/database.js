const Sequelize = require('sequelize')
const envConfigs = require('../config/database');

const environment = process.env.NODE_ENV;
const config = envConfigs[environment];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: false,
    operatorsAliases: false,
    storage: config.sqliteFile,
    define: {
        charset: 'utf8'
    }
})

module.exports = sequelize
