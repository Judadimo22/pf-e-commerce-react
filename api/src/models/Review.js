const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  comment: {
    type: String,
    minLength: 5,
    maxLength: 250,
  },
  request: {
    type: String,
    default: "",
    maxLength: 250,
  },
  email: {
    type: String,
    minLength: 5,
    maxLength: 250,
  },
  idProduct: {
    type: String,
    minLength: 5,
    maxLength: 250,
  },

  status: {
    type: String,
    enum: ["answered", "pendding"],
    default: "pendding",
  },
});
module.exports = mongoose.model("Review", reviewSchema);
