const checkJwt = require("../Auth/middleware/middleware");
const { auth0Client } = require("../Auth/configAuth/configAuth");
const auth0 = require("auth0-js");
const { getUsers } = require("./usersController");

const controllerAuth = async (req, res) => {
  const { redirectUrl } = req.query;
  const loginOptions = {
    state: redirectUrl ? JSON.stringify({ redirectUrl }) : undefined,
  };

  checkJwt;
  //const userId = req.user.sub;
  auth0Client.authorize(loginOptions);
};

const tokenValidator = (req, res) => {
  const { hash } = req.query;
  auth0Client.parseHash({ hash }, (err, authResult) => {
    if (err) {
      res.redirect("/");
    } else {
      const { accessToken, idToken } = authResult;
      const expiresAt = JSON.stringify(
        authResult.expiresIn * 1000 + new Date().getTime()
      );
      res.cookie("access_token", accessToken, { httpOnly: true });
      res.cookie("id_token", idToken, { httpOnly: true });
      res.cookie("expires_at", expiresAt, { httpOnly: true });
      const redirectUrl = req.query.state
        ? JSON.parse(req.query.state).redirectUrl
        : "/";
      res.redirect(redirectUrl);
    }
  });
};

// async function getAllPokemons(){
//   const info = await infoApi();
//   const pokemonsCreated = await getPokemonsCreated();
//   const allPokemons = info.concat(pokemonsCreated);

//   return allPokemons
// }

const allUsuarios = async (req, res) => {
  const info = await getUsers(req, res);
  const autho = await tokenValidator(req, res);
  const allPersonas = info.concat(autho);

  return allPersonas;
};

const logOut = (req, res) => {
  res.clearCookie("access_token");
  res.clearCookie("id_token");
  res.clearCookie("expires_at");
  res.redirect("/");
};

module.exports = {
  controllerAuth,
  tokenValidator,
  logOut,
  allUsuarios,
};
