const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const { AUTH0_DOMAIN, AUTH0_AUDIENCE } = require('../.env');

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: Jkuri,
    }),

    audience: AUTH0_AUDIENCE,
    issuer: AUTH0_DOMAIN,
    algorithms: ['RS256'],
});

module.exports = {
    checkJwt,
};