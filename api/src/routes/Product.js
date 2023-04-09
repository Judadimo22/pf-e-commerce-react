const express = require("express");
const router = express.Router();
const {
  getProduct,
  getIdProduct,
  postProduct,
  putProduct,
  deleteProduct,
  getTradeMarkProduct,
} = require("../controllers/productControllers");

const { pagarProducto } = require("../controllers/mpController");

router.post("/", (req, res) => {
  postProduct(req, res);
});

router.post("/buy", (req, res) => {
  pagarProducto(req, res);
});

router.get("/", (req, res) => {
  getTradeMarkProduct(req, res);
});

router.get("/:id", (req, res) => {
  getIdProduct(req, res);
});

// router.get("/:trademark", (req, res) => {
//   getTradeMarkProduct(req, res);
// });

router.put("/:id", (req, res) => {
  putProduct(req, res);
});

router.delete("/:id", (req, res) => {
  deleteProduct(req, res);
});

module.exports = router;
