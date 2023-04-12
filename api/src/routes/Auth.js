const express = require("express");
const {
  controllerAuth,
  tokenValidator,
  logOut,
  allUsuarios,
} = require("../controllers/authController");
const fetch = require("node-fetch");
const router = express.Router();
const auth0 = require("auth0-js");

console.log(tokenValidator);

const auth0Client = new auth0.WebAuth({
  domain: "dev-05o0jj0rko2ty63h.us.auth0.com",
  clientID: "xcBeyYqKJ7bYItFfWKmMmFI8v1lkcTbQ",
  redirectUri: "http://localhost:3001/auth/auth/callback",
  responseType: "code",
});

router.get("/login", (req, res) => {
  auth0Client.authorize();
});

const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken");

// Configura las credenciales de acceso a la base de datos
const uri =
  "mongodb+srv://dylan:4Mmfux6Nrp0eIRkX@cluster0.b8g00ex.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

// Función para verificar el token de acceso y obtener los datos del perfil del usuario
async function getProfileFromToken(accessToken) {
  const decodedToken = jwt.decode(accessToken);
  const userId = decodedToken.sub;
  const userManagementApiUrl = `https://dev-05o0jj0rko2ty63h.us.auth0.com/api/v2/users/${userId}`;

  const response = await fetch(userManagementApiUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (response.status !== 200) {
    throw new Error(`Failed to fetch user profile. Status: ${response.status}`);
  }

  const profile = await response.json();
  return profile;
}

// Función para crear un documento en la base de datos con los datos del usuario
async function createDocumentWithUserProfile(userProfile) {
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("users");
    const result = await collection.insertOne(userProfile);
    console.log(`Document created with ID: ${result.insertedId}`);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

// Ruta para la autenticación de usuarios
router.get("/auth/callback", async (req, res) => {
  try {
    const { code } = req.query;
    const auth0Token = await auth0Client.exchangeCodeForToken(code);
    const accessToken = auth0Token.accessToken;

    const userProfile = await getProfileFromToken(accessToken);
    await createDocumentWithUserProfile(userProfile);

    res.redirect("/dashboard");
  } catch (error) {
    console.log(error);
  }
});

router.get("/logout", (req, res) => {
  logOut(req, res);
});

module.exports = router;
