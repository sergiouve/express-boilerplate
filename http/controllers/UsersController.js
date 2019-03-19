const jwt = require('jsonwebtoken');
const { ExtractJwt } = require('passport-jwt');
const config = require('../../config/app');
const UserManager = require('../../app/managers/UserManager');
const UserResource = require('../resources/UserResource');

class UsersController {
    async authenticate(req, res) {
        const jwtOptions = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.usersAppKey
        };

        const user = await UserManager.authenticate(
            req.body.email,
            req.body.password
        );

        if (!user) {
            return res.status(400).json({
                errorCode: 'invalid_credentials',
                errorMessage: 'The user credentials were incorrect',
            });
        }

        let payload = { id: user.id };
        let token = jwt.sign(payload, jwtOptions.secretOrKey);

        return res.json({
            token: token,
            tokenType: 'Bearer'
        });
    }

    async list(req, res) {
        const users = await UserManager.list();

        return res.send(UserResource.collection(users));
    }

    async get(req, res) {
        return res.send(new UserResource(req.user));
    }
}

module.exports = new UsersController;
