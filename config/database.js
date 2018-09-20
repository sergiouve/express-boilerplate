require('dotenv').config()

module.exports = {
    'development': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_SCHEMA,
        'host': process.env.DB_HOST,
        'dialect': 'mysql'
    },
    'test': {
        'username': process.env.DB_TEST_USER,
        'password': process.env.DB_TEST_PASSWORD,
        'database': process.env.DB_TEST_SCHEMA,
        'host': process.env.DB_TEST_HOST,
        'dialect': 'mysql'
    },
    'production': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_SCHEMA,
        'host': process.env.DB_HOST,
        'dialect': 'mysql'
    }
}
