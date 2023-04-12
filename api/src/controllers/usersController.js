const bcryptjs = require("bcryptjs");
const Product = require("../models/Product");
const User = require("../models/User");
const userSchema = require("../models/User");
const { validateCreate } = require("../validators/Users");
const { eMail } = require("../nodemailer/mailer");

const postUser = async (req, res) => {
  try {
    //validateCreate;
    const user = userSchema(req.body);
    const users = await User.find({ email: user.email });
    if (users.length) {
      res.status(403).send("The email already exist");
    } else {
      const newUser = await new User({
        name: user.name,
        email: user.email,
        image:
          user.image ||
          "https://w7.pngwing.com/pngs/981/645/png-transparent-default-profile-united-states-computer-icons-desktop-free-high-quality-person-icon-miscellaneous-silhouette-symbol.png",
        lastname: user.lastname,
      });

      //const saveUser = await newUser.save();
      console.log(user);
      newUser
        .save()
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(500).json({ message: `${error}` }));
      // res.status(200).json(saveUser);
      eMail(user.email);
    }
  } catch (error) {
    res.status(500).send(`{messaje del catch: ${error}}`);
  }
};

const postUserLoading = async (req, res) => {
  try {
    const { email, password, loading } = req.body;
    const users = await User.findOne({ email });
    let equal;

    users
      ? (equal = bcryptjs.compareSync(password, users.password))
      : res.status(201).json(`${email} Not found`);

    if (equal) {
      await userSchema.updateOne({ _id: users._id }, { $set: { loading } });
      return res.status(200).json(loading);
    } else {
      return res
        .status(201)
        .json({ loading: `${users.loading}`, password: "Incorrect password" });
    }
  } catch (error) {
    res.status(500).send(`{messaje: ${error}}`);
  }
};

const postUserSignoff = async (req, res) => {
  try {
    const { _id, loading } = req.body;
    const users = await Users.findOne({ _id });

    if (users.loading === "valid") {
      let Signoff = await userSchema.updateOne(
        { _id: _id },
        { $set: { loading } }
      );
      return res.status(200).json(Signoff);
    } else {
      return res
        .status(201)
        .json("The transfer cannot be closed. You are not connected.");
    }
  } catch (error) {
    res.status(500).send(`{messaje: ${error}}`);
  }
};

const getUsers = async (req, res) => {
  try {
    const { email } = req.query;
    const users = await userSchema.find();

    if (email) {
      let userEmail = users.filter((user) => user.email === email);
      userEmail.length
        ? res.status(200).json(userEmail)
        : res.status(201).json("Not found");
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    let user = await userSchema.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json(`Error ${error}`);
  }
};

const putUser = async (req, res) => {
  const { id } = req.params;

  const { name, lastname, email, addres, phone, roll, city, country } =
    req.body;

  userSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          name,
          lastname,
          email,
          addres,
          phone,
          roll,
          city,
          country,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  userSchema
    .findOneAndDelete({ _id: id })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

const putRoll = async (req, res) => {
  const { id } = req.params;
  const { roll } = req.body;

  userSchema
    .updateOne(
      { _id: id },
      {
        $set: {
          roll,
        },
      }
    )
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json({ message: `${error} ` }));
};

module.exports = {
  postUser,
  getUsers,
  getUserById,
  putUser,
  deleteUser,
  putRoll,
  postUserLoading,
  postUserSignoff,
};
