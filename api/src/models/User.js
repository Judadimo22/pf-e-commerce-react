const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    addres: {
      type: String,
      required: true,
    },
    review: {
      type: Array,
      ref: "Review",
    },
    userOrder: [
      {
        type: mongoose.Types.ObjectId,
        ref: "userOrderSchema",
      },
    ],
    order: {
      type: Array,
    },
    phone: {
      type: String,
      unique: true,
      minLength: 9,
    },
    roll: {
      type: String,
      enum: ["admin", "user", "superAdmin"],
      default: "user",
    },
    loading: {
      type: String,
      enum: ["valid", "invalid"],
      default: "invalid",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
// const { DataTypes } = require("sequelize");
// // Exportamos una funcion que define el modelo
// // Luego le injectamos la conexion a sequelize.

// module.exports = (sequelize) => {
//     sequelize.define(
//         "consumer",
//         {
//             id: {
//                 type: DataTypes.UUID,
//                 defaultValue: DataTypes.UUIDV4,
//                 allowNull: false,
//                 primaryKey: true,
//               },
//             email: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//                 validate: {
//                     isEmail: true
//                 },
//                 unique: true
//             },
//             addres: {
//                 type: DataTypes.STRING,
//                 allowNull: false,

//             },
//             phone: {
//                 type: DataTypes.INTEGER,
//                 allowNull: false
//             },
//             country: {
//                 type: DataTypes.STRING,
//                 allowNull: false
//             },
//             name: {
//                 type: DataTypes.STRING,
//                 allowNull: false,
//               },

//         },{ timestamps: false }
//         )
// }
