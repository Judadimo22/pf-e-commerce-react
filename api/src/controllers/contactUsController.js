const contactUsSchema = require("../models/ContactUs");
const { eMail1 } = require("../nodemailer/contactUs");
const { validateCreate } = require("../validators/ContactUs");

const getContactUs = async (req, res) => {
  const { name } = req.query;
  const contactForm = await contactUsSchema.find();

  try {
    if (name) {
      let contName = contactForm.filter((form) =>
        form.name.toLowerCase().includes(name.toLowerCase())
      );
      contName.length
        ? res.status(200).json(contName)
        : res.status(201).json("Not found");
    } else {
      res.status(200).json(contactForm);
    }
  } catch (error) {
    res.send(`Error ${error}`);
  }
};

const postContactUs = async (req, res) => {
  validateCreate;
  const contactForm = contactUsSchema(req.body);

  contactForm
    .save()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));
  eMail1(contactForm.email);
};

const getByIdForm = (req, res) => {
  const { id } = req.params;

  contactUsSchema
    .findById(id)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error}` }));
};

const putContactUs = async (req, res) => {
  const { id } = req.params;
  const { name, lastname, email, message } = req.body;

  contactUsSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          name,
          lastname,
          email,
          message,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
};

const deleteContactUs = async (req, res) => {
  const { id } = req.params;

  contactUsSchema
    .findOneAndDelete({ _id: id })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

module.exports = {
  getContactUs,
  postContactUs,
  getByIdForm,
  putContactUs,
  deleteContactUs,
};
