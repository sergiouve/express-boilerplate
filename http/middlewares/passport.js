const passport = require('passport')
const passportJWT = require('passport-jwt')
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy
const jwtOptions = {}
const UserManager = require('../../app/managers/UserManager')

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
jwtOptions.secretOrKey = 'opensesame'

const strategy = new JwtStrategy(jwtOptions, async (jwt_payload, next) => {
    const user = await UserManager.find(jwt_payload.id)
    if (user) {
        next(null, user)
    } else {
        next(null, false)
    }
})

passport.use(strategy)

module.exports = passport
