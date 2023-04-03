const { Router } = require("express");
const router = Router();

const productRouter = require("./Product");

router.use("/cloth", productRouter);

module.exports = router;
