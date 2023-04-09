const mongoose = require("mongoose");

const contactUsSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  lastname: {
    type: String,
    minLength: 3,
    maxLength: 20,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 500,
  },
  roll: {
    type: String,
    enum: ["user", "invited"],
    default: "invited",
  },
});
module.exports = mongoose.model("ContactUs", contactUsSchema);
