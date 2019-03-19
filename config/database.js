require('dotenv').config();

module.exports = {
    'development': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_SCHEMA,
        'host': process.env.DB_HOST,
        'dialect': 'mysql'
    },
    'test': {
        'username': process.env.TEST_DB_USER,
        'password': process.env.TEST_DB_PASSWORD,
        'database': process.env.TEST_DB_SCHEMA,
        'host': process.env.TEST_DB_HOST,
        'dialect': 'sqlite',
    },
    'production': {
        'username': process.env.DB_USER,
        'password': process.env.DB_PASSWORD,
        'database': process.env.DB_SCHEMA,
        'host': process.env.DB_HOST,
        'dialect': 'mysql'
    }
};
