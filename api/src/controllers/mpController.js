const { mercadopago } = require("../utils/mercadopago");
const productSchema = require("../models/Product");

const pagarProducto = async (req, res) => {
  const product = req.body.dataMP;
  const email = product.email;
  const productId = await productSchema.findById(product.id);

  let preference = {
    items: [
      {
        category_id: productId.id,
        title: productId.name,
        description: productId.description,
        picture_url: productId.image,
        quantity: 1,
        currency_id: "ARS",
        unit_price: productId.price,
      },
    ],

    back_urls: {
      success: "https://backend-pf-uh1o.onrender.com/cloth",
      failure: "https://backend-pf-uh1o.onrender.com/cloth",
      pending: "https://backend-pf-uh1o.onrender.com/cloth",
    },
    auto_return: "approved",
    external_reference: email,
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({ id: response.body.id });
    })
    .catch(function (error) {
      console.log(error);
      res.status(400).send(error);
    });
};

module.exports = { pagarProducto };
