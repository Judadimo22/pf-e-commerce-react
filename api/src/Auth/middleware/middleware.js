const express = require("express");
const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");
//const auth0 = require('auth0-js');

const router = express.Router();

const authConfig = {
  domain: "dev-2llhwpnt06dhuqy3.us.auth0.com",
  clientID: "i4gEbxcn35MZoagHLqzqXiRfLRTJRR4V",
  redirectUri: "http://localhost:3001/auth",
  responseType: "token ",
  scope: "openid",
};

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),
  issuer: `https://${authConfig.domain}/`,
  algorithms: ["RS256"],
});

module.exports = { router, checkJwt };
