const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: process.env.MERCADOPAGO_KEY,
});

module.exports = { mercadopago };
