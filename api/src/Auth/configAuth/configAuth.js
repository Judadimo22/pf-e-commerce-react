const auth0 = require("auth0-js");

const auth0Config = {
  domain: "dev-2llhwpnt06dhuqy3.us.auth0.com",
  clientID: "i4gEbxcn35MZoagHLqzqXiRfLRTJRR4V",
  redirectUri: "https://backend-pf-uh1o.onrender.com/",
  responseType: "token ",
  scope: "openid",
};

const auth0Client = new auth0.WebAuth(auth0Config);

module.exports = { auth0Client };
