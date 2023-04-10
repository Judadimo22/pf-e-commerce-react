const express = require("express");
const router = express.Router();
const {
  postOrder,
  getOrder,
  putOrder,
} = require("../controllers/orderController");

router.post("/", (req, res) => {
  postOrder(req, res);
});

router.get("/", (req, res) => {
  getOrder(req, res);
});

router.put("/:id", (req, res) => {
  putOrder(req, res);
});

module.exports = router;
