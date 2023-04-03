const axios = require("axios");
const productSchema = require("../models/Product");
const { validateCreate } = require("../validators/Products");

// const getProduct = async (req, res) => {
//   const { model } = req.query;
//   const product = await productSchema.find();

//   try {
//     if (model) {
//       let productModel = product.filter((prod) =>
//         prod.model.toLowerCase().includes(model.toLowerCase())
//       );

//       productModel.length
//         ? res.status(200).json(productModel)
//         : res.status(201).json("Not found");
//     } else {
//       res.status(200).json(product);
//     }
//   } catch (error) {
//     res.send(`Error ${error}`);
//   }
// };

const postProduct = async (req, res) => {
  validateCreate;
  const product = productSchema(req.body);

  product
    .save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));
};

const getIdProduct = async (req, res) => {
  const { id } = req.params;

  productSchema
    .findById(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));
};

const getTradeMarkProduct = async (req, res) => {
  const name = req.query.name;
  const { model } = req.query;
  const product = await productSchema.find();
  try {
    if (name) {
      // const productSelected = product.filter((product) =>
      //   product.name.toLowerCase().includes(name.toLowerCase())
      // );
      // if (productSelected.length) {
      //   return res.status(200).send(productSelected);
      // } else {
      //   return res.status(404).send({ error: "Product not found." });
      // }
      productSchema
        .findOne({ name: name })
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: `${error}` }));
    } else {
      try {
        if (model) {
          let productModel = product.filter((prod) =>
            prod.model.toLowerCase().includes(model.toLowerCase())
          );

          productModel.length
            ? res.status(200).json(productModel)
            : res.status(201).json("Not found");
        } else {
          res.status(200).json(product);
        }
      } catch (error) {
        res.send(`Error ${error}`);
      }
    }
  } catch (error) {
    res.status(404).send({ error: "Product not found" });
  }
};

const putProduct = async (req, res) => {
  const { id } = req.params;

  const { trademark, stock, price, size, description, type, categorie } =
    req.body;

  productSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          trademark,
          stock,
          price,
          size,
          description,
          type,
          categorie,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const deleteProduct = async (req, res) => {
  const { active } = req.body;
  const { id } = req.params;

  productSchema
    .updateOne({ _id: id }, { $set: { active } })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

module.exports = {
  // getProduct,
  getIdProduct,
  postProduct,
  putProduct,
  deleteProduct,
  getTradeMarkProduct,
};
