const { mercadopago } = require("../utils/mercadopago");
const productSchema = require("../models/Product");

const pagarProducto = async (req, res) => {
  const product = req.body.dataMP;
  const productos = req.body.dataMP.id;
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
      success: "https://pf-e-commerce-react.vercel.app/",
      failure: "https://pf-e-commerce-react.vercel.app/",
      pending: "https://pf-e-commerce-react.vercel.app/",
    },
    auto_return: "approved",
    external_reference: email,
  };

  productos.forEach((e) => {
    preference.items.push({
      category_id: e.id,
      title: e.name,
      description: e.description,
      picture_url: e.image,
      quantity: e.quantity,
      currency_id: "ARS",
      unit_price: e.price,
    });
  });

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
