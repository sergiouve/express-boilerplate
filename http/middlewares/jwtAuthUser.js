const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');
const User = require('../../app/models/User');
const config = require('../../config/app');

// Since we are configuring several different JWT strategies
// (users auth for the CCMT frontend and agents auth for
// the Buddy frontend), override this strategy name from its
// default 'jwt', so we can configure both.
const STRATEGY_NAME = 'user-jwt';

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.usersAppKey
};

const userStrategy = new Strategy(jwtOptions, async (jwtPayload, next) => {
    const user = await User.findById(jwtPayload.id);
    if (user) {
        return next(null, user);
    }

    // User not found, reject the authentication
    return next(null, false);
});

passport.use(STRATEGY_NAME, userStrategy);

module.exports = () => {
    return passport.authenticate(STRATEGY_NAME, { session: false });
};
