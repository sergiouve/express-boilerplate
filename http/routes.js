const middlewares = require('./middlewares')
const auth = require('./controllers/auth')
const users = require('./controllers/users')
const status = require('./controllers/status')

const passport = middlewares.passport.authenticate('jwt', { session: false })

const Routes = (app) => {
    app.post('/authenticate', auth.login)

    app.get('/users', passport, users.list, middlewares.formatResponse)
    app.get('/users/:user', passport, users.get, middlewares.formatResponse)

    app.get('/status', status.get)
}

module.exports = Routes
