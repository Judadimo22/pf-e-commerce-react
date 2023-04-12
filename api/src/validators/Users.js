const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelpers");

const validateCreate = [
  check("name")
    .exists()
    .not()
    .withMessage("You must enter a name")
    .isLength({ min: 3 }, { max: 20 })
    .isString(),
  check("lastname")
    .exists()
    .withMessage("You must enter a lastname")
    .isLength({ min: 3 }, { max: 20 })
    .not()
    .isString(),
  check("email")
    .exists()
    .withMessage("You must enter a email")
    .not()
    .isString(),
  // check("addres")
  //   .exists()
  //   .not()
  //   .withMessage("You must enter a addres")
  //   .isLength({ min: 3 }, { max: 35 })
  //   .isString(),
  // check("phone")
  //   .exists()
  //   .withMessage("You must enter a phone number")
  //   .not()
  //   .isString(),

  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreate };
