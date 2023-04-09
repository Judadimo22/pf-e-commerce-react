const Review = require("../models/Review");
const reviewSchema = require("../models/Review");
const User = require("../models/User");
const userSchema = require("../models/User");
const Product = require("../models/Product");
const productSchema = require("../models/Product");

const postReview = async (req, res) => {
  const reviewR = reviewSchema(req.body);

  const newReview = await new Review({
    email: reviewR.email,
    idProduct: reviewR.idProduct,
    comment: reviewR.comment,
  });

  const saveReview = await newReview.save();

  const products = await Product.find({ _id: reviewR.idProduct });
  let review = products[0].review;
  review.push(newReview);

  await productSchema.updateOne({ _id: reviewR.idProduct }, { review });

  const users = await User.find({ email: reviewR.email });
  review = users[0].review;
  review.push(newReview);

  await userSchema.updateOne({ email: reviewR.email }, { review });
  res.status(200).json(saveReview);
};

const deleteReview = async (req, res) => {
  const comeet = await reviewSchema.find({ _id: req.params.id });
  const borrado = await reviewSchema.deleteOne({ _id: req.params.id });

  const products = await Product.find({ _id: comeet[0].idProduct });
  let review = products[0].review;
  review = review.filter(
    (e) => JSON.stringify(e._id) !== JSON.stringify(req.params.id)
  );
  await productSchema.updateOne({ _id: comeet[0].idProduct }, { review });

  const users = await User.find({ email: comeet[0].email });
  review = users[0].review;
  review = review.filter(
    (e) => JSON.stringify(e._id) !== JSON.stringify(req.params.id)
  );
  await userSchema.updateOne({ email: comeet[0].email }, { review });
  res.status(200).json(borrado);
};

const getReview = async (req, res) => {
  const review = await reviewSchema.find();
  res.status(200).json(review);
};

const postRequest = async (req, res) => {
  const { id } = req.params;
  const { request, email, idProduct } = req.body;

  let review = await reviewSchema.updateOne({ _id: id }, { request });

  let productId = await productSchema.find({ _id: idProduct });
  productId = productId[0].review;

  review = productId.map((e) =>
    JSON.stringify(e._id) === JSON.stringify(id)
      ? (e.request = request) && e
      : e
  );
  await productSchema.updateOne({ _id: idProduct }, { review });

  let userId = await userSchema.find({ email: email });
  userId = userId[0].review;
  review = userId.map((e) =>
    JSON.stringify(e._id) === JSON.stringify(id)
      ? (e.request = request) && e
      : e
  );
  await userSchema.updateOne({ email: email }, { review });
  const rev = await reviewSchema.updateOne({ _id: id }, { status: "answered" });

  res.status(200).send("OK");
};

module.exports = {
  postReview,
  deleteReview,
  getReview,
  postRequest,
};
