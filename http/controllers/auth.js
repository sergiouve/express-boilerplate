const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passportJWT = require('passport-jwt')
const UserManager = require('../../app/managers/UserManager')

const ExtractJwt = passportJWT.ExtractJwt
const jwtOptions = {}

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
jwtOptions.secretOrKey = 'opensesame'

const auth = {
    login: async (req, res) => {
        try {
            const email = req.body.email
            const user = await UserManager.findBy('email', email)

            if (await bcrypt.compare(req.body.password, user.password)) {
                const payload = { id: user.id }
                const token = jwt.sign(payload, jwtOptions.secretOrKey)

                return res.json({ token: token, type: 'Bearer' })
            } else {
                return res.status(400).json({ message: 'Invalid credentials'} )
            }
        } catch (error) {
            return res.status(400).json({ message: 'Invalid credentials'} )
        }
    }
}

module.exports = auth
