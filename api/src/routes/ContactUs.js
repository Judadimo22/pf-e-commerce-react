const express = require("express");
const router = express.Router();
const {
  getContactUs,
  postContactUs,
  getByIdForm,
  putContactUs,
  deleteContactUs,
} = require("../controllers/contactUsController");

router.post("/", (req, res) => {
  postContactUs(req, res);
});

router.get("/", (req, res) => {
  getContactUs(req, res);
});

router.get("/:id", (req, res) => {
  getByIdForm(req, res);
});

router.put("/:id", (req, res) => {
  putContactUs(req, res);
});

router.delete("/:id", (req, res) => {
  deleteContactUs(req, res);
});

module.exports = router;
