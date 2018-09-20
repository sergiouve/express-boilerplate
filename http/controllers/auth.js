const log = require('../../lib/log')
const bcrypt = require('bcryptjs')
const User = require('../../app/managers/user')
const jwt = require('jsonwebtoken')
const passportJWT = require('passport-jwt')

const ExtractJwt = passportJWT.ExtractJwt
const jwtOptions = {}

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
jwtOptions.secretOrKey = 'opensesame'

const auth = {
    login: async (req, res) => {
        if (req.body.email && req.body.password) {
            const email = req.body.email
            const user = await User.findByEmail(email)

            if (user && await bcrypt.compare(req.body.password, user.password)) {
                const payload = { id: user.id }
                const token = jwt.sign(payload, jwtOptions.secretOrKey)

                log.debug(`User ${req.body.email} logged in`)

                return res.json({ token: token, type: 'Bearer' })
            }
        }

        return res.status(400).json({ message: 'Invalid credentials'} )
    }
}

module.exports = auth
