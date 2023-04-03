const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const { MONGODB } = require("./db");
const router = require("./src/routes/index");
const cookieParser = require("cookie-parser");
//const checkJwt = require('./src/Auth/middleware/middleware')
const cors = require("cors");
//app.use(checkJwt);
app.use(cors());
const port = process.env.PORT || 3001;
require("dotenv").config();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
app.use(morgan("dev"));
app.use("/", router);
app.get("/", (req, res) => {
  res.status(200).send("Welcome to PF API");
});

MONGODB();

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

module.exports = app;
