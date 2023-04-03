const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelpers");

const validateCreate = [
  check("type").exists().not().withMessage("You must enter a type").isString(),
  check("trademark")
    .exists()
    .not()
    .withMessage("You must enter a trademark")
    .isString(),
  check("image").isString(),
  check("size").exists().not().withMessage("You must enter a size").isString(),
  check("price")
    .isLength({ min: 1 })
    .withMessage("You must enter a price")
    .isNumeric(),
  check("description")
    .exists()
    .withMessage("You must enter a description")
    .not()
    .isLength({ min: 15 }, { max: 550 })
    .isString(),
  check("stock")
    .exists()
    .withMessage("You must enter a stock")
    .not()
    .isNumeric(),
  check("category")
    .exists()
    .not()
    .withMessage("You must enter a category")
    .isString(),
  check("name").exists().not().withMessage("You must enter a name").isString(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreate };
