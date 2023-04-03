const mongoose = require("mongoose");
require("dotenv").config(); 

const MONGODB = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(
      process.env.MONGO_URI
    )
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) =>
      console.error("Error connection to MongoDB", error.message)
    );
};

module.exports = { MONGODB };