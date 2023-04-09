const { Schema, model, Model } = require("mongoose");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const productSchema = new Schema(
  {
    trademark: { type: String, required: true },
    image: { type: String, required: true },
    //stock: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    tallas: [
      {
        talla: { type: String, ref: "Talla" },
        stock: { type: Number, required: true },
      },
    ],
    description: { type: String, required: true },
    // tags:[{type: String}],
    type: {
      type: String,
      enum: {
        values: ["shirts", "pants", "hoodies", "hats"],
        message: "{VALUE} no es un tipo valido",
      },
    },
    categorie: {
      type: String,
      enum: {
        values: ["men", "women", "kid"],
        message: "{VALUE} no es una categoria valida",
      },
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    review: {
      type: Array,
      ref: "Review",
    },
  },
  { timestamps: true }
);

module.exports = model("Product", productSchema);

// module.exports = (sequelize) => {
//     sequelize.define(
//         "product",
//         {
//             id: {
//                 type: DataTypes.UUID,
//                 defaultValue: DataTypes.UUIDV4,
//                 allowNull: false,
//                 primaryKey: true,
//               },
//             trademark: {
//                 type: DataTypes.STRING,
//                 allowNull: false,

//             },
//             size: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false
//             },
//             stock: {
//                 type: DataTypes.BOOLEAN,
//                 allowNull: true
//             },
//             image: {
//                 type: DataTypes.STRING,
//                 allowNull: true,
//             },
//             price: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false
//             },
//             description:{
//                 type: DataTypes.STRING,
//                 allowNull: false
//             }

//         },{ timestamps: false }
//         )
// }
