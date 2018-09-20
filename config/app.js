require('dotenv').config()

const config = {
    environment: process.env.APP_ENV,
    http: {
        port: process.env.PORT || process.env.HTTP_PORT
    },
    database: {
        db_host: process.env.DB_HOST,
        db_schema: process.env.DB_SCHEMA,
        db_user: process.env.DB_USER,
        db_password: process.env.DB_PASSWORD,
        dialect: 'mysql'
    }
}
module.exports = config
