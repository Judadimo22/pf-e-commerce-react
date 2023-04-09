const express = require("express");
const router = express.Router();
const {
  postReview,
  deleteReview,
  getReview,
  postRequest,
} = require("../controllers/reviewController");

router.post("/", (req, res) => {
  postReview(req, res);
});
router.get("/", (req, res) => {
  getReview(req, res);
});
router.delete("/:id", (req, res) => {
  deleteReview(req, res);
});
router.post("/request/:id", (req, res) => {
  postRequest(req, res);
});
module.exports = router;
