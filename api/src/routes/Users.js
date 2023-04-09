const express = require("express");
const router = express.Router();
const {
  postUser,
  getUsers,
  getUserById,
  putUser,
  deleteUser,
  putRoll,
  postUserLoading,
  postUserSignoff,
} = require("../controllers/usersController");

router.post("/", (req, res) => {
  postUser(req, res);
});

router.post("/loading", (req, res) => {
  postUserLoading(req, res);
});

router.post("/signoff", (req, res) => {
  postUserSignoff;
});

router.get("/", (req, res) => {
  getUsers(req, res);
});

router.get("/:id", (req, res) => {
  getUserById(req, res);
});

router.put("/:id", async (req, res) => {
  putUser(req, res);
});

router.delete("/:id", async (req, res) => {
  deleteUser(req, res);
});

router.post("/roll/:id", async (req, res) => {
  putRoll(req, res);
});

module.exports = router;
