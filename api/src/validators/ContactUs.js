const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelpers");

const validateCreate = [
  check("name")
    .exists()
    .not()
    .withMessage("You must enter a name")
    .isLength({ min: 3 }, { max: 15 })
    .isString(),
  check("lastname")
    .exists()
    .withMessage("You must enter a lastname")
    .isLength({ min: 3 }, { max: 20 })
    .not()
    .isString(),
  check("email")
    .exists()
    .not()
    .withMessage("You must enter a email")
    .isString(),
  check("message")
    .exists()
    .withMessage("You must enter a message")
    .not()
    .isLength({ min: 10 }, { max: 500 })
    .isString(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreate };
