const passport = require('./passport');
const errorHandler = require('./errorHandler');

const middlewares = {
    passport,
    errorHandler
};

module.exports = middlewares;
